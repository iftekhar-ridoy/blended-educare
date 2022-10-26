import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/Authprovider';
import GoogleAndGithub from '../Shared/GoogleAndGithub/GoogleAndGithub';
import './Register.css';

const Register = () => {
    const { signUp, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    // ---handle Register From Starts Here---

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        signUp(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                alert('Please verify you email');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.log(error));
    }
    // ---handle Register From Ends Here---


    // ---checkMark---

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }


    return (
        <div className='mx-auto p-3 shadow-lg rounded-3 registerWidth navHeight'>
            <p className='fs-2 fw-bold text-center'>Sign Up</p>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>
                        Your Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name='name'
                        placeholder="Enter name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>
                        Photo URL
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name='photoURL'
                        placeholder="Enter photoURL"
                    />
                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={
                            <>
                                Accept <Link to='/terms'>Terms and Conditions</Link>
                            </>
                        }
                    />
                </Form.Group>

                <Button
                    variant="success"
                    type="submit" disabled={!accepted}
                    className='w-100'
                >
                    Register
                </Button>

                <p className='d-block text-danger'>
                    {error}
                </p>
            </Form>

            <p className='mt-3 text-center'>
                Already Have An Account?
                <Link to='/' className='textLink'> Sign In</Link>
            </p>
        </div>
    );
};

export default Register;