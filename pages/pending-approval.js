import React from 'react';
import Link from 'next/link';

export default function PendingApproval() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Pending Approval</h1>
        <p className="text-gray-400">Pending Approval. Please wait for an admin to approve your account.</p>
        <Link href="/" className="mt-4 bg-gray-800 text-white px-4 py-2 rounded inline-block">
            Go to Home
        </Link>
      </div>
    </div>
  );
}