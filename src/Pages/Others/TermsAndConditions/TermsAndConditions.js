import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndCondition.css';

const TermsAndConditions = () => {
    return (
        <div className='mx-auto shadow-sm p-3 mb-5 bg-body rounded-3 widdth navHeight'>
            <p className='fs-3 text-center underline'>Blended Edu-Care Terms of Use</p>
            <p>
                <ul>
                    <li className='mb-3'>
                        The courses available from the Site (the "Courses"), and the training services made available on or through the Site and the software (the "Services"), are owned, operated, and maintained, as applicable, by Blended Edu-Care Private Limited. The Site, Courses, and Services are, collectively referred to as the "Company Products". By (a) using or accessing the Company Products, including, but not limited to streaming, accessing or using the software; or (b) paying, either for itself or for someone else to use or access the Company Products, you agree to the terms and conditions set forth in these terms of use (the "Terms").
                    </li>
                    <li className='mb-3'>
                        THESE TERMS, UNLESS THE SAME HAS BEEN SPECIFICALLY EXCLUDED BY ANY OTHER INSTRUMENT TO WHICH THE COMPANY AND/OR AN USER ARE SUBJECT TO, INCLUDING THIS INTRODUCTORY SECTION, CREATE A BINDING LEGAL CONTRACT BETWEEN YOU AND THE COMPANY. BY USING THE COMPANY PRODUCTS, YOU REPRESENT AND WARRANT THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT ACCEPT THESE TERMS, YOU MUST NOT USE - AND ARE NOT AUTHORIZED TO USE - ALL OR ANY PORTION OF THE COMPANY PRODUCTS.
                    </li>
                    <li className='mb-3'>
                        For the purposes of the Terms, The term “User(s)/You” shall mean and include all persons, natural or artificial, that visit the Site including those that have agreed to become registered users on the Site by providing registration data while registering on the Site as registered users accessing the Company Products through the Website. If you are a parent, guardian, or other natural person who enables a child to access the Company Products, you agree to stand in the shoes of such child for the purposes of making us whole in case of damages or indemnification that could properly lie against a child, if not for his or her age. This Site is intended for use by a natural person only if such natural person is 13 (Thirteen) years of age or older.
                    </li>
                    <li className='mb-5'>
                        If you are using or opening an account to use the Company Products on behalf of a company, entity or organization (each a "Subscribing Entity"), then you represent and warrant that you: (i) are an authorized representative of that Subscribing Entity with the authority to bind such entity to these Terms, and (ii) agree to be bound by these Terms on behalf of such Subscribing Entity.
                    </li>
                </ul>
            </p>
            <p className='text-center'>Go back to <Link to='/register' className='textLink'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;