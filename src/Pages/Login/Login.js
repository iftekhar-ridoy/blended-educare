import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/Authprovider';
import GoogleAndGithub from '../Shared/GoogleAndGithub/GoogleAndGithub';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signIn, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    // ---handle Login From Ends Here---

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                setError('');

                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('Login Successful');
                }
                else {
                    toast.error('Please Verify Your Email Address');
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    // ---handle Login From Ends Here---



    return (
        <div className='mx-auto p-3 shadow-sm rounded-3 loginWidth'>
            <p className='fs-2 fw-bold text-center'>Sign In</p>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        Email address
                    </Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        name='password'
                        placeholder="Password"
                        required
                    />
                </Form.Group>

                <Button
                    variant="success"
                    type="submit"
                    className='w-100'>
                    Login
                </Button>
                <p className='d-block text-danger'>
                    {error}
                </p>

                <ToastContainer position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark" />
            </Form>

            <GoogleAndGithub></GoogleAndGithub>

            <p className='mt-5 text-center'>Don't Have An Account? <Link to='/register' className='textLink'>Sign Up</Link></p>
        </div >
    );
};

export default Login;