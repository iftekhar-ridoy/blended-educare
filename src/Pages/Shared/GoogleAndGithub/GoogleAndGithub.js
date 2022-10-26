import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider/Authprovider';

const GoogleAndGithub = () => {
    const { signInGoogle, signInGithub } = useContext(AuthContext);

    // ---google signIn starts here---
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    // ---google signIn ends here---



    // ---github signIn starts here---
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        signInGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    // ---github signIn ends here---


    return (
        <div>
            <div className="hr-sect mt-3">OR</div>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <Button
                    onClick={handleGoogleSignIn}
                    variant="outline-primary" className='d-flex align-items-center w-50 justify-content-center'>
                    <FaGoogle className='me-2'>
                    </FaGoogle>
                    Google
                </Button>
                <Button
                    onClick={handleGithubSignIn}
                    variant="outline-dark" className='d-flex align-items-center justify-content-center w-50'>
                    <FaGithub className='me-2'>
                    </FaGithub>
                    Github
                </Button>
            </div>
        </div>
    );
};

export default GoogleAndGithub;