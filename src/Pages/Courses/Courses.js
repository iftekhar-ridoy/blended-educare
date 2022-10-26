import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';

const Courses = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='navHeight'>
            <Container>
                <Row>
                    <Col lg='4' className='d-none d-lg-block'>
                        <h4>Available Courses: {categories.length}</h4>
                        {
                            categories.map(category =>
                                <p key={category.id}>
                                    <Link to={`/courses/${category.id}`} className='textLink'><li>{category.name}</li></Link>
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