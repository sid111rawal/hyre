import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
 
function LoginPage () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (event) => {
        const router = useRouter();

        event.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usernameOrEmail:email, password }),
            });

      if (response.ok) {
        const data = await response.json();
        if (data.role === 'WORKER') {
            router.push('/worker');
        } else if (data.role === 'EMPLOYER') {
          router.push('/employer');
        } else {
          router.push('/');
        }
      } else {
        setErrorMessage('Invalid credentials');
      }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 bg-black rounded-lg shadow-md">
        <h2 className="text-white text-3xl font-bold mb-2">Welcome!</h2>
        <p className="text-gray-400 mb-6">Log in to Kindle3D to continue to Kindle3D.</p>
        {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="usernameOrEmail" className="block text-gray-300 text-sm mb-2">
                    Email / Username
                </label>
                <input
                    type="text"
                    id="usernameOrEmail"
                    className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-6 relative">
                <label htmlFor="password" className="block text-gray-300 text-sm mb-2">
                    Password
                </label>
                <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="button"
                    className="absolute right-3 top-10 text-gray-400 focus:outline-none"
                    onClick={togglePasswordVisibility}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
            </div>
            <div className="text-right mb-6">
                <a href="#" className="text-purple-500 hover:text-purple-400">
                    Forgot password?
                </a>
            </div>
            <button
                type="submit"
                className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
                Log in
            </button>
        </form>
        <div className="mt-6 text-center text-gray-400">
            Don't have an account? <Link href="/signup" className="text-purple-500 hover:text-purple-400">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;