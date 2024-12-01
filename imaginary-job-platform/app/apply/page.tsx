// // 'use client';

// // import "../globals.css";
// // import { useState } from 'react';

// // export default function ApplicationPage() {
// //   const [jobId, setJobId] = useState('');
// //   const [applicantName, setApplicantName] = useState('');
// //   const [applicantEmail, setApplicantEmail] = useState('');
// //   const [coverLetter, setCoverLetter] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       const response = await fetch('/api/auth/apply', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           jobId: parseInt(jobId), // Convert to integer if needed
// //           userId: 1, // Replace with the current logged-in user ID
// //           applicantName,
// //           applicantEmail,
// //           coverLetter,
// //         }),
// //       });

// //       if (response.ok) {
// //         alert('Application submitted successfully!');
// //         setJobId('');
// //         setApplicantName('');
// //         setApplicantEmail('');
// //         setCoverLetter('');
// //       } else {
// //         alert('Failed to submit application');
// //       }
// //     } catch (error) {
// //       console.error('Error submitting application:', error);
// //       alert('An error occurred while submitting your application');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen p-8 bg-gray-100">
// //       <h2 className="text-4xl font-bold mb-6">Apply for a Job</h2>
// //       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
// //         <div className="mb-4">
// //           <label className="block text-gray-700 mb-2" htmlFor="jobId">Job ID:</label>
// //           <input
// //             type="text"
// //             id="jobId"
// //             value={jobId}
// //             onChange={(e) => setJobId(e.target.value)}
// //             className="w-full border-2 p-2 rounded"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
// //           <input
// //             type="text"
// //             id="name"
// //             value={applicantName}
// //             onChange={(e) => setApplicantName(e.target.value)}
// //             className="w-full border-2 p-2 rounded"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
// //           <input
// //             type="email"
// //             id="email"
// //             value={applicantEmail}
// //             onChange={(e) => setApplicantEmail(e.target.value)}
// //             className="w-full border-2 p-2 rounded"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-700 mb-2" htmlFor="coverLetter">Cover Letter:</label>
// //           <textarea
// //             id="coverLetter"
// //             value={coverLetter}
// //             onChange={(e) => setCoverLetter(e.target.value)}
// //             className="w-full border-2 p-2 rounded"
// //             required
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition"
// //           disabled={loading}
// //         >
// //           {loading ? 'Submitting...' : 'Submit Application'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }



// 'use client';

// import "../globals.css";
// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';

// export default function ApplicationPage() {
//   const searchParams = useSearchParams();
//   const jobId = searchParams.get("jobId") ?? '';

//   const [applicantName, setApplicantName] = useState('');
//   const [applicantEmail, setApplicantEmail] = useState('');
//   const [coverLetter, setCoverLetter] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('/api/auth/apply', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           jobId: parseInt(jobId), // Convert to integer if needed
//           applicantName,
//           applicantEmail,
//           coverLetter,
//         }),
//       });

//       if (response.ok) {
//         alert('Application submitted successfully!');
//         setApplicantName('');
//         setApplicantEmail('');
//         setCoverLetter('');
//       } else {
//         alert('Failed to submit application');
//       }
//     } catch (error) {
//       console.error('Error submitting application:', error);
//       alert('An error occurred while submitting your application');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen p-8 bg-gray-100">
//       <h2 className="text-4xl font-bold mb-6">Apply for Job ID: {jobId}</h2>
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={applicantName}
//             onChange={(e) => setApplicantName(e.target.value)}
//             className="w-full border-2 p-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={applicantEmail}
//             onChange={(e) => setApplicantEmail(e.target.value)}
//             className="w-full border-2 p-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="coverLetter">Cover Letter:</label>
//           <textarea
//             id="coverLetter"
//             value={coverLetter}
//             onChange={(e) => setCoverLetter(e.target.value)}
//             className="w-full border-2 p-2 rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition"
//           disabled={loading}
//         >
//           {loading ? 'Submitting...' : 'Submit Application'}
//         </button>
//       </form>
//     </div>
//   );
// }











'use client';

import "../globals.css";
import { useState } from 'react';

export default function ApplicationPage() {
  const [jobId, setJobId] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobId: parseInt(jobId), // Convert to integer if needed
          userId: 1, // Replace with the current logged-in user ID
          applicantName,
          applicantEmail,
          coverLetter,
        }),
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        setJobId('');
        setApplicantName('');
        setApplicantEmail('');
        setCoverLetter('');
      } else {
        alert('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred while submitting your application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">Apply for a Job</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="jobId">Job ID:</label>
          <input
            type="text"
            id="jobId"
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            className="w-full border-2 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            className="w-full border-2 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={applicantEmail}
            onChange={(e) => setApplicantEmail(e.target.value)}
            className="w-full border-2 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="coverLetter">Cover Letter:</label>
          <textarea
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            className="w-full border-2 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
