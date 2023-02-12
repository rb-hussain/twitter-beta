import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Register= () => {
  // Js Here
  
   const [input,setinput] = useState({
    name:"",
    email:"",
    password:""
   });

    const registerHandler = (e) =>{
        e.preventDefault();
        //localStorage.setItem("user",JSON.stringify(input));
         // Get the existing users from local storage or create an empty array if none exist
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        // Add the new user to the array
        existingUsers.push(input);
        // Save the updated array of users to local storage
        localStorage.setItem('users', JSON.stringify(existingUsers));
            
        // Clear input field
        setinput({ name: '', email: '', password: '' });
    };
  //Js Close
    return(
        <>
        <div className='container'>
    <div className='row'>
        <div className='col-md-6'>
            <h1>Register </h1>
            <br/>
            <br/>
            <Form onSubmit={registerHandler}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" value={input.name} 
                onChange={(e)=>setinput({
                    ...input,[e.target.name] :e.target.value
                })} placeholder="Enter Your Name" />
            </Form.Group>
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
               <p>Already Register <Link to="/login">Login</Link>  here.</p>
            </Form.Text>
            <br/>
            <br/>
            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>
        </div>
    </div>
</div>
        </>
    )};
export default Register;