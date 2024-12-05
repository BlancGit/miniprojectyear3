import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedJobs() {
  // Add initial jobs
  const jobs = [
    {
      title: 'Fly to the Moon with a Rocket Guitar',
      description: 'Join our team of space adventurers as we take off to the moon with our trusty rocket-powered guitars. Responsibilities include playing a sick guitar solo while soaring through space and planting a flag to declare your awesomeness on the moon.',
      reward: 'Moon Rock Souvenir',
      requirements: 'Must be able to play the guitar (preferably electric), Comfortable with heights, Passion for rock music and space exploration',
      employerId: 1, // Make sure an employer with this ID exists
    },
    {
      title: 'Defend a Magical Forest as a Guardian',
      description: 'Become a guardian of the enchanted forest and protect mystical creatures from evil invaders. Use spells, magical swords, and your wits to defend this sacred place.',
      reward: 'Lifetime supply of enchanted forest fruits',
      requirements: 'Must be skilled in swordsmanship or spell-casting, Must love nature and its mystical elements, Bravery in the face of magical dangers',
      employerId: 1,
    },
    {
      title: 'Battle Sea Monsters as an Ocean Adventurer',
      description: 'Join our crew and sail the high seas in search of adventure and treasure. Face off against mighty sea monsters and defend the ship using your skills and bravery.',
      reward: 'A chest of pirate gold and eternal glory',
      requirements: 'Must have experience with sailing or monster battling, Love for the ocean and its mysteries, Fearlessness in the face of danger',
      employerId: 1,
    }, {
      title: 'Pilot a Mecha in the Galactic Robot Wars',
      description: 'Take control of a giant mech and lead humanity’s charge in the Galactic Robot Wars. Engage in epic battles against alien invaders and save the galaxy from destruction.',
      reward: 'Title of Galactic Hero and an interstellar medal',
      requirements: 'Experience in piloting mechs or similar vehicles, Strategic thinking under pressure, Willingness to risk life for the galaxy',
      employerId: 2,
    },
    {
      title: 'Dragon Whisperer for the Kingdom',
      description: 'Tame and train the kingdom’s dragons to ensure their cooperation with our knights. Use your charisma and bravery to forge bonds with these mighty creatures.',
      reward: 'A royal knighthood and a dragon companion',
      requirements: 'Understanding of dragon behavior, Courage in the presence of fire-breathing creatures, Patience and empathy',
      employerId: 2,
    },
    {
      title: 'Space Chef for the Star Cruiser Galaxy Feeder',
      description: 'Prepare exotic intergalactic dishes for the crew and passengers of the Galaxy Feeder star cruiser. Use rare ingredients from alien worlds to create out-of-this-world flavors.',
      reward: 'Free travel across the universe and a cosmic cookbook',
      requirements: 'Expertise in culinary arts, Creativity in creating new recipes, Interest in alien cuisine and culture',
      employerId: 3,
    },
    {
      title: 'Treasure Hunter in the Ancient Ruins',
      description: 'Join an elite team of explorers in uncovering hidden treasures from ancient ruins. Solve complex puzzles, avoid deadly traps, and bring home priceless artifacts.',
      reward: '10% of all treasures found and eternal fame',
      requirements: 'Knowledge of ancient history, Agility and quick reflexes, Keen observation skills',
      employerId: 3,
    },
    {
      title: 'Time Traveler for Historical Research',
      description: 'Travel through time to document key historical events and bring back valuable insights. Ensure minimal disruption to the timeline while gathering accurate data.',
      reward: 'A unique artifact from every time period visited',
      requirements: 'Deep knowledge of history, Ability to adapt to different eras, Respect for temporal laws',
      employerId: 4,
    },
    {
      title: 'Martial Arts Trainer for Galactic Warriors',
      description: 'Train aspiring galactic warriors in advanced martial arts techniques to prepare them for interstellar combat. Impart wisdom and strength through rigorous training.',
      reward: 'A grandmaster title and a custom lightsaber',
      requirements: 'Mastery in at least one martial art form, Passion for teaching and mentoring, Discipline and resilience',
      employerId: 4,
    },
  ];



  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }

  console.log('Jobs seeded!');
}

// seedJobs()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
