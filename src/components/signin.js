import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div className="signin-container">
      <div className="background-image"></div>
      <div className="signin-form">
        {/* Signin form with email and password */}
        
        <form>
        <h2 class='title'>Sign in</h2>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit" as={Link} to="/land">Sign In</button>
        </form>
      </div>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    </div>
  );
}
