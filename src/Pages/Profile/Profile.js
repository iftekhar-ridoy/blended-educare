import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/Authprovider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <p>This is My Profile</p>
            <img src={user?.photoURL} alt="" />
            <p>Name: {user?.displayName}</p>
            <p>email: {user?.email}</p>
        </div>
    );
};

export default Profile;