import React, {Component, Link} from 'react';
import './homepage.css';
import axios from 'axios';
import styles from './myStyle.module.css';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './user_list.component';
import Display from './display';
import Schema_Display from './schema_display';

// const User = props => (
//     <tr>
//         <td>{props.user.emp_ID}</td>
//         {/* add more here */}     
//     </tr>
// )

export default class Home extends Component{

    // var data_to_be_displayed;

    constructor(props){
        super(props);
        this.state = {
            users : [],
            selectedOption:null,
            link:null
        }; //property users is initially and empty array 
        this.getUserList = this.getUserList.bind(this);
        this.onlyUnique = this.onlyUnique.bind(this);
        // console.log(props,'props')
    }
                    
    //intialise "users" state property
    // component lifecycle method --> componentDidMount

    componentDidMount(){    //request backend and retreve data from db
        axios.get("http://localhost:5000/api/week")
                .then(response => {
                    this.setState({ users : response.data});
                })
               .catch( function(error) {
                    console.log(error);
                  })
            
    }


    getUserList(){

        return this.state.users.map( function(currentUser, i){
            // return <User key={currentUser} value={i} />
            // return currentUser.emp_ID; // option isnot visible, but being displayed in console.
            return currentUser; 
        });
    }

    
      handleChange = selectedOption => {
        // this.setState({ selectedOption });
        console.log(`Option selected: `, selectedOption);
        this.setState({link:selectedOption['label'], selectedOption})
      };

      onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    render(){
    //    console.log(this.state.link,'this.state.link')
    
        let data = this.getUserList();
        let ID_list = [];
        let users_list = [];

        for(var n in data){
            var l,v;
          
            for(var key in data[n]){

                if(key === "emp_ID"){
                    l = data[n][key];
                    users_list.push(data[n][key]);
                }
        }
    }

        users_list = users_list.filter(this.onlyUnique);
        
        // console.log("this is props", this.props);
        
        
        for(var d in users_list){
            ID_list.push( {label : users_list[d], value : d} )
        }
        
        return(
            <div>
                <h4 className={styles.head}>Select an Employee ID</h4>
                <Select className={styles.sel} options = {ID_list} onChange={this.handleChange} value={this.selectedOption} />
                {/* <button><a href={this.state.link}>Go</a></button> */}
                {this.state.link && <Schema_Display boon={this.state.link} user_data = {this.state.users}/>}
                {/* <Link to= "/duration">{UserList} </Link> */}
            </div>
        )
    }
}
