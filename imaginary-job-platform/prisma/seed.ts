import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
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
    },
  ];

  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }

  console.log('Jobs seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
