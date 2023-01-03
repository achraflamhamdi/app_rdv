import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import illu_1 from '../ressources/illu_1.svg'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login(){


        const navigate = useNavigate();

        function handleClick(name) {
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
                        if (response.data.message) {
                                // alert(response.data.message);
                        } else {
                                // alert(response.data[0].Nom);
                                handleClick(response.data[0].Nom);
                        }

                });
        }

        function onSubmiting(event) {
                event.preventDefault();
                loginn();
        }


        return (
                <main>
                        
                        <div className="divImg">
                                <img src={illu_1} alt="Illustration Medicale" className="illu" />
                        </div>
                        <div className="divBox">
                                <MainContainer className="mainContainer">
                                        <WelcomeText>Bienvenue dans <h1 style={{color: "red"}}>Doc&Vous</h1></WelcomeText>
                                        <msgText>SVP, Identifiez-vous !</msgText>
                                        <InputContainer className="InputContainer">
                                                <form className='formule' onSubmit={onSubmiting}>
                                                        <input className='inp' type="text" placeholder="Ex : IQK1231" onChange={(e) => {
                                                                setLogin(e.target.value);
                                                        }} />
                                                        <input className='inp' type="password" placeholder='Votre mot de passe' onChange={(e) => {
                                                                setPswd(e.target.value);
                                                        }} />
                                                        <ButtonContainer className="ButtonContainer">
                                                                <button className='btn' onClick={loginn}>Se connecter</button>
                                                        </ButtonContainer>
                                                </form>
                                        </InputContainer>
                                        
                                </MainContainer>
                        </div>
                        
                </main>
                
        )
}

const MainContainer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        height:80vh;
        width: 30vw;
        background: rgba(255,255,255, 0.15);
        border-radius: 20px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.35);
`;

const WelcomeText = styled.h2`
        margin: 3rem 0 2rem 0;
        height: 10%;
        text-align: center;
`;
const msgText = styled.h5`
        margin: 3rem 0 2rem 0;
        height: 10%;
        text-align: center;
        text-tranform: lowercase;
`;

const InputContainer = styled.div``;

const ButtonContainer = styled.div``;


export default Login;