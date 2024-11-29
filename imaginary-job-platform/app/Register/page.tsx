"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Adventurer");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setIsLoading(true);
    setErrorMessage(""); // Clear any previous error messages

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, role }),
      });

      if (response.ok) {
        router.push('/'); // Redirect to login page after successful registration
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      setErrorMessage('An unexpected error occurred. Please check your internet connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Create Your Account</h1>
        
        {errorMessage && (
          <p className="text-red-500 text-center mb-6">{errorMessage}</p>
        )}

        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="block w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
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
          className="block w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          className="block w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Employer">Employer</option>
          <option value="Adventurer">Adventurer</option>
        </select>

        <button 
          onClick={handleRegister} 
          className={`w-full p-4 rounded-lg font-semibold text-white ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 transition ease-in-out duration-200'}`}
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </div>
    </div>
  );
}
