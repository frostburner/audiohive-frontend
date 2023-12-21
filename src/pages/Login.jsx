import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users/login', {
        username: username,
        password: password
      });

      // Handle the response from the server
      console.log(response.data);

      // Set the user state and update isLoggedIn flag
      setUser(response.data);
      setIsLoggedIn(true);

      // Reset the form fields
      setUsername('');
      setPassword('');
    } catch (error) {
      // Handle errors that occurred during the request
      console.error(error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user.username}!</p>
          {/* Display additional user information if needed */}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;