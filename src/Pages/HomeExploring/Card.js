import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Card = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>

        </div>
    );
};

export default Card;