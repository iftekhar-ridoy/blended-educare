import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowCircleRight, FaChalkboardTeacher, FaRegClock } from 'react-icons/fa';
import { HiOutlineCloudDownload } from "react-icons/hi";

const CourseDetails = () => {
    const courseDetails = useLoaderData();

    return (
        <div className='navHeight aWidthOf mx-auto shadow rounded-3'>
            <Card className='border border-0'>
                <Card.Body>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Card.Title className='fs-2 mb-3 text-center'>{courseDetails.title}</Card.Title>
                        <p className='fs-2'><HiOutlineCloudDownload></HiOutlineCloudDownload></p>
                    </div>

                    <Card.Img variant="top" className='rounded-3' src={courseDetails.image_url} />

                    <div className='d-flex justify-content-between mt-3'>
                        <p><FaChalkboardTeacher></FaChalkboardTeacher> {courseDetails.author.name}</p>
                        <p className='d-flex align-items-center'><FaRegClock className='me-1'></FaRegClock> {courseDetails.author.published_date.slice(10, 20)} H</p>
                    </div>

                    <Card.Text className='mt-3 mb-5'>
                        <strong>Description</strong> {courseDetails.details.slice(0, 800)}
                    </Card.Text>

                    <div className='text-center mb-5'>
                        <Link to='/coursePurchase'><Button variant="success">Get Premium Access  <FaArrowCircleRight className='my-1'></FaArrowCircleRight></Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;