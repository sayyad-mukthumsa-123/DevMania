import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../src/styles/styles.css';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', data);
            localStorage.setItem('token',res.data.token)
            // Assuming a successful login redirects to the dashboard or homepage
            navigate('/allprofiles');
        } catch (err) {
            console.error(err);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div>
            <section className="container">
                <h1 className='large'>Sign In</h1>
                <p className='lead'><i className="fas fa-user"></i> Sign into Your Account</p>
                <form className='form' onSubmit={submitHandler} autoComplete='off'>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            name="email"
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder="Password"
                            name="password"
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    {error && <p className='error'>{error}</p>}
                    <input type='submit' className='btn' value="Login" />
                </form>
                <p>Don't have an account? <Link to="/register" className='link-auth'>Sign Up</Link></p>
            </section>
        </div>
    );
}

export default Login;
