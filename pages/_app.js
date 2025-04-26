/* pages/_app.js */
import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }) {
  const [currentRole, setCurrentRole] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname.startsWith('/employer')) {
      setCurrentRole('employer');
    } else if (router.pathname.startsWith('/worker')) {
      setCurrentRole('worker');
    } else if (router.pathname === '/') {
      setCurrentRole(null);
    }
  }, [router.pathname]);

  const handleRoleChange = (newRole) => {
    if (newRole) {
      setCurrentRole(newRole);
    } else {
      router.push('/login');
      return;
    }

  };


  const enhancedPageProps = {
    ...pageProps,
    currentRole,
    onRoleChange: handleRoleChange,
  };

  return (    
    <div className="bg-black min-h-screen">
      <div className="container mx-auto p-4">
        <main>
          <Component {...enhancedPageProps} />
        </main>
      </div>
    </div>
  );
}