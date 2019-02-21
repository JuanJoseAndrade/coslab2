import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login } from "./component/Login";

class App extends Component {

    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>

                <br/>
                <br/>
                <Login/>
                <br/>
                <br/>

            </div>
        );
    }



}

export default App;
