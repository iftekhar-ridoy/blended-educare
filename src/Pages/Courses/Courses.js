import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';

const Courses = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment10-blended-educare-server.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='navHeight'>
            <Container>
                <Row>
                    <Col lg='4' className='d-none d-lg-block '>
                        <h4 className='text-center mb-3'>Available Courses: {categories.length}</h4>
                        {
                            categories.map(category =>
                                <p key={category.id}>
                                    <Link to={`/courses/${category.id}`} className='textLink'><li className='border border-1 p-3 text-center rounded-3 shadow-sm'>{category.name}</li></Link>
                                </p>)
                        }
                    </Col>
                    <Col lg='8'>
                        <CourseCategory></CourseCategory>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;