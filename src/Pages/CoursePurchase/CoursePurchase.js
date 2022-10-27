import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CoursePurchase = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div className='navHeight aWidthOf mx-auto'>

            <p>Buy the premium pack for: </p>
            <p className='fs-2'>{course.title}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sint soluta exercitationem necessitatibus autem aut nemo, neque nostrum ipsa delectus voluptate fuga, velit quod qui quis illum, reiciendis voluptatem quo.</p>
        </div>
    );
};

export default CoursePurchase;