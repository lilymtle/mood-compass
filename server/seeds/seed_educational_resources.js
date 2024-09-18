import { db } from "../src/config/db.js";

const educationalResourcesData = [
  {
    "id": 1,
    "name": "Self-care",
    "short_description": "Self-care involves taking deliberate actions to maintain or improve your physical, emotional, and mental well-being.",
    "descriptions": JSON.stringify([
      "Self-care refers to the conscious efforts individuals make to protect and enhance their physical, emotional, and mental health. It encompasses a wide range of practices such as maintaining a balanced lifestyle, seeking relaxation, managing stress, and setting boundaries to prioritize personal well-being.",
      "Self-care is essential for preventing burnout, improving resilience, and ensuring overall health in both the short and long term. It can include small daily routines or larger lifestyle changes tailored to individual needs and circumstances."
    ]),
    "images": JSON.stringify([
      "/images/self-care-card.jpg",
      "/images/grass.jpg"
    ]),
    "strategies": JSON.stringify([
      "Maintain a regular sleep schedule",
      "Practice mindfulness or meditation",
      "Engage in hobbies or activities you enjoy",
      "Set boundaries to avoid burnout",
      "Eat nutritious meals and stay hydrated"
    ]),
    "resources": JSON.stringify([
      {
        "title": "10 Ways to Practice Self-Care",
        "link": "https://www.verywellmind.com/self-care-strategies-overall-stress-reduction-3144729"
      },
      {
        "title": "The Importance of Self-Care for Mental Health",
        "link": "https://www.mentalhealth.org.uk/publications/guide-to-investing-in-your-self-care"
      }
    ])
  },
  {
    "id": 2,
    "name": "Healthy Living",
    "short_description": "Healthy living focuses on habits that promote a balanced and sustainable lifestyle for optimal physical, mental, and emotional health.",
    "descriptions": JSON.stringify([
      "Healthy living is a holistic approach to lifestyle choices that contribute to overall well-being. It includes regular physical activity, balanced nutrition, and mental health care, all of which are crucial for preventing disease, increasing longevity, and improving quality of life.",
      "A healthy lifestyle also emphasizes moderation in activities, maintaining proper hydration, and adopting stress-relief practices such as relaxation techniques. Consistently making healthy choices not only strengthens the immune system and reduces the risk of chronic illnesses but also contributes to better mental and emotional stability."
    ]),
    "images": JSON.stringify([
      "/images/healthy-living-card.jpg",
      "/images/vegetable-harvest.jpg"
    ]),
    "strategies": JSON.stringify([
      "Engage in regular physical activity",
      "Eat a balanced diet with a variety of nutrients",
      "Limit consumption of processed and sugary foods",
      "Stay hydrated throughout the day",
      "Prioritize mental health through relaxation techniques"
    ]),
    "resources": JSON.stringify([
      {
        "title": "Healthy Living Tips",
        "link": "https://www.healthline.com/nutrition/27-health-and-nutrition-tips"
      },
      {
        "title": "How to Live a Healthy Lifestyle",
        "link": "https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
      }
    ])
  },
  {
    "id": 3,
    "name": "Mind-Body Connection",
    "short_description": "The mind-body connection emphasizes the link between mental states and physical well-being, and vice versa.",
    "descriptions": JSON.stringify([
      "The mind-body connection is the scientific and philosophical understanding that mental states—such as thoughts, emotions, and stress—directly affect physical health. Likewise, the condition of the body can influence mood, cognitive functioning, and emotional balance.",
      "When an individual experiences stress or negative emotions, it can lead to physical symptoms like headaches, fatigue, or weakened immune responses. Conversely, physical practices like exercise, yoga, and relaxation techniques can improve mood, enhance mental clarity, and reduce anxiety. Strengthening the mind-body connection is crucial for promoting holistic health and achieving balance between mental and physical wellness."
    ]),
    "images": JSON.stringify([
      "/images/mind-body-connection-card.jpg",
      "/images/beach-boardwalk.jpg"
    ]),
    "strategies": JSON.stringify([
      "Practice deep breathing exercises",
      "Engage in physical activities like yoga or tai chi",
      "Cultivate positive thinking to reduce stress",
      "Focus on mindful awareness in daily activities",
      "Use relaxation techniques to improve sleep and reduce anxiety"
    ]),
    "resources": JSON.stringify([
      {
        "title": "The Mind-Body Connection: Understanding Its Impact",
        "link": "https://www.psychologytoday.com/us/basics/mind-body-connection"
      },
      {
        "title": "How to Strengthen the Mind-Body Connection",
        "link": "https://www.webmd.com/balance/features/ways-to-keep-your-mind-body-healthy"
      }
    ])
  }
]

export async function seed(knex) {
  try {
    await db("educational_resources").del();
    await db("educational_resources").insert(educationalResourcesData);
    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}