import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Login= () => {
    //use Effect open

    // const navigate2 = useNavigate();

//   useEffect(() => {
//     // Check if user is logged in and their value is true in local storage
//     const isLoggedIn = localStorage.getItem('IsloggedIn');
//     if (isLoggedIn === 'true') {
//       // Redirect the user to the home page
//       navigate.push("/");
//     }
//   }, [navigate]);


    // use Effect close
    // after login redirect to homepage
    const navigate =  useNavigate();
    
    // state for getting value
    const [input,setinput] = useState({
        email:"",
        password:""
       });

    // on Submit Handler
    const loginHandler = (e) =>{
    e.preventDefault();
    // get the value from local storage and parse it back into an object
    // const loggeduser = JSON.parse(localStorage.getItem('user'));
    // if(input.email === loggeduser.email && input.password === loggeduser.password){
    //     navigate("/");
    //     localStorage.setItem("IsloggedIn", true);
    // }
    // else{
    //     alert("wrong email or password");
    // }

         // Get the existing users from local storage or create an empty array if none exist
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Find the user with the matching email and password
    const user = existingUsers.find(u => u.email === input.email && u.password === input.password);
    if (user) {
      // User found, do the login logic here
       navigate("/");
         localStorage.setItem("IsloggedIn", true);
         console.log('User found');
    } else {
      // User not found, show error message or redirect to register page
      console.log('User not found');
    }


// Clear input field
    setinput({ password: '' });
        }      
   
    return(
        <>
<div className='container'>
    <div className='row'>
        <div className='col-md-6'>
            <h1>Login </h1>
            <br/>
            <br/>
            <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" value={input.email} 
                onChange={(e)=>setinput({
                    ...input,[e.target.name] :e.target.value
                })}  placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" value={input.password} 
                onChange={(e)=>setinput({
                    ...input,[e.target.name] :e.target.value
                })}  placeholder="Password" />
            </Form.Group>
            <Form.Text id="passwordHelpBlock" muted>
               <p>Don't have an account <Link to="/register">register</Link>  here.</p>
            </Form.Text>
            <br/>
            <Button variant="primary" type="submit">
                Login
            </Button>
            </Form>
        </div>
    </div>
</div>
        </>
    )};
export default Login;