/* components/NavbarCard.js */
import React from 'react';
import Link from 'next/link';

// themeColor now expects the full Tailwind class name e.g., 'bg-employer-DEFAULT'
export default function NavbarCard({ title, description, href, themeColor, icon: Icon }) {
  // Construct hover color dynamically (simple example, might need refinement)
  const hoverColor = themeColor.replace('-DEFAULT', '-dark'); // e.g., bg-employer-DEFAULT -> bg-employer-dark

  return (
    <Link
      href={href}
      className={`block p-6 rounded-xl shadow-lg hover:shadow-xl transition ${themeColor} text-white hover:${hoverColor}`} // Apply colors directly
    >
      <div className="flex items-start space-x-4"> {/* Use items-start for better alignment */}
        <div className="flex-shrink-0"> {/* Prevent icon from shrinking */}
            <Icon className="h-8 w-8" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-1 opacity-90 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}