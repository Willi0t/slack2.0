import React from "react";
import styled from "styled-components";
import slackLogo from "../assets/images/slackLogo.png";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={slackLogo} alt="slack logo"></img>
        <h1>Sign in to Slack Mockup</h1>
        <p>hyperisland</p>
        <button onClick={signIn}>Sign in with google</button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    padding: 10px 20px;
    margin-top: 50px;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    background-color: #0a8d48;
    border-radius: 3px;
    color: white;
    cursor: pointer;
  }
`;
