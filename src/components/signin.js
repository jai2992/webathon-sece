import React, { useState } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { db } from './firebase'; // Import the Firestore db instance
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useUser } from './UserContext';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUserName } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
       
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.password === password) {
          setUserName(userData.name);
          navigate('/land');
        } else {
          alert('Incorrect password');
        }
      } else {
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
