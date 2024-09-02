import React, { FC, useState } from 'react';
import { LoginWrapper, InptEmail, InptLog,  InptPas, SendBtn } from './Login.styled.ts';
import axios from 'axios';

interface LoginProps {}

const Login = () => {

   const [login, setLogin] = useState(""); 
   const [pass, setPass] = useState(""); 

   function handleSubmit(event) {
      event.preventDefault();
      const loginPayload = {Username: login, Password: pass};
      try{
         axios.post("https://localhost:7282/api/Authenticate/login", loginPayload).then((response) => { 
            console.log(response);
            localStorage.setItem("token", response.data.token);
         }).catch( (e) => alert(e) );
      }
      catch (e){
         alert(e);
      }
      }

return <LoginWrapper>

    <label>Enter nickname</label>
    <InptLog onChange={(e) => setLogin(e.target.value)}></InptLog>

    <label>Enter password</label>
    <InptPas onChange={(e) => setPass(e.target.value)}></InptPas>

    <SendBtn onClick={handleSubmit} >Login</SendBtn>
 </LoginWrapper>
};

export default Login;
