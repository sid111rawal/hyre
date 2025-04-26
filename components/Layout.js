/* components/Layout.js */
import React from 'react';
import RoleSwitcher from './RoleSwitcher'; // Import the new component

// Accept currentRole and onRoleChange from props (passed by _app.js)
export default function Layout({ children, title, currentRole, onRoleChange }) {
  // Choose header style based on current role
  const isEmployer = currentRole === 'employer';
  const headerBg = isEmployer ? 'bg-employer-DEFAULT' : 'bg-worker-DEFAULT';
  const headerText = isEmployer ? 'text-employer-text' : 'text-worker-text';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`${headerBg} ${headerText} p-4 flex justify-between items-center shadow-md sticky top-0 z-50`}>
        <h1 className="text-2xl font-bold">{title}</h1>
        {/* Render Role Switcher only if a role is active (not on index page maybe) */}
        {currentRole && (
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