/* components/ApplicationCard.js */
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Using solid icon

export default function ApplicationCard({ application }) {
  return (
    // Use primary colors for the card background and text
    <div className="p-4 bg-primary-DEFAULT rounded-lg shadow-md space-y-2 border border-primary-light">
      <h3 className="text-lg font-semibold text-text-primary">{application.workerName}</h3>
      <p className="text-sm text-text-secondary">Applied for: <span className="font-medium text-text-primary">{application.jobTitle || `Job ID ${application.jobId}`}</span></p>
      {/* Add more details if available, like application date, skills match etc. */}
      {/* <p className="text-xs text-text-secondary">Applied on: {new Date(application.date).toLocaleDateString()}</p> */}

      {/* Use employer colors for the action button */}
      <button className="mt-2 w-full flex items-center justify-center px-4 py-2 bg-employer-DEFAULT rounded-md text-employer-text hover:bg-employer-dark transition duration-150 ease-in-out text-sm font-medium">
        <CheckCircleIcon className="h-4 w-4 mr-1.5" />
        Select Applicant
      </button>
    </div>
  );
}