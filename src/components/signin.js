import React, { useState } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { db } from './firebase'; // Import the Firestore db instance
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useUser } from './UserContext';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function for redirection
  const { setUserName } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user exists in the Firestore 'users' collection
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // User exists, check if the password matches
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.password === password) {
          // Password matches, redirect to '/land'
          // alert('Password matches');
          // Add your redirection logic here
          setUserName(userData.name);
          navigate('/land');
        } else {
          // Password does not match
          alert('Incorrect password');
        }
      } else {
        // User does not exist
        alert('User not found');
      }
    } catch (error) {
      alert('Error checking user:', error.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="background-image"></div>
      <div className="signin-form">
        {/* Signin form with email and password */}
        <form onSubmit={handleSubmit}>
          <h2 className='title'>Sign in</h2>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgot-link">
            <Link to="/signup">Forgot password?</Link>
          </div>
          <button type="submit">Sign In</button>
          <div className="signup-link">
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
