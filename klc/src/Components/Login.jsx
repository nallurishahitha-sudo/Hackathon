import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setError('');
      onLogin({ username, password, type: isSignUp ? 'signup' : 'signin' });
    } else {
      setError('Please enter username and password');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg,#002855,#005f99)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ fontSize: '3em', color: '#00e1ff', letterSpacing: '2px' }}>KL SSP</h1>
      <p style={{ color: 'white', marginBottom: '30px' }}>Smart Student Portal - Career Guidance</p>

      <div
        style={{
          padding: '40px',
          backgroundColor: '#f0f4f8', // light color inside
          borderRadius: '10px',
          border: '2px solid black', // dark boundary line
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          minWidth: '300px',
          textAlign: 'center',
        }}
      >
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px', width: '100%', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', width: '100%', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <button
          onClick={handleLogin}
          style={{
            padding: '10px 20px',
            margin: '10px 0',
            width: '100%',
            cursor: 'pointer',
            backgroundColor: '#005f99',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <p style={{ marginTop: '15px', cursor: 'pointer', color: '#007bff' }}>
          {isSignUp ? (
            <span onClick={() => setIsSignUp(false)}>Already have an account? Sign In</span>
          ) : (
            <span onClick={() => setIsSignUp(true)}>Don't have an account? Sign Up</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
