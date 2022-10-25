import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/Authprovider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <Link to='/' className='text-decoration-none fw-semibold text-success'>Blended Edu-Care</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex ">
                            <Link to='/' className='mx-2 my-1 text-black text-decoration-none'>Home</Link>
                            <Link to='/courses' className='mx-2 my-1 text-black text-decoration-none'>Courses</Link>

                        </Nav>
                        <Nav>
                            <Link to='/profile' className='my-1 d-flex align-items-center'>
                                {
                                    user?.photoURL ?
                                        <Image
                                            style={{ height: '30px' }} roundedCircle
                                            src={user?.photoURL}
                                        ></Image>
                                        :
                                        <FaUser className='text-black ms-2 my-1'></FaUser>
                                }
                            </Link>
                            {
                                user?.uid ?
                                    <>
                                        <Link to='/profile' className='text-decoration-none text-black fw-semibold ms-2'>{user?.displayName}</Link>
                                        <button onClick={handleLogOut} className='ms-2 my-1 rounded-3'>Log Out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='ms-2 my-1 text-black text-decoration-none'>Login</Link>
                                        <Link to='/register' className='ms-2 my-1 text-black text-decoration-none'>Register</Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;