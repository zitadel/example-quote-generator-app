//Login.js
import React, { useState, useEffect } from 'react';
import myImage from './images/randy-tarampi-U2eUlPEKIgU-unsplash.jpg';

const Login = ({ auth, handleLogin, handleLogout, userInfo }) => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const generateQuote = () => {
    setLoading(true);
    fetch('/api/custom_quote', { // or use 'http://localhost:5000/api/custom_quote'
      headers: {
        'Authorization': `Bearer ${userInfo.access_token}`
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error while fetching the quote');
      }
    })
    .then(data => {
      setQuote(data.quote);
      setError('');
      setLoading(false);
    })
    .catch((error) => {
      setError('Error: Unable to fetch the quote');
      setLoading(false);
    });
  };

  if (auth === null) {
    return <div>Loading...</div>;
  }

  if (auth === false) {
    return (
      <div>
        <h1>Welcome!</h1>
        <button onClick={handleLogin}>Please log in.</button>
      </div>
    );
  }

  if (auth === true && userInfo) {
    return (
      <div>
        <h1>Welcome, {userInfo.profile.name}!</h1>
        <img src={myImage} alt="quote pic" /> {/* Image displayed here */}
       {/* <h2>Your access token: {userInfo.access_token}</h2> */}
        <button onClick={handleLogout}>Log out</button>
        <button onClick={generateQuote}>Generate quote</button>
        {loading && <p>Loading quote...</p>}
        {error && <p>{error}</p>}
        {quote && <h2>Your personalized quote:</h2>}
        {quote && <p>Hey there, <b>{userInfo.profile.name}</b>! Here's a fun little quote just for you: <b><i>{quote}</i></b></p>}
        {quote && <p>This quote was also emailed to you at <b>{userInfo.profile.email}</b>.</p>}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default Login;
