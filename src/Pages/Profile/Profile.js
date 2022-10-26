import React from 'react';
import { useContext } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/Authprovider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    const handleRegister = () => { }
    return (
        <div className='navHeight registerWidth mx-auto p-3 shadow-lg rounded-3 d-flex flex-column justify-content-center align-items-center'>
            <p className='text-center display-5 fw-semibold text-success'>Profile</p>
            <Image
                style={{ height: '100px', width: '100px', border: '2px solid green', padding: '5px' }}
                roundedCircle
                src={user?.photoURL}
            />

            <Form onSubmit={handleRegister} className='w-100 mt-3'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='text-muted mb-0'>
                        Your Name
                    </Form.Label>
                    <Form.Control
                        defaultValue={user?.displayName}
                        type="text"
                        name='name'
                        placeholder="Enter name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label className='text-muted mb-0'>
                        Photo URL
                    </Form.Label>
                    <Form.Control
                        defaultValue={user?.photoURL}
                        type="text"
                        name='photoURL'
                        placeholder="Enter photoURL"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-muted mb-0'>
                        Email address
                    </Form.Label>
                    <Form.Control
                        className='text-muted'
                        defaultValue={user?.email}
                        readOnly
                        type="email"
                        name='email'
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-muted mb-0'>
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
                    // disabled={!accepted}
                    className='w-100 my-3'
                >
                    Update
                </Button>
            </Form>

        </div >
    );
};

export default Profile;