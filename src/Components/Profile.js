import React, { useContext } from 'react';
import './Profile.css';
import { AuthContext } from './Context';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='profile-container'>
            <h2>Profile Details</h2><hr/>
            <div className='profile-details'>
                {user && (
                    <>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;
