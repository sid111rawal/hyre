/* pages/employer.js */
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import JobCard from '../components/JobCard';
import PostJobModal from '../components/PostJobModal';
import ApplicationCard from '../components/ApplicationCard';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { PrismaClient } from '@prisma/client'; // Import PrismaClient

// Receive props passed from _app.js
export default function Employer({ currentRole, onRoleChange, initialJobs }) { // Receive initialJobs
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postedShifts, setPostedShifts] = useState(initialJobs || []); // Use initialJobs
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [applications, setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); // Add error state

    // Fetch applications for a selected job
    useEffect(() => {
        const fetchApplications = async () => {
            if (!selectedJobId) {
                setApplications([]);
                return;
            }

            setIsLoading(true);
            try {
                const response = await fetch(`/api/applications?jobId=${selectedJobId}`); // Adjust API endpoint if needed
                if (!response.ok) throw new Error('Failed to fetch applications');
                const data = await response.json();
                setApplications(data.applications || []); // Assuming API returns { applications: [] }
            } catch (error) {
                console.error('Error fetching applications:', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchApplications();
    }, [selectedJobId]);

    // Handle posting a new job
    const handlePostJob = async (jobData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jobData),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to post job');
            }
            const result = await response.json();
            setPostedShifts((prevShifts) => [result.job, ...prevShifts]);
            setIsModalOpen(false); // Close the modal on success
            alert('Job posted successfully!');
        } catch (error) {
            console.error('Error posting job:', error);
            setError(error.message);
            alert(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle job card actions
    const handleApplicantAction = (action, jobId) => {
        console.log(`Action: ${action} for Job ID: ${jobId}`);
        if (action === 'view') {
            setSelectedJobId(jobId);
        }
        // Implement other actions as needed
    };

    return (
        <Layout title="Employer Dashboard" currentRole={currentRole} onRoleChange={onRoleChange}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-text-primary">Posted Shifts & Applicants</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition text-sm font-medium shadow-sm"
                >
                    <PlusCircleIcon className="h-5 w-5 mr-1.5" />
                    Post New Job
                </button>
            </div>

            {error && <div className="text-red-500 mb-4">Error: {error}</div>} {/* Display error */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-semibold text-text-secondary mb-2">Your Job Postings</h3>
                    {isLoading && !selectedJobId && <p>Loading jobs...</p>}
                    {!isLoading && postedShifts.length === 0 && <p className="text-text-secondary">You haven't posted any jobs yet.</p>}
                    {postedShifts.map((shift) => (
                        <JobCard
                            key={shift.id}
                            job={shift}
                            variant="employer"
                            onAction={(action) => handleApplicantAction(action, shift.id)}
                        />
                    ))}
                </div>

                <div className="lg:col-span-1 space-y-4">
                    <h3 className="text-xl font-semibold text-text-secondary mb-2">
                        {selectedJobId ? `Applicants for Job #${selectedJobId.split('-')[1]}` : 'Select a Job to View Applicants'}
                    </h3>
                    {isLoading && selectedJobId && <p>Loading applicants...</p>}
                    {!isLoading && selectedJobId && applications.length === 0 && <p className="text-text-secondary">No applications yet for this job.</p>}
                    {!isLoading && applications.map((app) => (
                        <ApplicationCard key={app.id} application={app} />
                    ))}
                </div>
            </div>

            <PostJobModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onPost={handlePostJob} />
        </Layout>
    );
}

// --- Server-Side Data Fetching ---
export async function getServerSideProps(context) {
    try {
        const prisma = new PrismaClient();
        // ** IMPORTANT:  Replace 'someEmployerId' with actual logic to get the current employer's ID.
        // ** This might involve session management, authentication context, or similar.
        const employerId = 'someEmployerId'; //  Placeholder!

        const jobs = await prisma.job.findMany({
            where: { employerId: employerId },
            orderBy: { createdAt: 'desc' },
            include: {
                _count: { select: { applications: true } }, // Include count of applications
            },
        });

        await prisma.$disconnect();

        // Serialize dates to avoid Next.js serialization issues
        const serializedJobs = jobs.map(job => ({
            ...job,
            createdAt: job.createdAt.toISOString(),
            updatedAt: job.updatedAt.toISOString(),
        }));

        return {
            props: { initialJobs: JSON.parse(JSON.stringify(serializedJobs)) }, // MUST serialize dates!
        };
    } catch (error) {
        console.error('Error fetching employer jobs:', error);
        return {
            props: { initialJobs: [], error: 'Failed to load jobs.' },
        };
    }
}