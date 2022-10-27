import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../CourseSummery/CourseSummery';


const CourseCategory = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div>
            < div className='cardGridd' >
                {
                    courses.map(course => <CourseSummery
                        key={course._id}
                        course={course}
                    ></CourseSummery>)
                }
            </div >
        </div >
    );
};

export default CourseCategory;