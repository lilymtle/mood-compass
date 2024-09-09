# Project Title

![alt text](assets/images/mood-compass-banner.png)

## Overview

**MoodCompass** is a safe space where individuals can learn more about their negative emotional states, as well as relevant coping strategies and therapy options to help them.

MoodCompass is rooted in the following values:

![alt text](assets/images/mood-compass-values.png)

### Problem

There has been a sharp decline in mental health worldwide since the COVID-19 pandemic. The increased prevalence of anxiety, depression, and stress has led to a high demand for mental health services. However, there is a well-documented shortage of such services.

Currently, there are online resources available to help users learn about their negative moods, coping strategies, and more. However, many of these apps do not allow users to save educational resources in a centralized location for easy retrieval. As a result, users often need to search for these resources repeatedly, which can be time-consuming and discouraging.

### User Profile

- Individuals who want to learn more about their mood(s) or mood(s) in general.

- Individuals who want to learn about the different coping strategies and therapy options relevant to negative moods.

- Individuals who want to keep track of the different educational resources they acess on MoodCompass.

### Features

As a user, I want to be able to...

- Learn about the mental and physical signs and symptoms related to my negative mood.

- Learn about the relevant coping strategies to address my negative mood.

- Save different educational resources so I can easily come back to them as needed.

## Implementation

### Tech Stack

#### Client:

- React
- Libraries:
    - react
    - react-router
    - axios
    - react-helmet-async
    - joi

#### Server:

- Express
- MySQL
- Libraries:
    - Express.js
    - Knex.js
    - joi

### APIs

### Sitemap

- Home page
- My Story
    - A brief introduction about myself and why I wanted to create this web application.
- Education
    - Moods:
        - Anxiety
        - Depression
        - Stress
- Resources
    - Anxiety:
        - Mindfulness
        - Relaxation techniques
        - DBT/CBT strategies
    - Depression:
        - Therapy options
        - Self-care practices
    - Stress:
        - Coping mechanisms
        - Relaxation exercises
        - Stress reduction techniques

### Mockups

### Data

### Endpoints

```GET /api/moods```

```GET /api/resources```

```GET /api/resources/{mood}```

```GET /api/resources/{id}```

```GET /api/coping-strategies/{mood}```

```GET /api/therapy-options/{mood}```

## Roadmap

---

## Nice-to-haves

- Integrate Google Maps (or another relevant API) to help users locate mental health supports within their radius.

- Ability to register and login.

- Ability for each user to track their own mood.

- Authentication/authorization implementation.
    - Either JWT or OAuth/SSO.

- Mood journal/tracker associated with each user.
    - Allows users to track their mood.
    - Helps establish a pattern that users can show their healthcare provider and/or be used to help them identify triggers and protective factors.