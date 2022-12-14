import React, { useContext, useState } from 'react';
import { Button, Image, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/blended-educare.jpg';
import { AuthContext } from '../../../context/AuthProvider/Authprovider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { HiOutlineUserCircle } from 'react-icons/hi';
import './Header.css';
import Switch from "react-switch";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect className='mb-5' expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <Image
                            style={{ height: '50px' }} roundedCircle
                            src={logo}
                        ></Image>
                        <Link to='/' className='ms-2 text-decoration-none fw-bold text-success'>
                            Blended Edu-Care
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex">
                            <Link to='/' className='mx-2 my-1 text-black text-decoration-none'>
                                Home
                            </Link>
                            <Link to='/courses' className='mx-2 my-1 text-black text-decoration-none'>
                                Courses
                            </Link>
                            <Link to='/faq' className='mx-2 my-1 text-black text-decoration-none'>
                                FAQ
                            </Link>
                            <Link to='/blog' className='mx-2 my-1 text-black text-decoration-none'>
                                Blog
                            </Link>
                            <Link to='/deadLink' className='mx-2 my-1 text-black text-decoration-none'>
                                DeadLink
                            </Link>
                            {/* <>
                                <label className='my-auto'>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                    />
                                </label>
                                <p className='my-auto'>
                                    <span className='ms-2'>{checked ? "Dark" : "Light"}</span> Mode.
                                </p>
                            </> */}

                        </Nav>
                        <Nav>
                            <Link to='/profile' className='my-1 d-flex align-items-center'>
                                {
                                    user?.uid ?
                                        <>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
                                            >
                                                {({ ref, ...triggerHandler }) => (
                                                    <nav
                                                        {...triggerHandler}
                                                        className="d-inline-flex align-items-center"
                                                    >
                                                        <Image
                                                            style={{ height: '50px', width: '50px', border: '1px solid grey', padding: '2px' }}
                                                            ref={ref}
                                                            roundedCircle
                                                            src={user?.photoURL}
                                                        />
                                                    </nav>
                                                )}
                                            </OverlayTrigger>
                                        </>
                                        :
                                        <Link to='/login'>
                                            <HiOutlineUserCircle className='fs-1 ms-2 text-success'></HiOutlineUserCircle>
                                        </Link>
                                }
                            </Link>
                            {
                                user?.uid ?
                                    <>
                                        <Link to='/profile' className='text-decoration-none text-black fw-semibold my-auto ms-2'>
                                            { }
                                        </Link>
                                        <Button variant="outline-secondary" onClick={handleLogOut} className='ms-2 my-auto'>
                                            Sign Out
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='ms-2 my-auto text-black text-decoration-none border border-2 border-success px-3 py-1 rounded-pill'>
                                            Login
                                        </Link>
                                        <Link to='/register' className='ms-2 my-auto text-black text-decoration-none border border-2 border-success px-3 py-1 rounded-pill'>
                                            Register
                                        </Link>
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