import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginSignup.css';
import Alert from '@mui/material/Alert';
import { AuthContext } from './Context';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username,
                password,
            });
            if (response.status === 200) {
                const userData = {
                    username: response.data.username,
                    email: response.data.email,
                };
                login(userData);
                setSuccess(true);
                setTimeout(() => {
                    navigate('/'); 
                }, 1000);
            }
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError('Invalid credentials!');
        }
    };

    return (
        <div className="containerlogin">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button><br />
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <Alert severity="success">Login successful!</Alert>}
            <p>
                Not Have Account? <Link to="/register"><span className='loginhere'>Register Here</span></Link>
            </p>
        </div>
    );
};

export default Login;
