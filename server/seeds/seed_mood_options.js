import { db } from "../src/config/db.js";

const moodOptionsData = [
  {
    id: 1,
    description: "Happy",
    emoji: "😁"
  },
  {
    id: 2, 
    description: "Content",
    emoji: "😊"
  },
  {
    id: 3,
    description: "Relaxed",
    emoji: "😌"
  },
  {
    id: 4,
    description: "Excited",
    emoji: "🥳"
  },
  {
    id: 5,
    description: "Neutral",
    emoji: "😐"
  },
  {
    id: 6,
    description: "Anxious",
    emoji: "😰"
  },
  {
    id: 7,
    description: "Stressed",
    emoji: "😓"
  },
  {
    id: 8,
    description: "Sad",
    emoji: "🙁"
  },
  {
    id: 9,
    description: "Angry",
    emoji: "😠"
  }
];

export async function seed() {
  try {
    await db("mood_options").del();
    await db("mood_options").insert(moodOptionsData);
    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}