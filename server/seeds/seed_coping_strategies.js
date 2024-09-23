import { db } from "../src/config/db.js";

const copingStrategiesData = [
    {
        "id": 1,
        "name": "Mindfulness",
        "short_description": "Focus on the present to reduce stress and enhance awareness.",
        "descriptions": JSON.stringify([
            "Mindfulness is the practice of intentionally focusing your attention on the present moment, acknowledging your thoughts and feelings without judgment. This practice has roots in ancient meditation traditions and has been shown to reduce stress, improve focus, and enhance emotional regulation.",
            "By cultivating mindfulness, you become more aware of your mental and emotional patterns, which can help prevent reactive behaviors. Regular mindfulness practice helps create a sense of inner calm and can be a powerful tool in managing anxiety, depression, and chronic stress."
        ]),
        "images": JSON.stringify([
            "/images/mindfulness-card.jpg",
            "/images/conifer-sapling.jpg"
        ]),
        "steps": JSON.stringify([
            "Sit comfortably and close your eyes.",
            "Focus on your breathing or the sensations in your body.",
            "Gently bring your attention back if your mind wanders."
        ]),
        "benefits": JSON.stringify([
            "Reduces stress and anxiety",
            "Improves emotional regulation",
            "Increases self-awareness",
            "Enhances focus and attention"
        ]),
        "resources": JSON.stringify([
            {
                "title": "Mindfulness Meditation Guide",
                "link": "https://www.mindful.org/meditation/mindfulness-getting-started/"
            },
            {
                "title": "Guided Mindfulness Exercises",
                "link": "https://www.smilingmind.com.au/online-programs/"
            },
            {
                "title": "Headspace App",
                "link": "https://www.headspace.com/mindfulness"
            }
        ])
    },
    {
        "id": 2,
        "name": "Deep Breathing",
        "short_description": "Use controlled breathing to calm the mind and body.",
        "descriptions": JSON.stringify([
            "Deep breathing exercises help activate the parasympathetic nervous system, which triggers a relaxation response in the body. This technique is often used to alleviate the physical symptoms of stress, such as rapid heartbeat, shallow breathing, and muscle tension.",
            "By slowing down your breath, you allow more oxygen into your lungs and bloodstream, which reduces anxiety and promotes a sense of calm. Deep breathing can be particularly helpful during moments of panic, stress, or overwhelm and is a quick and easy way to reset both the mind and body."
        ]),
        "images": JSON.stringify([
            "/images/deep-breathing-card.jpg",
            "/images/cloud-jpg"
        ]),
        "steps": JSON.stringify([
            "Inhale deeply through your nose for 4 counts.",
            "Hold your breath for 4 counts.",
            "Exhale slowly through your mouth for 6 counts.",
            "Repeat until you feel calmer."
        ]),
        "benefits": JSON.stringify([
            "Reduces stress and anxiety",
            "Improves oxygen flow and circulation",
            "Promotes relaxation",
            "Helps regulate heart rate and blood pressure"
        ]),
        "resources": JSON.stringify([
            {
                "title": "Deep Breathing Exercises",
                "link": "https://www.healthline.com/health/deep-breathing-exercises"
            },
            {
                "title": "Calm App",
                "link": "https://www.calm.com/breathing"
            },
            {
                "title": "Breathing Exercises from Mayo Clinic",
                "link": "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/breathing-exercises/art-20044238"
            }
        ])
    },
    {
        "id": 3,
        "name": "Progressive Muscle Relaxation",
        "short_description": "Release tension by tensing and relaxing muscle groups.",
        "descriptions": JSON.stringify([
            "Progressive muscle relaxation (PMR) is a technique used to reduce physical tension and mental stress. It involves systematically tensing and then relaxing different muscle groups, which helps bring awareness to areas of tension in your body.",
            "By relaxing these muscles, you can release built-up stress and feel a greater sense of physical and emotional relief. PMR is often used to manage stress, anxiety, and even chronic pain, as it encourages a deep sense of relaxation throughout the body. Practicing this technique regularly can help you become more aware of tension and develop a stronger mind-body connection."
        ]),
        "images": JSON.stringify([
            "/images/progressive-muscle-relaxation-card.jpg",
            "/images/park-trail.jpg"
        ]),
        "steps": JSON.stringify([
            "Start by tensing your toes and feet for 5 seconds.",
            "Release and feel the relaxation spread.",
            "Move progressively up your body, tensing and relaxing each muscle group."
        ]),
        "benefits": JSON.stringify([
            "Reduces muscle tension and pain",
            "Promotes overall relaxation",
            "Increases body awareness",
            "Helps manage anxiety and stress"
        ]),
        "resources": JSON.stringify([
            {
                "title": "Progressive Muscle Relaxation Guide",
                "link": "https://www.verywellmind.com/how-to-practice-progressive-muscle-relaxation-3024400"
            },
            {
                "title": "PMR Audio Guide",
                "link": "https://www.anxietycoach.com/progressive-muscle-relaxation.html"
            },
            {
                "title": "Progressive Relaxation from Anxiety Canada",
                "link": "https://www.anxietycanada.com/articles/progressive-muscle-relaxation/"
            }
        ])
    },
    {
        "id": 4,
        "name": "Grounding",
        "short_description": "Reconnect with the present moment through sensory awareness.",
        "descriptions": JSON.stringify([
            "Grounding techniques are used to bring your attention back to the present moment when you are feeling overwhelmed by anxiety, panic, or stress. By focusing on your five senses—sight, sound, touch, smell, and taste—you can detach from distressing thoughts and reconnect with the immediate environment.",
            "Grounding is particularly useful during times of emotional distress or when experiencing dissociation, as it helps bring you back to the here and now. Grounding techniques can be simple, quick to practice, and highly effective at reducing emotional overwhelm."
        ]),
        "images": JSON.stringify([
            "/images/grounding-card.jpg",
            "/images/lotus.jpg"
        ]),
        "steps": JSON.stringify([
            "Look around and name 5 things you can see.",
            "Focus on 4 things you can touch.",
            "Identify 3 sounds you can hear.",
            "Notice 2 things you can smell.",
            "Recognize 1 thing you can taste."
        ]),
        "benefits": JSON.stringify([
            "Reduces anxiety and panic attacks",
            "Helps manage dissociation",
            "Increases connection to the present",
            "Promotes emotional stability"
        ]),
        "resources": JSON.stringify([
            {
                "title": "Grounding Techniques for Anxiety",
                "link": "https://www.verywellmind.com/grounding-techniques-2584177"
            },
            {
                "title": "Grounding Exercises for Trauma",
                "link": "https://www.traumainformedcare.ch/grounding-exercises/"
            },
            {
                "title": "DBT Grounding Skills",
                "link": "https://www.dbtselfhelp.com/dbt-grounding-skills/"
            }
        ])
    },
    {
        "id": 5,
        "name": "Cognitive Restructuring",
        "short_description": "Challenge negative thoughts and reframe them positively.",
        "descriptions": JSON.stringify([
            "Cognitive restructuring is a core technique in cognitive-behavioral therapy (CBT) that helps people identify and challenge distorted or unhelpful thoughts. This process involves analyzing negative thought patterns, understanding the cognitive distortions at play (e.g., black-and-white thinking, catastrophizing), and replacing them with more realistic and balanced alternatives.",
            "By rethinking automatic negative thoughts, you can reduce the impact of stress, anxiety, and depression. Over time, cognitive restructuring helps develop healthier thinking habits, which leads to more positive emotions and better coping strategies."
        ]),
        "images": JSON.stringify([
            "/images/cognitive-restructuring-card.jpg",
            "/images/leaf.jpg"
        ]),
        "steps": JSON.stringify([
            "Identify a negative thought you're having.",
            "Examine the evidence for and against this thought.",
            "Consider a more balanced perspective or alternative thought."
        ]),
        "benefits": JSON.stringify([
            "Reduces negative thinking patterns",
            "Improves emotional well-being",
            "Enhances problem-solving skills",
            "Increases resilience against stress and anxiety"
        ]),
        "resources": JSON.stringify([
            {
                "title": "Cognitive Restructuring Techniques",
                "link": "https://www.therapistaid.com/worksheets/cognitive-restructuring"
            },
            {
                "title": "Introduction to Cognitive Restructuring",
                "link": "https://www.psychologytools.com/resource/cognitive-restructuring/"
            },
            {
                "title": "CBT Thought Records",
                "link": "https://www.getselfhelp.co.uk/docs/ThoughtRecord.pdf"
            }
        ])
    },
    {
        "id": 6,
        "name": "Behavioural Activation",
        "short_description": "Engage in positive activities to improve mood.",
        "descriptions": JSON.stringify([
            "Behavioural activation is a therapeutic strategy that encourages individuals to engage in activities they enjoy or find meaningful, especially during times of low mood or depression. The idea is that by increasing your participation in positive, rewarding activities, your mood will begin to improve.",
            "Negative mental health states, such as depression, often leads to inactivity and isolation, which reinforces feelings of sadness and worthlessness. By taking small, intentional steps toward re-engaging in life, behavioural activation helps break this cycle and boosts both motivation and mood."
        ]),
        "images": JSON.stringify([
            "/images/behavioural-activation-card.jpg",
            "/images/forest.jpg"
        ]),
        "steps": JSON.stringify([
            "Identify a small, enjoyable activity (e.g., walking, reading).",
            "Schedule time to do this activity, even if you don’t feel like it.",
            "Gradually increase the frequency of activities that improve your mood."
        ]),
        "benefits": JSON.stringify([
            "Reduces symptoms of depression",
            "Increases motivation and energy",
            "Encourages engagement with life",
            "Boosts overall well-being"
        ]),
        "resources": JSON.stringify([
            {
                "title": "Behavioural Activation for Depression",
                "link": "https://www.nice.org.uk/guidance/cg90"
            },
            {
                "title": "How to Use Behavioural Activation",
                "link": "https://www.psychologytoday.com/us/basics/behavioral-activation"
            },
            {
                "title": "Behavioural Activation Worksheets",
                "link": "https://www.getselfhelp.co.uk/docs/BehaviouralActivation.pdf"
            }
        ])
    },
    {
        "id": 7,
        "name": "Distress Tolerance",
        "short_description": "Cope with emotional pain using specific techniques.",
        "descriptions": JSON.stringify([
            "Distress tolerance involves learning to survive and cope with painful emotions in the short term without making the situation worse. It is especially helpful during times of crisis or extreme emotional distress.",
            "Instead of trying to eliminate the pain, distress tolerance skills focus on getting through the moment. Techniques may include distraction, self-soothing, or using acronyms like 'TIPP' (Temperature, Intense exercise, Paced breathing, and Progressive muscle relaxation) to help manage overwhelming emotions. Distress tolerance is a key part of Dialectical Behavior Therapy (DBT) and helps individuals prevent impulsive, harmful reactions."
        ]),
        "images": JSON.stringify([
            "/images/distress-tolerance-card.jpg",
            "/images/water-waves.jpg"
        ]),
        "steps": JSON.stringify([
            "Use distraction techniques like listening to music or doing a hobby.",
            "Practice self-soothing with comforting activities (e.g., warm bath).",
            "Try 'TIPP' skills: Temperature change, Intense exercise, Paced breathing, Progressive relaxation."
        ]),
        "benefits": JSON.stringify([
            "Provides emotional comfort and reassurance",
            "Offers practical help and resources",
            "Reduces feelings of isolation",
            "Enhances resilience and coping skills"
        ]),
        "resources": JSON.stringify([
            {
                "title": "Finding Social Support",
                "link": "https://www.mentalhealth.org.uk/publications/social-support"
            },
            {
                "title": "How to Build a Support Network",
                "link": "https://www.psychologytoday.com/us/basics/social-support"
            },
            {
                "title": "Support Groups and Resources",
                "link": "https://www.supportgroupscentral.com/"
            }
        ])
    }
];

export async function seed() {
    try {
        await db("coping_strategies").del();
        await db("coping_strategies").insert(copingStrategiesData);
        console.log("Seed data inserted successfully.");
    } catch (error) {
        console.error("Error seeding data:", error);
    };
};