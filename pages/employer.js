import React, { useState, useEffect } from 'react';
import prisma from '../prisma.js';
    
function EmployerPage({ initialJobs }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };
    const [jobs, setJobs] = useState(initialJobs);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [pay, setPay] = useState('');
    const [time, setTime] = useState('');

    const fetchJobs = async () => {
        try {
            const response = await fetch('/api/jobs/list');
            if (response.ok) {
                const data = await response.json();
                setJobs(data);
            } else {
                console.error('Failed to fetch jobs');
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, category, pay, time }),
            });

            if (response.ok) {
                fetchJobs();
                setTitle('');
                setDescription('');
                setCategory('');
                setPay('');
                setTime('');
                console.log('Job created successfully');
            } else {
                console.error('Failed to create job');
            }
        } catch (error) {
            console.error('Error creating job:', error);
        }
    };

    const handleDelete = async (jobId) => {
        try {
            const response = await fetch(`/api/jobs/${jobId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                fetchJobs();
            } else {
                console.error('Failed to delete job');
            }
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    return (
        <div>
            <h1>Employer page</h1>
            <div>
                <h2>Existing Jobs</h2>
                {jobs.map((job) => (
                    <div key={job.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                        <h3>{job.title}</h3>
                        <p>Description: {job.description}</p>
                        <p>Category: {job.category}</p>
                        <p>Pay: ${job.pay}</p>
                        <p>Time: {job.time}</p>
                        <p>Created At: {formatDate(job.createdAt)}</p>
                        <button onClick={() => handleDelete(job.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <h2>Create a New Job</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="pay">Pay:</label>
                    <input type="number" id="pay" value={pay} onChange={(e) => setPay(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
                <button type="submit">Create Job</button>
            </form>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    try {
        const jobs = await prisma.job.findMany();
        const serializedJobs = jobs.map(job => ({
            ...job,
            createdAt: job.createdAt.toISOString(),
            updatedAt: job.updatedAt.toISOString(),
        }));

        return {
            props: { initialJobs: JSON.parse(JSON.stringify(serializedJobs)) },
        };
    } catch (error) {
        console.error('Error fetching employer jobs:', error);
        return {
            props: { initialJobs: [], error: 'Failed to load jobs.' },
        };
    };
};

export default EmployerPage;
