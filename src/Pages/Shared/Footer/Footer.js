import React from 'react';
import { useContext } from 'react';
import { FaFacebookSquare, FaMailBulk, FaPhoneSquareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/Authprovider';
import './Footer.css'

const Footer = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='footer bg-light d-md-flex justify-content-md-around align-items-end p-4'>
            <div className='flexItem-1'>
                <p className='display-6 fw-bold text-success'>Blended Edu-Care</p>
                <p>KhordoShaptana, Airport Road, <br />Lalmonirhat.</p>
                <p>© 2022 BEC, Inc. All Rights Reserved</p>

            </div>
            <div className='d-flex justify-content-center my-auto sml flexItem-2'>
                <div className='me-5'>
                    <p className='my-0 py-1'><Link to='/' className='my-1 textLink'>
                        Home
                    </Link></p>
                    <p className='my-0 py-1'><Link to='/courses' className='my-1 textLink'>
                        Courses
                    </Link></p>
                    <p className='my-0 py-1'><Link to='/faq' className='my-1 textLink'>
                        FAQ
                    </Link></p>
                    <p className='my-0 py-1'><Link to='/blog' className='my-1 textLink'>
                        Blog
                    </Link></p>
                </div>

                <div className='ms-5'>
                    <p className='my-0 py-1'><Link to='/courses' className='my-1 textLink'>
                        Offers
                    </Link></p>
                    <p className='my-0 py-1'><Link to='/terms' className='my-1 textLink'>
                        Terms
                    </Link></p>
                    <p className='my-0 py-1'><Link to='/blog' className='my-1 textLink'>
                        Blog
                    </Link></p>
                    <p className='my-0 py-1'><Link to='/terms' className='my-1 textLink'>
                        Privacy
                    </Link></p>
                </div>

            </div>

            <div className='flexItem-3'>
                <p className='mb-1'>
                    <Link
                        className='textLink'><FaPhoneSquareAlt className='fs-4'></FaPhoneSquareAlt> +8801302690768</Link>
                </p>
                <p className='mb-1'>
                    <Link
                        className='textLink'><FaFacebookSquare className='fs-4'></FaFacebookSquare> /iftekhar.ridoy07</Link>
                </p>
                <p>
                    <Link
                        className='textLink'><FaMailBulk className='fs-4'></FaMailBulk> iftekharulislam.ridoy@gmail.com</Link>
                </p>
                <p>
                    {
                        user?.uid ?
                            <>
                                <>
                                    You are logged in as:
                                    <span>
                                        <Link to='/profile' className='textLink'>{user?.displayName ? user.displayName : user.email}
                                        </Link>
                                    </span>
                                    <span onClick={handleLogOut}>
                                        <Link to='/' className='textLink'> (Log Out)</Link>
                                    </span>
                                </>

                            </>
                            :
                            <>
                                <>
                                    You are not logged in. (<Link to='/login' className='textLink'>Log In</Link>)
                                </>
                            </>

                    }
                </p>
            </div>
        </div>
    );
};

export default Footer;