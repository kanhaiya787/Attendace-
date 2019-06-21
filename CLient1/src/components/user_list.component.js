import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

 
// const User = props => (
//     <tr>
//         <td>{props.user.emp_ID}</td>
//     </tr>
// )


export default class UserList extends Component{
    
    constructor(props){
        super(props);
        this.state = {users : []}; //property users is initially an empty array 
    }
                    
    //intialise "users" state property
    // component lifecycle method --> componentDidMount

    componentDidMount(){    //request backend and retreve data from db
        axios.get("http://localhost:5000/api/duration/")
                .then(response => {
                    this.setState({ users : response.data});
                    console.log(response.data);
                })
               .catch( function(error) {
                    console.log(error);
                  })
    }


    getUserList(){

        return this.state.users.map( function(currentUser, i){
            // return <User user={currentUser} key={i} />
            return currentUser;
        });
    }

    render (){

            // console.log('props', this.props);

        return (
            <div>
                <h3>Users List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                emp_ID
                            </th>
                        </tr>
                    </thead>


                    <tbody>
                        { this.getUserList() }
                    </tbody>
                </table>



            </div>
        )
    }
}