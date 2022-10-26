import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../assets/Images/blended-educare.jpg';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Home = () => {
    return (
        <div className='d-flex justify-content-evenly'>
            <div className=''>
                <Image style={{ height: '500px' }} className='rounded-5' src={logo}>
                </Image>
            </div>
            <div>
                <Login></Login>
            </div>
        </div>
    );
};

export default Home;