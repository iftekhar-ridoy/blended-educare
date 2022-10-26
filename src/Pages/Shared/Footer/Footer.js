import React from 'react';
import { useContext } from 'react';
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
            <div className='text-center'>
                <p className='display-6 fw-bold text-success'>Blended Edu-Care</p>
                <p>KhordoShaptana, Airport Road, <br />Lalmonirhat.</p>
                <p><Link className='textLink'>iftekharulislam.ridoy@gmail.com</Link></p>
            </div>
            <div className='text-center'>
                <div>
                    <p className='my-0 py-0'><Link to='/' className='my-1 textLink'>
                        Home
                    </Link></p>
                    <p className='my-0 py-0'><Link to='/courses' className='my-1 textLink'>
                        Courses
                    </Link></p>
                    <p className='my-0 py-0'><Link to='/faq' className='my-1 textLink'>
                        FAQ
                    </Link></p>
                    <p className='my-0 py-0'><Link to='/blog' className='my-1 textLink'>
                        Blog
                    </Link></p>
                    <p className='my-0 py-0'><Link to='/deadlink' className='my-1 textLink'>
                        DeadLink
                    </Link></p>
                </div>
                <p><small>Copyright coming soon</small></p>
            </div>
            <div className='text-center'>
                {
                    user?.uid ?
                        <>
                            <p>You are logged in as: <span> <Link to='/profile' className='textLink'>{user?.displayName ? user.displayName : user.email}</Link> </span> <span onClick={handleLogOut}> <Link to='/' className='textLink'> (Log Out)</Link></span></p>

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