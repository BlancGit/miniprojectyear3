"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMessage(""); // Clear previous error messages

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/'); // Redirect to the home page after successful login
      } else {
        try {
          const data = await response.json();
          setErrorMessage(data.error || "An unexpected error occurred. Please try again.");
        } catch (err) {
          setErrorMessage('An unexpected error occurred. Please try again.');
        }
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setErrorMessage('An unexpected error occurred. Please check your internet connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-gradient-to-b from-brown-500 to-brown-700 p-10 rounded-2xl shadow-xl w-full max-w-lg border-2 border-orange-600">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-400">Login to Your Account</h1>

        {errorMessage && (
          <p className="text-red-500 text-center mb-6">{errorMessage}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-4 mb-4 bg-black text-gray-200 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-4 mb-6 bg-black text-gray-200 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />

        <button
          onClick={handleLogin}
          className={`w-full p-4 rounded-lg font-semibold text-black ${
            isLoading
              ? 'bg-orange-400 cursor-not-allowed'
              : 'bg-orange-600 hover:bg-orange-700 transition ease-in-out duration-200'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-300">Don't have an account?</p>
          <button
            onClick={() => router.push('/Register')}
            className="mt-2 text-orange-500 font-semibold hover:underline transition"
          >
            Register here
          </button>
        </div>
      </div>
    </div>
  );
}
