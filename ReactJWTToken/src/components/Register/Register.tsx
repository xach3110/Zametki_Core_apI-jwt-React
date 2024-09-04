import React, { FC, useState } from 'react';
import axios from 'axios';

import { RegisterWrapper, InptEmail, InptLog,  InptPas, SendBtn} from './Register.styled.ts';





const Register = () => {

   const [email, setEmail] = useState( ""); 
   const [login, setLogin] = useState(""); 
   const [pass, setPass] = useState(""); 

   function handleSubmit(event) {
      event.preventDefault();
      const loginPayload = {Username: login, Email: email, Password: pass};
      try{
         axios.post("http://viktor2002-001-site1.htempurl.com/api/Authenticate/register", loginPayload).then((response) => { 
            if (response.status != 200) {alert(response.status)}

         }).catch( (e) => alert(e) );
      }
      catch (e){
         alert(e);
      }
      }

   return ( <RegisterWrapper>
    <label>Enter email</label>
    <InptEmail onChange={(e) => setEmail(e.target.value)}></InptEmail>

    <label>Enter nickname</label>
    <InptLog onChange={(e) => setLogin(e.target.value)}></InptLog>

    <label>Enter password</label>
    <InptPas onChange={(e) => setPass(e.target.value)}></InptPas>

    <SendBtn onClick={handleSubmit} >Register</SendBtn>
 </RegisterWrapper>);
};

export default Register;
