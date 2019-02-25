import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login } from "./component/Login";
import {TodoApp } from "./component/TodoApp";
import {BrowserRouter as Router, Link, Route,  Redirect } from 'react-router-dom';
const LoginView = () => (
 <Login/>
);

const TodoView = () => (
   <div>
       <TodoApp/>
   </div>
);
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn:false};
        this.handleLoggedIn=  this.handleLoggedIn.bind(this);
    }


    render() {
      localStorage.setItem('isLoggedIn', false);
      console.log(localStorage.getItem("isLoggedIn"));
      var boolean= localStorage.getItem('isLoggedIn') == 'true' ? true : false;
      var rendervista=null;
        if (boolean) {

          rendervista=<Redirect to="/todo"/>
        }
        else{

            rendervista=<Redirect to="/"/>
        }

        return (

          <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                {rendervista}

                <div>
                    <Route exact path="/" component={LoginView}/>
                    <Route path="/todo" component={TodoView}/>
                </div>
            </div>
          </Router>
        );
    }
    handleLoggedIn(boolean) {
        this.setState({
            isLoggedIn: boolean
        });
    }



}

export default App;
