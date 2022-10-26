import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseSummery.css'

const CourseSummery = ({ course }) => {
    console.log(course);
    const { category_id } = course;
    return (
        <div>
            <Card className='h-100'>
                <Card.Img className='cardImage' variant="top" src={course.image_url} />
                <Card.Body>
                    <Card.Title className='text-center'>{course.title}</Card.Title>
                </Card.Body>
                <Card.Footer className='bg-white border-0'>
                    <Link to={`/courses/${category_id}`}><Button className='w-100' variant="btn btn-outline-success">Explore The Course</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseSummery;