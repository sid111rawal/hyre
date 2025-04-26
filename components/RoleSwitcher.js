/* components/RoleSwitcher.js */
// **New File**
import React from 'react';
import { useRouter } from 'next/router';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'; // Using solid icon

export default function RoleSwitcher({ currentRole, onRoleChange }) {
  const router = useRouter();

  const handleSwitch = () => {
    const newRole = currentRole === 'employer' ? 'worker' : 'employer';
    // Update the state in _app.js via the passed handler
    onRoleChange(newRole);
    // Navigate to the corresponding page
    router.push(`/${newRole}`);
  };

  // Determine button colors based on the *target* role (the one you switch TO)
  const isEmployer = currentRole === 'employer';
  const bgColor = isEmployer ? 'bg-worker-DEFAULT hover:bg-worker-dark' : 'bg-employer-DEFAULT hover:bg-employer-dark';
  const textColor = isEmployer ? 'text-worker-text' : 'text-employer-text';
  const targetRoleText = isEmployer ? 'Worker' : 'Employer';

  return (
    <button
      onClick={handleSwitch}
      className={`flex items-center px-3 py-1.5 rounded-md ${bgColor} ${textColor} transition duration-150 ease-in-out text-sm font-medium shadow-sm`}
      title={`Switch to ${targetRoleText} View`}
    >
      <ArrowsRightLeftIcon className="h-4 w-4 mr-1.5" />
      Switch to {targetRoleText}
    </button>
  );
}