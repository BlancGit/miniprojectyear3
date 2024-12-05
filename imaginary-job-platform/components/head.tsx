'use client';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';

export default function Header() {
  const { user, logout } = useUser();

  return (
    <header className="bg-orange-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">
        <Link href="/">Imaginary Job Posting Platform</Link>
      </h1>
      <nav>
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="/allJobs">All Jobs</Link>
          </li>
          <li>
            <Link href="/postJob">Post a Job</Link>
          </li>
          {user ? (
            <>
              <li className="font-bold">Hello, {user.username}!</li>
              <li>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/Login">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
