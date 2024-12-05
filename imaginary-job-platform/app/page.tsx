'use client';

import Link from "next/link";
import { useUser } from '@/context/UserContext';
import "../global.css"

export default function MainPage() {
  const { user, logout } = useUser();

  return (
    <div className="min-h-screen p-8 bg-blue-200 text-blue">
    


      {/* Welcome Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-6">Welcome to the Imaginary Job Posting Platform!</h2>
        <p className="text-xl mb-8">
          Are you ready to explore jobs that defy reality, inspired by anime and adventure? Whether you're an Employer looking for creative talent or an Adventurer ready for an impossible mission, this is the place for you!
        </p>
        <div className="flex justify-center gap-6">
        <Link href='/allJobs'>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition transform hover:scale-105">
               View ALL Jobs
              </button>
            </Link>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition transform hover:scale-105">
            Post a Job
          </button>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <section className="mt-12">
        <h3 className="text-4xl font-extrabold mb-10 text-center">Featured Job Postings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Example Job Card 1 */}
          <div className="bg-gradient-to-b from-yellow-400 to-yellow-300 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-2 border-yellow-500">
            <h4 className="text-3xl font-bold mb-4">Fly to the Moon with a Rocket Guitar 🚀🎸</h4>
            <p className="mb-4">
              Join our team of space adventurers as we take off to the moon with our trusty rocket-powered guitars.
              Responsibilities include playing a sick guitar solo while soaring through space and planting a flag
              to declare your awesomeness on the moon.
            </p>
            <p className="font-semibold">Reward: Moon Rock Souvenir</p>
            <p className="font-semibold mt-4">Requirements:</p>
            <ul className="list-disc list-inside ml-6 mb-4">
              <li>Must be able to play the guitar (preferably electric).</li>
              <li>Comfortable with heights... very high heights.</li>
              <li>Passion for rock music and space exploration.</li>
            </ul>
            <Link href='/apply'>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition transform hover:scale-105">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Example Job Card 2 */}
          <div className="bg-gradient-to-b from-green-400 to-green-300 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-2 border-green-500">
            <h4 className="text-3xl font-bold mb-4">Defend a Magical Forest as a Guardian 🌲🛡️</h4>
            <p className="mb-4">
              Become a guardian of the enchanted forest and protect mystical creatures from evil invaders. Use spells,
              magical swords, and your wits to defend this sacred place.
            </p>
            <p className="font-semibold">Reward: Lifetime supply of enchanted forest fruits</p>
            <p className="font-semibold mt-4">Requirements:</p>
            <ul className="list-disc list-inside ml-6 mb-4">
              <li>Must be skilled in swordsmanship or spell-casting.</li>
              <li>Must love nature and its mystical elements.</li>
              <li>Bravery in the face of magical dangers.</li>
            </ul>
            <Link href='/apply'>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition transform hover:scale-105">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Example Job Card 3 */}
          <div className="bg-gradient-to-b from-pink-400 to-pink-300 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-2 border-pink-500">
            <h4 className="text-3xl font-bold mb-4">Battle Sea Monsters as an Ocean Adventurer 🌊🦑</h4>
            <p className="mb-4">
              Join our crew and sail the high seas in search of adventure and treasure. Face off against mighty sea
              monsters and defend the ship using your skills and bravery.
            </p>
            <p className="font-semibold">Reward: A chest of pirate gold and eternal glory</p>
            <p className="font-semibold mt-4">Requirements:</p>
            <ul className="list-disc list-inside ml-6 mb-4">
              <li>Must have experience with sailing or monster battling.</li>
              <li>Love for the ocean and its mysteries.</li>
              <li>Fearlessness in the face of danger.</li>
            </ul>
            <Link href="/apply">
              <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-700 transition transform hover:scale-105">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Employer and Adventurer Info Section */}
      <section className="mt-20 text-center">
        <h3 className="text-4xl font-extrabold mb-10">How Does It Work?</h3>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-md hover:shadow-2xl transition transform hover:scale-105">
            <h4 className="text-3xl font-bold mb-6">For Employers 🏢</h4>
            <p className="mb-6">
              Have a job that seems impossible? Looking for brave and adventurous talent? Post a job here and let the dreamers of the world join your quest.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition transform hover:scale-105">
              Post a Job
            </button>
          </div>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-md hover:shadow-2xl transition transform hover:scale-105">
            <h4 className="text-3xl font-bold mb-6">For Adventurers ⚔️</h4>
            <p className="mb-6">
              Looking for your next impossible mission? Browse jobs inspired by your favorite anime adventures and take on challenges beyond your wildest dreams.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition transform hover:scale-105">
              Find Jobs
            </button>
            <div className="mt-8">
              <p className="font-semibold mb-4">New here? Join us now!</p>
              <div className="flex gap-4 justify-center">
                <Link href="/Register">
                  <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                    Register
                  </button>
                </Link>

                <Link href="/Login">
                  <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
