import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
 
function SignupPage() {
    const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const handleSubmit = async (event) => {
      event.preventDefault();
    if(password != confirmPassword){
      setErrorMessage("Passwords dont match");
      return;
    }
    setErrorMessage(''); 

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (response.ok) {
        router.push('/login');
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      setErrorMessage('Error during signup');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 bg-black rounded-lg shadow-md">
        <h2 className="text-white text-3xl font-bold mb-2">Welcome!</h2>
        <p className="text-gray-400 mb-6">Sign up to Kindle3D.</p>
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300 text-sm mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-300 text-sm mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Sign up
          </button>
        </form>
        <div className="mt-6 text-center text-gray-400">
            Already have an account? <Link href="/login" className="text-purple-500 hover:text-purple-400">Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;