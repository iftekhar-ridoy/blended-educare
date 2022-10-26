import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/Authprovider';
import './Footer.css'

const Footer = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='footer bg-light d-md-flex justify-content-md-around align-items-end'>
            <div className='text-center'>
                <p className='display-5 fw-bold text-success '>Blended Edu-Care</p>
                <p>KhordoShaptana, Airport Road, <br />Lalmonirhat.</p>
                <p><Link className='textLink'>iftekharulislam.ridoy@gmail.com</Link></p>
            </div>
            <div className='text-center'>
                <div className='row row-cols-2 gx-3'>
                    <p><Link to='/' className='my-1 textLink'>
                        Home
                    </Link></p>
                    <p><Link to='/courses' className='my-1 textLink'>
                        Courses
                    </Link></p>
                    <p><Link to='/faq' className='my-1 textLink'>
                        FAQ
                    </Link></p>
                    <p><Link to='/blog' className='my-1 textLink'>
                        Blog
                    </Link></p>
                </div>
                <p><small>Copyright coming soon</small></p>
            </div>
            <div className='text-center'>
                {
                    user?.uid ?
                        <>
                            <p>You are logged in as: <span className='text-success'> {user?.displayName ? user.displayName : user.email}</span></p>
                        </>
                        :
                        <>
                            <p>You are not logged in. (<Link to='/login' className='textLink'>Log In</Link>)</p>
                        </>

                }
            </div>
        </div>
    );
};

export default Footer;