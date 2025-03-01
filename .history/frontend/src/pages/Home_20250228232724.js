import React from 'react';
import { Link } from 'react-router-dom';
import home from "../images/home.jpeg"
import '../styles/styles.css';  // Adjust the path based on your file structure
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <section className='landing' style={{ backgroundImage: `url(${home})` }}>
        <div className='dark-overlay'>
          <div className='landing-inner'>
          <Navbar />
            <h1 className='x-large'>Developers Hub</h1>
            <p className='lead'>
              Create a developer profile/portfolio, share posts, and get help from other developers.
            </p>
            <div className='buttons'>
              <Link to="/register" className="btn btn-auth">Signup</Link>
              <Link to="/login" className="btn btn-auth">Signin</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
