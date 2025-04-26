/* components/JobCard.js */
import React from 'react';
import {
  StarIcon as StarSolidIcon, // For filled stars
  ClockIcon,
  HeartIcon,
  UserIcon,
  ChatBubbleLeftIcon,
  EyeIcon,
  CurrencyRupeeIcon // Using Rupee icon
} from '@heroicons/react/24/solid'; // Use solid icons for more visual weight where needed
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline'; // For empty stars if needed

export default function JobCard({ job, variant = 'worker', onAction }) {
  const isEmployer = variant === 'employer';

  // Helper to render stars
  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div className="flex items-center">
        {[...Array(totalStars)].map((_, i) => {
          const Icon = i < rating ? StarSolidIcon : StarOutlineIcon;
          return <Icon key={i} className="h-4 w-4 text-accent-yellow" />; // Use accent color
        })}
      </div>
    );
  };

  return (
    <div className="bg-primary-DEFAULT rounded-lg shadow-md overflow-hidden flex flex-col">
      {isEmployer ? (
        <>
          {/* Top Teal Section */}
          <div className="bg-accent-teal-dark text-white p-3"> {/* Use new teal */}
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <div className="flex items-center text-sm opacity-90 mt-1">
                <CurrencyRupeeIcon className="h-4 w-4 mr-1" />
                <span>{job.pay}/hour</span>
                <ClockIcon className="h-4 w-4 ml-3 mr-1"/>
                <span>{job.time}</span>
            </div>
          </div>

          {/* Applicant Info Section */}
          <div className="p-4 flex items-center border-b border-primary-light">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
              {job.applicantImage ? (
                <img
                  src={job.applicantImage}
                  alt={job.applicantName}
                  className="w-full h-full object-cover"
                />
              ) : (
                 <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500"> {/* Placeholder */}
                     <UserIcon className="h-6 w-6" />
                 </div>
              )}
            </div>
            <div className="flex-grow">
              <h4 className="font-semibold text-text-primary">{job.applicantName}</h4>
              {renderStars(job.applicantRating)}
              <p className="text-xs text-text-secondary mt-0.5">{job.applicantSkill}</p>
            </div>
            <button className="ml-2 text-text-secondary hover:text-red-500 transition">
              <HeartIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Action Icons */}
          <div className="p-3 flex justify-around items-center bg-gray-50"> {/* Lighter bg for actions */}
            <button className="text-text-secondary hover:text-secondary transition p-1" onClick={() => onAction('view')}>
              <EyeIcon className="h-5 w-5" />
            </button>
            <button className="text-text-secondary hover:text-secondary transition p-1" onClick={() => onAction('message')}>
              <ChatBubbleLeftIcon className="h-5 w-5" />
            </button>
            <button className="text-text-secondary hover:text-secondary transition p-1" onClick={() => onAction('profile')}>
              <UserIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Side Status Indicator */}
          {job.status === 'hired' && (
            <div className="absolute top-2 -left-1 bg-accent-orange text-white py-0.5 px-2 rounded-r-md text-xs font-semibold shadow">
              Hired
            </div>
          )}
           {job.status === 'new' && ( // Example for 'new'
            <div className="absolute top-2 -left-1 bg-blue-500 text-white py-0.5 px-2 rounded-r-md text-xs font-semibold shadow">
              New
            </div>
          )}
           {/* Add more status indicators as needed */}
        </>
      ) : (
        // Worker view rendering
        <>
          {/* Top Section with Image and Company Info */}
          <div className="flex items-center p-4">
            <div className="w-16 h-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
              {job.image ? (
                <img
                  src={job.image}
                  alt={job.company}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 rounded-md"> {/* Placeholder */}
                    <BriefcaseIcon className="h-8 w-8" /> {/* Example icon */}
                </div>
              )}
            </div>
            <div className="flex-grow">
              <h3 className="text-base font-semibold text-employer-DEFAULT"> {/* Use employer color for company */}
                {job.company}
              </h3>
              {renderStars(job.rating)}
              <p className="text-lg font-medium text-text-primary mt-1">{job.title}</p>
            </div>
            <button className="ml-2 text-text-secondary hover:text-red-500 transition self-start"> {/* Align top */}
              <HeartIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Job Details */}
          <div className="px-4 pb-3 pt-2 border-t border-primary-light">
            <p className="text-sm text-text-secondary flex items-center mb-1">
               <CurrencyRupeeIcon className="h-4 w-4 mr-1 inline-block" />
               <span className="font-medium text-text-primary">{job.pay}</span>/hr
               {job.points && <span className="ml-2 text-xs text-green-600">+{job.points} UPoints</span>} {/* Points if available */}
            </p>
            <div className="flex items-center text-sm text-text-secondary">
              <ClockIcon className="h-4 w-4 mr-1.5 flex-shrink-0" />
              <span>{job.time}</span>
            </div>
          </div>

          {/* Apply Section - Stays at the bottom */}
          <div className="mt-auto"> {/* Pushes apply button to bottom */}
            <button
              className="w-full bg-accent-yellow-light text-accent-yellow-dark p-3 text-center font-semibold hover:bg-amber-200 transition duration-150 ease-in-out"
              onClick={() => onAction(job.id)} // Pass job id to action handler
            >
              Apply Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}