import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FaRegGrinBeam } from 'react-icons/fa';
import logo from '../../assets/Images/blended-educare.jpg';
import { AuthContext } from '../../context/AuthProvider/Authprovider';
import HomeExploring from '../HomeExploring/HomeExploring';
import Login from '../Login/Login';
import './Home.css'

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='container navHeight'>
            <div className='d-md-flex algin-items-center'>

                <div className='w-100'>
                    {
                        user?.uid ?
                            <>
                                <div className='w-100 p-3 shadow-sm rounded-3 loginWidth'>
                                    <p className='display-4 fw-bold text-center my-5 py-5'>
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
                    <Image className='rounded-5 shadow-sm homeImage mx-auto' src={logo}>
                    </Image>
                </div>

            </div>

            <HomeExploring></HomeExploring>
        </div>
    );
};

export default Home;