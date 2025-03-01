import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';  // Adjust the path based on your file structure


const Home = () => {
  return (
    <>
      <section className='landing' >
        <div className='dark-overlay'>
          <div className='landing-inner'>

            <h1 className='x-large'>DevMania</h1>
            <p className='lead'>
            Create a developer profile and showcase your skills, projects, and experience.   
Share posts, write articles, and engage with other developers in the community.  
Get help, give feedback, and collaborate on coding challenges and projects.
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
