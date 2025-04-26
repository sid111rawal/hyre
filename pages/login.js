import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='bg-black min-h-screen flex flex-col items-center justify-center px-4'>
      <div className='max-w-md w-full'>
        <h1 className='text-4xl font-semibold text-white text-center mb-2'>Welcome!</h1>
        <p className='text-gray-400 text-center mb-10'>Log in to Kindle3D to continue to Kindle3D.</p>
        <form onSubmit={handleLogin} className='space-y-6'>
          <div className='bg-gray-900 rounded'>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-transparent text-white focus:outline-none"
            />
          </div>
          <div className='bg-gray-900 rounded relative'>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Your password'
              className='w-full px-4 py-3 bg-transparent text-white focus:outline-none'
            />
            <div className='absolute right-3 top-1/2 -translate-y-1/2'>
              <Link href='#' className='text-gray-400 text-sm'>
                Forgot password?
              </Link>
            </div>
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <button
            type='submit'
            className='w-full px-4 py-3 bg-[#292929] rounded-md font-medium text-white'
          >
            Log in
          </button>
        </form>
        <div className='text-center mt-6'>
          <p className='text-gray-400'>
            Don't have an account?{' '}
            <Link href="/signup" className="text-white font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>);
}