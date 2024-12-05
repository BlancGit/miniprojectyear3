import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type JobDetailProps = {
  params: { id: string };
};

export default async function DetailJobPage({ params }: JobDetailProps) {
  const jobId = parseInt(params.id, 10);

  // Fetch job details including employer and applications
  const job = await prisma.job.findUnique({
    where: { id: jobId },
    include: {
      employer: true, // Include employer details
      applications: true, // Include applications details
    },
  });

  if (!job) {
    return (
      <div className="min-h-screen p-8 bg-red-100 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Job Not Found</h2>
        <p>Sorry, we couldn’t find the job you’re looking for.</p>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="">{job.title}</h1>
      <div className="">
        <p className="mb-4">{job.description}</p>
        <p className="font-semibold">Reward: {job.reward}</p>
        <p className="font-semibold mt-4">Requirements:</p>
        <ul className="list-disc list-inside ml-6 mb-4">
          {job.requirements.split(',').map((req, index) => (
            <li key={index}>{req.trim()}</li>
          ))}
        </ul>
        <div className="">
          <h3 className="">Employer Details</h3>
         
          <p><strong>Email:</strong> {job.employer.email}</p>
        </div>
        {/* {job.applications.length > 0 ? (
          <div className="mt-6">
            <h3 className="text-2xl font-bold">Applications</h3>
            <ul className="list-disc list-inside ml-6">
              {job.applications.map((application, index) => (
                <li key={index}>
                  <strong>Applicant:</strong> {application.applicantName} 
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-6">
            <p>No applications yet for this job.</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
