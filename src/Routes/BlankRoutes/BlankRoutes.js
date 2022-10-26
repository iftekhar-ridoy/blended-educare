import React from 'react';
import { Link } from 'react-router-dom';


const BlankRoutes = () => {
    const styles = {
        blank: {
            height: '100vh',
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center' style={styles.blank}>
            <div className='border border-1 p-3 m-3 rounded-5 shadow'>
                <p className='display-1 fw-bold text-danger text-center'>Oops!</p>
                <p className='fw-semibold fs-3 text-center'>Error Code: 404</p>
                <p className='fs-4 text-center'>We can't seem to find the page you are looking for.</p>
                <p className='text-center'>Here is a helpful link instead:</p>
                <p className='text-center'>Go back to <Link to='/' className='textLink fw-bold'> Blended Edu-Care</Link></p>
            </div>
        </div>
    );
};

export default BlankRoutes;