// src/Components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';
import Alert from '@mui/material/Alert';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');  
        setSuccess(false);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                username,
                email,
                password,
            });
            if (response.status === 201) {
                localStorage.setItem('user', JSON.stringify({ username, email }));
                setSuccess(true);
                setTimeout(() => {
                    navigate('/loginsignup');
                }, 1000); 
            }
        } catch (error) {
            if (error.response && error.response.data) {
                const errorMessages = error.response.data;
                if (errorMessages.username) {
                    setError('Username already exists. Please choose a different username.');
                } else if (errorMessages.email) {
                    setError('Email already exists. Please use a different email address.');
                } else {
                    setError('Registration failed! Please check your input.');
                }
            } else {
                setError('Registration failed! Please try again later.');
            }
            console.error('Registration failed:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="containerlogin">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button><br />
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <Alert severity="info">Registration successful!</Alert>}
            <p>
                Already have an account? <Link to="/loginsignup"><span className='loginhere'>Login Here</span></Link>
            </p>
        </div>
    );
};

export default Register;
