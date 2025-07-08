import React, { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    // validate email
    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Email address should be in this format (name@domain.com');
      valid = false;
    } else {
      setEmailError('');
    }

    //check if password is empty
    if(password.trim()===''){
        setPasswordError('Password should not be emty');
        valid = false;
    }else{
        setPasswordError('');
    }
    // validate password
    // if (password.length < 6) {
    //   setPasswordError('Password must be at least 6 characters.');
    //   valid = false;
    // } else {
    //   setPasswordError('');
    // }

    // When we submit and all is valid we go here with an alert and console.log
    if (valid) {
      alert('Form submitted!');
      console.log({ email, password });

      // optionally reset
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h1 className='text-left'>1. Basic Login Form</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-xl font-bold mb-6 text-center">Login</h2>
            {/* Email */}
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your email"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            {/* Password */}
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your password"
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Login
            </button>
      </form>
    </div>
  );
}
