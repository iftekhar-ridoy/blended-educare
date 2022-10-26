import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/Authprovider';

const Login = () => {
    const { signIn, setLoading, signInGoogle } = useContext(AuthContext);
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
                }
                else {
                    alert('Please Verify Your Email Address');
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




    // ---google signIn starts here---

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    // ---google signIn ends here---


    return (
        <div className='mx-auto p-3 shadow-lg rounded-3' style={{ width: '500px' }}>
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
            </Form>

            <div className="hr-sect mt-3">OR</div>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='d-flex align-items-center w-50 justify-content-center'>
                    <FaGoogle className='me-2'></FaGoogle>
                    Google
                </Button>
                <Button variant="outline-dark" className='d-flex align-items-center justify-content-center w-50'>
                    <FaGithub className='me-2'></FaGithub>
                    Github
                </Button>
            </div>

            <p className='mt-5 text-center'>Don't Have An Account? <Link to='/register' className='textLink'>Sign Up</Link></p>
        </div >
    );
};

export default Login;