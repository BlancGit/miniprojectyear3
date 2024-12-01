'use client';
import "@/global.css";
import { useEffect, useState, useContext } from 'react';
import { useParams, useRouter } from 'next/navigation';
// import { UserContext } from '@/context/userContext'; // Replace with your actual context for managing user state

type JobDetails = {
  id: number;
  title: string;
  description: string;
  reward: string;
  requirements: string;
};

export default function ApplicationForm() {
  // const params = useParams();
  // const router = useRouter();
  // // const { user } = useContext(UserContext); // Use your context to check the user's state
  // let jobId = params?.jobId;

  // if (Array.isArray(jobId)) {
  //   jobId = jobId[0]; // Get the first element if it is an array
  // }

  // const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);

  // useEffect(() => {
  //   // If no jobId, or user is an employer, prevent access
  //   if (!jobId) {
  //     console.error('Job ID is undefined. Unable to fetch job details.');
  //     return;
  //   }

  //   // If user is not logged in, redirect to login page
  //   if (!user) {
  //     router.push('/login');
  //     return;
  //   }

  //   // If the user is logged in but is an employer, show an alert
  //   if (user.role !== 'adventurer') {
  //     alert('You must be an adventurer to apply for this job.');
  //     return;
  //   }

  //   async function fetchJobDetails() {
  //     try {
  //       const response = await fetch(`/api/auth/jobs/${jobId}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch job details');
  //       }
  //       const data: JobDetails = await response.json();
  //       setJobDetails(data);
  //     } catch (error) {
  //       console.error('Error fetching job details:', error);
  //     }
  //   }

  //   fetchJobDetails();
  // }, [jobId, user, router]);

  // if (!jobDetails) {
  //   return <div>Loading...</div>;
  // }

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!jobId) {
  //     console.error('Job ID is undefined. Cannot submit the application.');
  //     return;
  //   }

  //   const applicantName = (e.target as HTMLFormElement).name.value;
  //   const applicantEmail = (e.target as HTMLFormElement).email.value;
  //   const coverLetter = (e.target as HTMLFormElement).coverLetter.value;

  //   try {
  //     const response = await fetch('/api/auth/apply', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         jobId: parseInt(jobId),
  //         userId: user.id, // Dynamically get it from the user session
  //         applicantName,
  //         applicantEmail,
  //         coverLetter,
  //       }),
  //     });

  //     if (response.ok) {
  //       alert('Application submitted successfully!');
  //     } else {
  //       alert('Failed to submit application');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting application:', error);
  //   }
  // };

  // return (
  //   <div className="min-h-screen p-8 bg-gray-100">
  //     <h2 className="text-4xl font-bold mb-6">Apply for {jobDetails.title}</h2>
  //     <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
  //       <div className="mb-4">
  //         <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
  //         <input type="text" id="name" name="name" className="w-full border-2 p-2 rounded" required />
  //       </div>
  //       <div className="mb-4">
  //         <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
  //         <input type="email" id="email" name="email" className="w-full border-2 p-2 rounded" required />
  //       </div>
  //       <div className="mb-4">
  //         <label className="block text-gray-700 mb-2" htmlFor="coverLetter">Cover Letter:</label>
  //         <textarea id="coverLetter" name="coverLetter" className="w-full border-2 p-2 rounded" required></textarea>
  //       </div>
  //       <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">
  //         Submit Application
  //       </button>
  //     </form>
  //   </div>
  // );
}
