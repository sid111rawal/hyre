/* components/Layout.js */
import React from 'react';
import { useRouter } from 'next/router';
import RoleSwitcher from './RoleSwitcher'; // Import the new component

// Accept currentRole and onRoleChange from props (passed by _app.js)
export default function Layout({ children, title, currentRole, onRoleChange }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  // Choose header style based on current role
  const isEmployer = currentRole === 'employer';
  const headerBg = isEmployer ? 'bg-employer-DEFAULT' : 'bg-worker-DEFAULT';
  const headerText = isEmployer ? 'text-employer-text' : 'text-worker-text';

  // Determine if the RoleSwitcher should be rendered
  const shouldRenderRoleSwitcher = currentRole !== null &&
    ((currentRoute.includes('worker') && currentRole === 'employer') ||
    (currentRoute.includes('employer') && currentRole === 'worker'));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`${headerBg} ${headerText} p-4 flex justify-between items-center shadow-md sticky top-0 z-50`}>
        <h1 className="text-2xl font-bold">{title}</h1>
        {/* Render Role Switcher only if a role is active (not on index page maybe) */}
        {shouldRenderRoleSwitcher && (
            <RoleSwitcher currentRole={currentRole} onRoleChange={onRoleChange} />
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 bg-primary-light p-6 md:p-8"> {/* Use new background color */}
        {children}
      </main>

      {/* Optional Footer */}
      {/* <footer className="bg-gray-800 text-white p-4 text-center text-sm">
          © {new Date().getFullYear()} Temporary Work Platform
      </footer> */}
    </div>
  );
}