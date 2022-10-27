import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';


const CoursePurchase = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div className='navHeight aWidthOf mx-auto'>

            <p className='text-center'>Buy the premium pack for: </p>
            <p className='fs-1 fw-semibold text-center text-success my-3'>{course.title}</p>

            <div className='d-md-flex justify-content-evenly'>
                <Card style={{ width: '300px', margin: '10px auto' }}>
                    <Card.Header className="text-success fs-3 fw-bold text-center">
                        Free
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className='text-success fs-1 mb-3'>00 Tk</Card.Title>
                        <Card.Text>
                            <p>
                                <FaCheckCircle></FaCheckCircle> 1 courses included
                            </p>
                            <p>
                                <FaCheckCircle></FaCheckCircle> 1 courses included
                            </p>
                            <p>
                                <FaCheckCircle></FaCheckCircle> Help center access
                            </p>
                        </Card.Text>
                        <Button variant="success" className='w-100 mt-3'>Continue</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: '300px', margin: '10px auto' }}>
                    <Card.Header className="text-success fs-3 fw-bold text-center">
                        Premium
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className='text-success fs-1 mb-3'>{course?.total_cost} TK</Card.Title>
                        <Card.Text>
                            <p>
                                <FaCheckCircle></FaCheckCircle> Full course included
                            </p>
                            <p>
                                <FaCheckCircle></FaCheckCircle> All courses here
                            </p>
                            <p>
                                <FaCheckCircle></FaCheckCircle> 24/7 Help center access
                            </p>
                        </Card.Text>
                        <Button variant="success" className='w-100 mt-3'>Buy Premium</Button>

                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default CoursePurchase;