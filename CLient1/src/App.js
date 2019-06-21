import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import UserList from './components/user_list.component';
import Home from './components/home.component';
import Schema_Display from './components/home.component';
// import Display from './components/display';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        
        <div>
          <Route path="/" component={Schema_Display}/>
          {/* <Link to = {`/api/duration/${emp_ID}`}> {UserList}</Link> */}
        </div>
      </Router>



    );
  }
}

export default App;