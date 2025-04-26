/* components/RoleSwitcher.js */
// **New File**
import React from 'react';
import { useRouter } from 'next/router';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'; // Using solid icon

export default function RoleSwitcher({ currentRole, onRoleChange }) {
  const router = useRouter();

  // Determine the target role and if it matches the current route
  const targetRole = currentRole === 'employer' ? 'worker' : 'employer';
  const currentRoute = router.pathname.slice(1); // Remove the leading slash for comparison
  const onSameRolePage = currentRoute === targetRole;

  const handleSwitch = () => {
    const newRole = currentRole === 'employer' ? 'worker' : 'employer';
    // Update the state in _app.js via the passed handler
    onRoleChange(newRole);
    // Navigate to the corresponding page
    router.push(`/${newRole}`);
  };

  const bgColor = targetRole === 'worker' ? 'bg-worker-DEFAULT hover:bg-worker-dark' : 'bg-employer-DEFAULT hover:bg-employer-dark';
  const textColor = targetRole === 'worker' ? 'text-worker-text' : 'text-employer-text';

  return (
      <button
         onClick={handleSwitch}
        className={`flex items-center px-3 py-1.5 rounded-md ${bgColor} ${textColor} transition duration-150 ease-in-out text-sm font-medium shadow-sm`}
        title={`Switch to ${targetRole} View`}
      >
        <ArrowsRightLeftIcon className="h-4 w-4 mr-1.5" />
        Switch to {targetRole}
      </button>
  );
}