import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeExploring = () => {
    return (
        <div className='my-5 pt-5 container text-center'>
            <div>
                <p className='fs-2'>The Blended EduCare program: what is it?</p>

                <p>The Blended EduCare platform is a digital teaching and learning platform. With the platform, teachers will be able to track their students' progress and better facilitate their learning by connecting with them effectively. In blended edu-care, technology-mediated instruction, web-enhanced instruction, or mixed-mode instruction, online education materials and online interactions are combined with physical classroom activities.</p>
            </div>

            <div className='my-5'>
                <form className="d-flex registerWidth mx-auto border border-1 rounded p-1" role="search">
                    <input className="form-control me-2 border border-0" type="search" placeholder="Search Course" aria-label="Search" />
                    <Link to='/faq'>
                        <button className="btn btn-outline-success">
                            Search
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default HomeExploring;