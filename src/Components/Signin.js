import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
  
  let login = async (e) => {
    e.preventDefault();

   try {
    const signin = await axios.post(`${process.env.REACT_APP_APIURL}users/login`, { email, password })
    if (signin.data.statusCode === 200) {
      toast.success('Login Successfull !', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      sessionStorage.setItem('token', signin.data.token);
      sessionStorage.setItem('role', signin.data.role);
      sessionStorage.setItem('firstName', signin.data.firstName);
       
      console.log(signin.data.firstName);
      navigate('/dashboard');

    } else {
      toast.error(signin.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

   } catch (error) {
    console.error("Axios Error:", error);
    toast.error("Network Error. Please try again later.", {
      position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
   }
  }


    return (
        <>
            <h1 style={{'text-align' : 'center'}}>Notes Taking App</h1>
            <Form style={{ width: '50%', margin: 'auto' }} onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                </Form.Group>
                <Button className='m-1 cus-bn' variant="danger" type="submit">
                    Signin
                </Button> 
                <Link to='/signup'>
                <Button className='m-1 cus-bn' variant="outline-success">New User? Signup</Button>
                </Link>
                <ToastContainer />
            </Form>
        </>
    )
}

export default Signin