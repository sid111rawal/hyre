import React from 'react';
import { PrismaClient } from '@prisma/client';
import withMiddleware from './api/middleware';

function WorkerPage({ initialJobs }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };
    return (
        <div>
            <h1>Worker page</h1>
            {initialJobs.map((job) => (   
                <div key={job.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                    <h2>{job.title}</h2>
                    <p>Description: {job.description}</p>
                    <p>Category: {job.category}</p>
                    <p>Pay: ${job.pay}</p>
                    <p>Time: {job.time}</p>
                    <p>Created At: {formatDate(job.createdAt)}</p>
                    <button>Apply</button>
                </div>







            ))}
        </div>
    );
}

export const getServerSideProps = withMiddleware(async (context) => {
  const { props } = await getServerSideProps(); // Call the original function
  return {
    props
  };
});
export default WorkerPage;
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