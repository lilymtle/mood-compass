import { db } from "../src/config/db.js";

const moodsData = [
  {
    "id": 1,
    "name": "Anxiety",
    "images": JSON.stringify([
      "/images/anxiety-card.jpg",
      "/images/blueberry-leaves.jpg",
      "/images/leaf-raindrops.jpg"
    ]),
    "short_description": "Anxiety is characterized by intense, persistent worry or fear about everyday situations. It often includes physical symptoms and can interfere significantly with daily life and well-being.",
    "descriptions": JSON.stringify([
      "Anxiety is a mental health condition that involves intense, excessive, and prolonged worry and fear about everyday situations. Individuals with anxiety often experience persistent and overwhelming feelings of apprehension, worry, or fear that may be disproportionate to the actual situation. This condition can interfere with daily functioning, relationships, and overall quality of life.",
      "Anxiety can manifest in various forms, ranging from generalized anxiety disorder to specific phobias, and may present with both psychological and physical symptoms. It's important to recognize that anxiety is not just occasional worry but a chronic condition that requires appropriate management and treatment."
    ]),
    "signs_symptoms": JSON.stringify([
      "Restlessness or feeling on edge",
      "Excessive worry or fear",
      "Rapid heartbeat",
      "Sweating",
      "Trembling or shaking",
      "Fatigue",
      "Difficulty concentrating",
      "Sleep disturbances"
    ]),
    "types": JSON.stringify([
      "Generalized Anxiety Disorder (GAD)",
      "Panic Disorder",
      "Social Anxiety Disorder",
      "Specific Phobias",
      "Obsessive-Compulsive Disorder (OCD)"
    ]),
    "causes": JSON.stringify([
      "Genetic predisposition",
      "Brain chemistry imbalances",
      "Traumatic experiences",
      "Chronic stress",
      "Certain medical conditions"
    ]),
    "treatment_options": JSON.stringify([
      "Cognitive Behavioral Therapy (CBT)",
      "Medication (e.g., SSRIs, SNRIs)",
      "Mindfulness and relaxation techniques",
      "Lifestyle changes (e.g., exercise, healthy diet)",
      "Support groups"
    ]),
    "when_to_seek_help": "If anxiety is persistent, interferes with daily activities, or causes significant distress, it is important to seek help from a mental health professional."
  },
  {
    "id": 2,
    "name": "Depression",
    "images": JSON.stringify([
      "/images/depression-card.jpg",
      "/images/jungle.jpg",
      "/images/jungle-2.jpg"
    ]),
    "short_description": "Depression is a mood disorder characterized by persistent sadness, loss of interest in activities, and a range of emotional and physical symptoms that impact daily life. It affects how a person feels, thinks, and functions.",
    "descriptions": JSON.stringify([
      "Depression, also known as major depressive disorder (MDD), is a common but serious mood disorder that affects how a person feels, thinks, and handles daily activities. It involves persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities once enjoyed.",
      "Depression can have a profound impact on a person's ability to function in various aspects of life, including work, relationships, and personal well-being. It often includes both emotional and physical symptoms and may require a combination of therapeutic approaches for effective management."
    ]),
    "signs_symptoms": JSON.stringify([
      "Persistent feelings of sadness or emptiness",
      "Loss of interest or pleasure in activities",
      "Significant changes in appetite or weight",
      "Sleep disturbances (insomnia or excessive sleeping)",
      "Fatigue or loss of energy",
      "Feelings of worthlessness or guilt",
      "Difficulty concentrating or making decisions",
      "Thoughts of death or suicide"
    ]),
    "types": JSON.stringify([
      "Major Depressive Disorder (MDD)",
      "Persistent Depressive Disorder (PDD) or Dysthymia",
      "Bipolar Disorder",
      "Seasonal Affective Disorder (SAD)",
      "Postpartum Depression"
    ]),
    "causes": JSON.stringify([
      "Genetic factors",
      "Chemical imbalances in the brain",
      "Traumatic or stressful life events",
      "Chronic medical conditions",
      "Hormonal changes",
      "Family history of depression"
    ]),
    "treatment_options": JSON.stringify([
      "Antidepressant medication",
      "Psychotherapy (e.g., Cognitive Behavioral Therapy, Interpersonal Therapy)",
      "Lifestyle changes (e.g., regular exercise, healthy diet)",
      "Support groups",
      "In some cases, electroconvulsive therapy (ECT)"
    ]),
    "when_to_seek_help": "If symptoms of depression persist for more than two weeks, interfere with daily activities, or lead to thoughts of self-harm or suicide, it is crucial to seek help from a mental health professional immediately."
  }
];

export async function seed() {
  try {
    await db("moods").del();
    await db("moods").insert(
      moodsData.map(mood => ({
        id: mood.id,
        name: mood.name,
        short_description: mood.short_description,
        descriptions: mood.descriptions,
        images: mood.images,
        signs_symptoms: mood.signs_symptoms,
        types: mood.types,
        causes: mood.causes,
        treatment_options: mood.treatment_options,
        when_to_seek_help: mood.when_to_seek_help
      }))
    );
    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  };
};