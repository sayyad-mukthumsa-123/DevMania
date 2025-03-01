// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../src/styles/styles.css';
// import Navbar from './Navbar';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         fullname: '',
//         email: '',
//         mobile: '',
//         skill: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const navigate = useNavigate(); // Hook for navigation

//     const handleChange = e => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async e => {
//         e.preventDefault();

//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }

//         try {
//             const response = await axios.post('https://dev-mania-silk.vercel.app/register', formData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });

//             if (response.status === 200) {
//                 console.log('Success:', response.data);
//                 alert('Registration successful! Please log in.');
//                 // Redirect to the login page after successful registration
//                 navigate('/login');
//             } else {
//                 console.error('Error:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div>
//             <section className="container">
//                 <h1 className='large'>Sign Up</h1>
//                 <p className='lead'><i className="fas fa-user-plus"></i> Create Your Account</p>
//                 <form className='form' onSubmit={handleSubmit} autoComplete='off'>
//                     <div className='form-group'>
//                         <input
//                             type='text'
//                             placeholder='Full Name'
//                             name="fullname"
//                             value={formData.fullname}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className='form-group'>
//                         <input
//                             type='email'
//                             placeholder='Email Address'
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className='form-group'>
//                         <input
//                             type='text'
//                             placeholder='Mobile'
//                             name="mobile"
//                             value={formData.mobile}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className='form-group'>
//                         <input
//                             type='text'
//                             placeholder='Skills (comma separated)'
//                             name="skill"
//                             value={formData.skill}
//                             onChange={handleChange}
//                             required
//                         />
//                         <p className='form-text'>Enter multiple skills separated by commas ( , )</p>
//                     </div>
//                     <div className='form-group'>
//                         <input
//                             type='password'
//                             placeholder='Password'
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             minLength='6'
//                             required
//                         />
//                     </div>
//                     <div className='form-group'>
//                         <input
//                             type='password'
//                             placeholder='Confirm Password'
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             minLength='6'
//                             required
//                         />
//                     </div>
//                     <input type='submit' className='btn' value="Register" />
//                 </form>
//                 <p className="text">
//   Already have an account? <Link to="/login" className='link-auth'>Login</Link>
// </p>

//             </section>
//         </div>
//     );
// }

// export default Register;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../src/styles/styles.css';
import Navbar from './Navbar';

const Register = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        mobile: '',
        skill: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                console.log('Success:', response.data);
                alert('Registration successful! Please log in.');
                navigate('/login');
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <section className="container">
                <h1 className='large'>Sign Up</h1>
                <p className='lead'><i className="fas fa-user-plus"></i> Create Your Account</p>
                <form className='form' onSubmit={handleSubmit} autoComplete='off'>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Full Name'
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Mobile'
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Skills (comma separated)'
                            name="skill"
                            value={formData.skill}
                            onChange={handleChange}
                            required
                        />
                        <p className='form-text'>Enter multiple skills separated by commas ( , )</p>
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Password'
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            minLength='6'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            minLength='6'
                            required
                        />
                    </div>
                    <input type='submit' className='btn' value="Register" />
                </form>
                <p className="text">
                    Already have an account? <Link to="/login" className='link-auth'>Login</Link>
                </p>
            </section>
        </div>
    );
}

export default Register;
