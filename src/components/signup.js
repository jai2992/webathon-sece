import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="signin-container">
      <div className="background-image"></div>
      <div className="signin-form">
        {/* Signin form with email and password */}
        
        <form>
            <h2 className='title'>Sign up</h2>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
            <label>Confirm Password:</label>
            <input type="password" placeholder="Confirm your password" />
            <button type="submit">Sign Up</button>
        </form>
      </div>
        <div className="signup-link">
          <p>Already have an account? <Link to="/signin">Sign in</Link></p>
        </div>
    </div>
  );
}
