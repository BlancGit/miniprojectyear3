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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Login to Your Account</h1>
        
        {errorMessage && (
          <p className="text-red-500 text-center mb-6">{errorMessage}</p>
        )}

        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="block w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="block w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button 
          onClick={handleLogin} 
          className={`w-full p-4 rounded-lg font-semibold text-white ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 transition ease-in-out duration-200'}`}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <button
            onClick={() => router.push('/Register')}
            className="mt-2 text-blue-600 font-semibold hover:underline transition"
          >
            Register here
          </button>
        </div>
      </div>
    </div>
  );
}
