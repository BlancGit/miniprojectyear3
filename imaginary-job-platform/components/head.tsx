"use client";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 shadow-md">
      <h1 className="text-4xl font-extrabold">Imaginary Job Posting Platform</h1>
      <nav className="mt-4">
        <ul className="flex gap-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/jobs" className="hover:underline">All Jobs</a></li>
          <li><a href="/post-job" className="hover:underline">Post a Job</a></li>
        </ul>
      </nav>
    </header>
  );
}
