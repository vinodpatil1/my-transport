import React from 'react'

import loginImg from "../assets/images/welcome_login.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useEffect } from 'react';
const Login = () => {

    const navigate = useNavigate();
    
    const initialValues = {email : "", password : ""}; 
    const [formValues, setFormValue] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
 
 
    const handleChange = (e) =>{
       console.log(e.target);
       const {name, value} = e.target;
       setFormValue({...formValues, [name] : value});
   }
 
  useEffect(()=>{
     console.log(formErrors)
     if(Object.keys(formErrors).length === 0 && isSubmit){
         console.log(formValues)
         navigate("/home");
     }
 
  },[formErrors])
 
    const handleSubmit = (e) =>{
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    }
 
    const validate = (values) =>{
      const errors = {}
      const regex =  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

      if(!values.email){
         errors.email = "Email is Required";
      }else if(!regex.test(values.email)){
         errors.email = "This is not valid email format";
      }

      if(!values.password){
         errors.password = "Password is Required";
      }else if(values.password.length < 4){
         errors.password = "Password Must be more than 4 char";
      }else if(values.password.length > 10){
         errors.password = "Password Cannot exceed more than 10 char";
      }
     
      return errors;
    }



  return (
    <>
      <div className="login_wrapper py-md-0 py-lg-0 py-4">
       <div className="container">
        <div className="row">
            <div className="col-12">
            <form onSubmit={handleSubmit}>
            <div className="login-card">
                <div className="row g-0">
                  <div className="col-12 col-md-6 col-lg-6">
                     <div className="welcome-section">
                        <img src={loginImg} alt="loginimg" srcset="" />
                     </div>
                   </div>
                   <div className="col-12 col-md-6 col-lg-6">
                    <div className="login-section text-center">
                       <h2 className='roboto-bold'>SIGN IN</h2>
                       <p>Login your account to start the service</p>
                       <div className="card_wrap">

                         <TextField size="small" margin="dense" fullWidth label="Email Address*" type='email' value={formValues.email} name='email' id="fullWidth email" onChange={handleChange} autoComplete='off'  />
                         <p style={{color : "red", textAlign : "left"}}>{formErrors.email}</p>
                        <TextField size="small" margin="dense" name='password' fullWidth label="Password*" type='password' value={formValues.password} id="fullWidth password" onChange={handleChange} autoComplete='off' />
                        <p style={{color : "red", textAlign : "left"}}>{formErrors.password}</p>
                       
                     <Button className="login_btn" variant="contained" type='submit' margin="dense">Login</Button>
                     </div>
                    </div>
                   </div>
                  </div>
            </div>
            </form>
            </div>
        </div>
       </div>

      </div>
    </>
  )
}

export default Login;