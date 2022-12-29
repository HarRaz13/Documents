import logo from './logo.svg';
import './App.css';
import React from 'react';

function App(){
    return(
        <>
            <h3>ReactJS</h3>
            <img src={logo} width="120" height="120"></img>
            <p>
                {" "}
                React is a Javascript Library.
            </p>
        </>
    );
}

export default App;
