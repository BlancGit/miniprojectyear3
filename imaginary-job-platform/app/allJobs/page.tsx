'use client';
import "@/global.css"
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Define the expected type for a job
type Job = {
  id: number;
  title: string;
  description: string;
  reward: string;
  requirements: string;
};

export default function AllJobsPage() {
  // Use the type Job[] to explicitly define the structure of the state
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('/api/auth/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data: Job[] = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  if (loading) {
    return <div className="min-h-screen p-8 bg-blue-100 text-center">Loading Jobs...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-blue-200 text-blue">
      <h2 className="text-4xl font-extrabold mb-6 text-center">All Available Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-gradient-to-b from-yellow-400 to-yellow-300 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-2 border-yellow-500"
          >
            <h4 className="text-3xl font-bold mb-4">{job.title}</h4>
            <p className="mb-4">{job.description}</p>
            <p className="font-semibold">Reward: {job.reward}</p>
            <p className="font-semibold mt-4">Requirements:</p>
            <ul className="list-disc list-inside ml-6 mb-4">
              {job.requirements.split(',').map((req, index) => (
                <li key={index}>{req.trim()}</li>
              ))}
            </ul>
            <Link href={`/jobs/${job.id}`}>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition transform hover:scale-105">
                Apply Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
