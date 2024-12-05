import { seedJobs } from '@/utils/seed';

export default async function Page() {
  // The `seedJobs` function will run the seeding logic and return a result.
  let result: string;

  try {
    // Call the seeding function
    result = await seedJobs();
  } catch (error) {
    console.error('Seeding failed:', error);
    result = 'Seeding failed. Check the console for details.';
  }

  return (
    <div>
      <h1>Seeding Jobs</h1>
      <p>{result}</p>
    </div>
  );
}
