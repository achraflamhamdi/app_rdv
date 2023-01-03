import logo from '../logo.svg';
import './Login.css';
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap'

function Login() {


const navigate = useNavigate();

function handleClick(name){
  navigate("/home");
};




  const [login, setLogin] = useState("");
  const [pswd, setPswd] = useState("");

const loginn = () => {
//   console.log(login);
  Axios.post("http://localhost:3001/login", {
    login: login,
    pswd: pswd,
  }).then((response) => {
    if(response.data.message){
      // alert(response.data.message);
    }else{
      // alert(response.data[0].Nom);
      handleClick(response.data[0].Nom);
    }
    
  });
} 

function onSubmiting(event){
    event.preventDefault();
    loginn();
}



  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <div className='form-div'>
            <form className='formule' onSubmit={onSubmiting}>
              <Row>
                <label>Identifiant</label>
              </Row>
              <Row>
                <input className='inp' type="text" placeholder="Ex : IQK1231" onChange={(e) => {
                  setLogin(e.target.value);
                }}/>
              </Row>
              <Row>
                <label>Mot de passe</label>
              </Row>
              <Row>
                <input className='inp' type="password" placeholder='Votre mot de passe' onChange={(e) => {
                  setPswd(e.target.value);
                }}/>
              </Row>
              <button className='btn' onClick={loginn}>Se connecter</button>
            </form>
          </div>
          
        </div>
      </div>
    
  );
}

export default Login;
