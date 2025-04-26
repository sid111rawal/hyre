/* components/ApplicationCard.js */
import React from 'react';

export default function ApplicationCard({ application }) {
  return (
    // Use primary colors for the card background and text
    <div className="p-4 bg-primary-DEFAULT rounded-lg shadow-md space-y-2 border border-primary-light">
      <h3 className="text-lg font-semibold text-text-primary">{application.workerName}</h3>
      <p className="text-sm text-text-secondary">Applied for: <span className="font-medium text-text-primary">{application.jobTitle || `Job ID ${application.jobId}`}</span></p>
      {/* Add more details if available, like application date, skills match etc. */}
      {/* <p className="text-xs text-text-secondary">Applied on: {new Date(application.date).toLocaleDateString()}</p> */}

      {/* Use employer colors for the action button */}
      <button className="mt-2 w-full px-4 py-2 bg-red-DEFAULT rounded-md text-white hover:bg-red-dark transition duration-300 ease-in-out text-sm font-bold">
        Select Applicant
      </button>
    </div>
  ); 
}