/* pages/_app.js */
import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const [currentRole, setCurrentRole] = useState('employer'); // Default role
  const router = useRouter();

  // Update role based on current page path whenever the route changes
  useEffect(() => {
    if (router.pathname.startsWith('/employer')) {
      setCurrentRole('employer');
    } else if (router.pathname.startsWith('/worker')) {
      setCurrentRole('worker');
    } else if (router.pathname === '/') {
      // Optional: Set a default or neutral role for the index page if needed
      // setCurrentRole(null); // Or keep the last known role
    }
  }, [router.pathname]);

  // Function to handle role change, passed down to components
  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
    // Note: Navigation is handled within the RoleSwitcher component itself
  };

  // Enhance page props with role state and handler
  const enhancedPageProps = {
    ...pageProps,
    currentRole,
    onRoleChange: handleRoleChange,
  };

  return <Component {...enhancedPageProps} />;
}