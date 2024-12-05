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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-gradient-to-b from-brown-500 to-brown-700 p-10 rounded-2xl shadow-xl w-full max-w-lg border-2 border-orange-600">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-400">Create Your Account</h1>
        
        {errorMessage && (
          <p className="text-red-500 text-center mb-6">{errorMessage}</p>
        )}

        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="block w-full p-4 mb-4 bg-black text-gray-200 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />
        
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
          className="block w-full p-4 mb-4 bg-black text-gray-200 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />

        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          className="block w-full p-4 mb-6 bg-black text-gray-200 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        >
          <option value="Employer">Employer</option>
          <option value="Adventurer">Adventurer</option>
        </select>

        <button 
          onClick={handleRegister} 
          className={`w-full p-4 rounded-lg font-semibold text-black ${
            isLoading
              ? 'bg-orange-400 cursor-not-allowed'
              : 'bg-orange-600 hover:bg-orange-700 transition ease-in-out duration-200'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </div>
    </div>
  );
}
