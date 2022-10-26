import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FaRegGrinBeam } from 'react-icons/fa';
import logo from '../../assets/Images/blended-educare.jpg';
import { AuthContext } from '../../context/AuthProvider/Authprovider';
import Login from '../Login/Login';
import './Home.css'

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='container'>
            <div className='d-md-flex algin-items-center'>

                <div className='w-100'>
                    {
                        user?.uid ?
                            <>
                                <div className='w-100'>
                                    <p className='display-4 fw-bold text-center mt-5 pt-5'>
                                        <FaRegGrinBeam className='me-2'>
                                        </FaRegGrinBeam>
                                        Welcome,
                                        <br />
                                        <span className='text-success'> {user?.displayName ? user.displayName : user.email}</span></p>
                                </div>
                            </>
                            :
                            <Login></Login>
                    }
                </div>

                <div className='homepa w-100'>
                    <Image className='rounded-5 homeImage mx-auto' src={logo}>
                    </Image>
                </div>

            </div>
        </div>
    );
};

export default Home;