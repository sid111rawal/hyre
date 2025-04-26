/* components/PostJobModal.js */
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { CurrencyRupeeIcon } from '@heroicons/react/24/outline'; // Or solid

export default function PostJobModal({ isOpen, onClose, onPost }) {
  // Initialize with empty strings or default values
  const [form, setForm] = useState({ title: '', category: '', pay: '', time: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.title || !form.category || !form.pay || !form.time) {
        alert("Please fill in Title, Category, Pay, and Time.");
        return;
    }
    onPost(form); // Pass the form data to the handler prop
    // Optionally clear form after submission, or rely on onClose to reset state if modal re-renders
    // setForm({ title: '', category: '', pay: '', time: '', description: '' });
    onClose(); // Close the modal
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/30"
        aria-hidden="true"
       />

      {/* Modal Content */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
         <Dialog.Panel
           as={motion.div}
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           exit={{ scale: 0.9, opacity: 0 }}
           className="bg-primary-DEFAULT rounded-xl p-6 w-full max-w-md shadow-xl"
         >
           <Dialog.Title className="text-xl font-bold mb-4 text-text-primary">Post a New Job</Dialog.Title>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title" // Add name attribute
                placeholder="Job Title (e.g., Barista, Server)"
                className="w-full p-3 border border-primary-dark rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                value={form.title}
                onChange={handleChange} // Use shared handler
                required
              />
              <input
                type="text"
                name="category" // Add name attribute
                placeholder="Category (e.g., Hospitality, Retail)"
                className="w-full p-3 border border-primary-dark rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                value={form.category}
                onChange={handleChange}
                required
              />
               <div className="relative">
                 <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                    <CurrencyRupeeIcon className="h-5 w-5"/>
                 </span>
                <input
                  type="number"
                  name="pay" // Add name attribute
                  placeholder="Hourly Pay"
                  className="w-full p-3 pl-10 border border-primary-dark rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" // Added padding-left
                  value={form.pay}
                  onChange={handleChange}
                  required
                  min="0" // Basic validation
                  step="0.01" // Allow decimals
                />
              </div>
              <input
                type="text"
                name="time" // Add name attribute
                placeholder="Time (e.g., 4:30 PM - 9:00 PM)"
                className="w-full p-3 border border-primary-dark rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                value={form.time}
                onChange={handleChange}
                required
              />
              <textarea
                name="description" // Add name attribute
                placeholder="Job Description (Optional)"
                className="w-full p-3 border border-primary-dark rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                value={form.description}
                onChange={handleChange}
                rows="3"
              />
              <div className="flex justify-end space-x-3 pt-2">
                 <button
                    type="button" // Important: type="button" to prevent form submission
                    onClick={onClose}
                    className="px-4 py-2 bg-primary-light text-text-secondary rounded-lg hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                <button
                    type="submit"
                    className="px-5 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition"
                  >
                    Post Job
                  </button>
              </div>
            </form>
         </Dialog.Panel>
       </div>
    </Dialog>
  );
}