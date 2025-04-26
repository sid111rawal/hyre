/* pages/worker.js */
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import JobCard from '../components/JobCard';

// Receive props passed from _app.js
export default function Worker({ currentRole, onRoleChange, initialJobs }) { // Receive initialJobs
    const [availableJobs, setAvailableJobs] = useState(initialJobs || []); // Use initialJobs
    const [appliedJobIds, setAppliedJobIds] = useState(new Set());
    const [isLoading, setIsLoading] = useState(false);
    const [filterCategory, setFilterCategory] = useState('');
    const [error, setError] = useState(null); // Add error state

    // Handle applying for a job
    const handleApply = async (jobId) => {
        if (appliedJobIds.has(jobId)) {
            alert(`Already applied for job ${jobId}!`);
            return;
        }

        console.log(`Applying for job ${jobId}`);
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ jobId: jobId /*, workerId: getWorkerId() */ }), // Need worker ID
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit application');
            }
            const result = await response.json();
            console.log('Application success:', result);
            setAppliedJobIds((prev) => new Set(prev).add(jobId));
            alert(`Applied successfully for job ${jobId}!`);
        } catch (error) {
            console.error('Error applying for job:', error);
            setError(error.message);
            alert(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // Filter jobs based on category
    const filteredJobs = filterCategory
        ? availableJobs.filter((job) => job.category.toLowerCase() === filterCategory.toLowerCase())
        : availableJobs;

    // Get unique categories for filter dropdown
    const categories = [...new Set(availableJobs.map((job) => job.category))];

    return (
        <Layout title="Worker Dashboard" currentRole={currentRole} onRoleChange={onRoleChange}>
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-semibold text-text-primary">Available Shifts</h1>
                {/* Filter Dropdown */}
                <div className="flex items-center">
                    <label htmlFor="category-filter" className="mr-2 text-sm font-medium text-text-secondary">
                        Filter by Category:
                    </label>
                    <select
                        id="category-filter"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="p-2 border border-primary-dark rounded-lg text-sm focus:ring-2 focus:ring-secondary focus:border-transparent"
                    >
                        <option value="">All Categories</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {error && <div className="text-red-500 mb-4">Error: {error}</div>} {/* Display error */}

            {isLoading && <p>Loading available jobs...</p>}

            {!isLoading && filteredJobs.length === 0 && (
                <p className="text-text-secondary text-center mt-8">
                    {filterCategory ? `No jobs found in the "${filterCategory}" category.` : 'No jobs available right now. Check back later!'}
                </p>
            )}

            {!isLoading && filteredJobs.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredJobs.map((job) => (
                        <JobCard key={job.id} job={job} variant="worker" onAction={() => handleApply(job.id)} />
                    ))}
                </div>
            )}
        </Layout>
    );
}

// --- Server-Side Data Fetching ---
export async function getServerSideProps() {
    try {
        const prisma = new PrismaClient();
        const jobs = await prisma.job.findMany(); // Fetch all jobs for workers
        await prisma.$disconnect();

        // Serialize dates
        const serializedJobs = jobs.map(job => ({
            ...job,
            createdAt: job.createdAt.toISOString(),
            updatedAt: job.updatedAt.toISOString(),
        }));

        return {
            props: { initialJobs: JSON.parse(JSON.stringify(serializedJobs)) },
        };
    } catch (error) {
        console.error('Error fetching worker jobs:', error);
        return {
            props: { initialJobs: [], error: 'Failed to load jobs.' },
        };
    }
}