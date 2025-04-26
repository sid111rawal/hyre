/* pages/index.js */
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavbarCard from '../components/NavbarCard';
import withMiddleware from './api/middleware';

import { UserIcon, BriefcaseIcon, UserPlusIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

// Simple form component (can be moved to its own file: components/AddUserForm.js)
const AddUserForm = ({ userType, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Added password field
  // Add other fields as needed: e.g., companyName for employer, skills for worker

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) { // Basic validation
      alert('Please fill in name, email, and password.');
      return;
    }
    // **SECURITY NOTE:** Never send plain text passwords like this in a real app.
    // The password should be handled securely on the backend after HTTPS transmission.
    // Hashing should occur server-side ONLY.
    onSubmit({ type: userType, name, email, password /*, other fields */ });
    // Clear form after submission attempt
    setName('');
    setEmail('');
    setPassword('');
  };

  const isEmployer = userType === 'employer';
  const Icon = isEmployer ? BuildingOfficeIcon : UserPlusIcon;
  const colorClass = isEmployer ? 'text-employer-DEFAULT' : 'text-worker-DEFAULT';
  const buttonBg = isEmployer ? 'bg-employer-DEFAULT hover:bg-employer-dark' : 'bg-worker-DEFAULT hover:bg-worker-dark';
  const buttonText = isEmployer ? 'text-employer-text' : 'text-worker-text';


  return (
    <form onSubmit={handleSubmit} className="p-6 bg-primary-DEFAULT rounded-xl shadow-md space-y-4 border border-primary-light ">
      <h3 className={`text-xl font-semibold ${colorClass} flex items-center`}>
        <Icon className="h-6 w-6 mr-2" />
        Add New {isEmployer ? 'Employer' : 'Worker'}
      </h3>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border border-primary-dark rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border border-primary-dark rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
        required
      />
      <input
        type="password" // Use password type
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border border-primary-dark rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
        required
      />
      {/* Add more inputs for company name, skills etc. here */}
      <button type="submit" className={`w-full p-3 rounded-lg ${buttonBg} ${buttonText} transition font-medium`}>
        Add {isEmployer ? 'Employer' : 'Worker'}
      </button>
    </form>
  );
};


export default function Home() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false); // Basic loading state

  const handleAddUser = async (userData) => {
    console.log("Attempting to add user:", userData.type);
    setIsLoading(true);

    // **DATABASE INTEGRATION POINT**
    try {
      // Determine the correct API endpoint based on user type
      const endpoint = userData.type === 'employer' ? '/api/users/addEmployer' : '/api/users/addWorker';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // IMPORTANT: Send necessary data, but password hashing MUST happen server-side.
        // Do NOT send plain password if you implement real auth.
        body: JSON.stringify({ name: userData.name, email: userData.email, password: userData.password /* other data */ }),
      });

      const result = await response.json(); // Always try to parse JSON

      if (!response.ok) {
         // Use error message from backend if available
        throw new Error(result.message || `Failed to add ${userData.type}`);
      }

      console.log('Success:', result);
      alert(`${userData.type.charAt(0).toUpperCase() + userData.type.slice(1)} added successfully!`);

    } catch (error) {
      console.error('Error adding user:', error);
      alert(`Error: ${error.message}`); // Show error message to user
    } finally {
        setIsLoading(false); // Reset loading state
    }
  };

    const handleLogout = async () => {
      try {
        await fetch('/api/logout', { method: 'POST' });
        localStorage.removeItem('role');
        router.push('/login');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };





    const role = localStorage.getItem('role');

  return (
    <div>
         <div className="text-center mb-4">User Role: {role}</div>
         <h1>
            Index page
            <button onClick={handleLogout}>Logout</button>
        </h1>
    // No Layout component here, it's a standalone landing page
    <div className="min-h-screen bg-primary-light p-6 md:p-10 ">
      <header className="text-center mb-10 ">
         {/* Optional: Add Logo */}
         {/* <img src="/logo.png" alt="Platform Logo" className="mx-auto h-12 w-auto mb-4"/> */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
            Temporary Work Platform
        </h1>
        <p className="mt-2 text-text-secondary text-gray-400">
            Connect employers with hourly workers quickly and efficiently.
        </p>
      </header>


      {/* Navigation Section */}
       <section className="max-w-4xl mx-auto mb-12 ">
          <h2 className="text-2xl font-semibold text-center text-text-primary mb-6">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NavbarCard
              title="Employer Portal"
              description="Post jobs & manage applicants"
              href="/employer"
              themeColor="bg-employer-DEFAULT" // Use new color name
              icon={BriefcaseIcon}
            />
            <NavbarCard
              title="Worker Portal"
              description="Browse & apply for jobs"
              href="/worker"
              themeColor="bg-worker-DEFAULT" // Use new color name
              icon={UserIcon}
            />
          </div>
      </section>

       {/* Manual Add Section */}
      <section className="max-w-4xl mx-auto ">
           <h2 className="text-2xl font-semibold text-center text-white mb-6">Or, Add Users Manually (Admin)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <AddUserForm userType="employer" onSubmit={handleAddUser} />
                <AddUserForm userType="worker" onSubmit={handleAddUser} />
            </div>    
            {isLoading && <p className="text-center mt-4 text-secondary">Adding user...</p>}
      </section>
    </div>
  );
    </div>
  );
};

export const getServerSideProps = withMiddleware(async (context) => {
  return {
    props: {},
  };
});