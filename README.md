# Table of Contents

## Overview

  - [Problem](#problem)
  - [User Profile](#user-profile)
  - [Features](#features)

## Implementation

  - [Tech Stack](#tech-stack)
  - [APIs](#apis)
  - [Sitemap and Mockups](#sitemap-and-mockups)
  - [Data](#data)
  - [Endpoints](#endpoints)

## Roadmap

  - [Initial Setup](#part-1-initial-setup)
  - [Data Prep](#part-2-data-prep)
  - [Create Features](#part-3-create-features)
  - [Bug Fixes](#part-4-bug-fixes)
  - [Demo Day](#part-5-demo-day)

## Nice-to-Haves

  - [Log Out](#log-out)

# Project Title

![moodcompass banner](assets/images/mood-compass-banner.png)

**MoodCompass** is a safe space where individuals can learn more about their negative emotional states, as well as relevant coping strategies and therapy options to help them.

MoodCompass is rooted in the following values:

![moodcompass values](assets/images/mood-compass-values.png)

### <a name="problem"></a>Problem

There has been a sharp decline in mental health worldwide since the COVID-19 pandemic. The increased prevalence of anxiety, depression, and stress has led to a high demand for mental health services. However, there is a well-documented shortage of such services.

Currently, there are online resources available to help users learn about their negative moods, coping strategies, and more. However, many of these apps do not allow users to save educational resources in a centralized location for easy retrieval. As a result, users often need to search for these resources repeatedly, which can be time-consuming and discouraging.

---

### <a name="user-profile"></a> User Profile

- Individuals who want to learn more about their mood(s) or mood(s) in general.

- Individuals who want to learn about the different coping strategies and therapy options relevant to negative moods.

- Individuals who want to keep track of the different educational resources they acess on MoodCompass.

---

### <a name="features"></a> Features

As a user, I want to be able to...

- Learn about the mental and physical signs and symptoms related to my negative mood.

- Learn about the relevant coping strategies to address my negative mood.

- Save different educational resources so I can easily come back to them as needed.

---

![implementation banner](assets/images/implementation-banner.png)

### <a name="tech-stack"></a> Tech Stack

- React
- Express
- MySQL
<details>
  <summary>Client Libraries</summary>
    - react
    - react-router
    - axios
    - react-helmet-async
    - sass
    - joi
    - dayjs
    - react-redux
    - jest
</details>

<details>
  <summary>Server Libraries</summary>
    - Express.js
    - Knex.js
    - joi
    - bcryptjs for password hashing
    - jest
    - helmet
</details>

---

### <a name="apis"></a> APIs

- No external APIs will be used for this. I will be making my own API.

---

### <a name="sitemap-and-mockups"></a> Sitemap and Mockups

<details>
<summary>Home Page</summary>

![home page when not logged in mockup](assets/images/mood-compass-homepage.png)


Above is an example of the homepage when a user is not logged in. Users will be able to freely navigate the web app without having an account. However, current and future features will require users to have an account.

The homepage will consist of a welcome message, as well as a space for me to put updates (e.g., new added feature). 

I also did some visual chunking for my mockup here:

<details>
  <summary>Header Component</summary>

  - MoodCompass logo
  - Navigation bar
    - A dropdown menu with links will appear when a user hovers over "Learn"
  - Login button
    - Will look different depending on whether a user is signed in or not
</details>

<details>
  <summary>Hero Component</summary>

  - Hero image
  - MoodCompass catchline
</details>

<details>
  <summary>Footer Component</summary>

  - Connect
    - LinkedIn, GitHub
  - MoodCompass logo
</details>

<details>
  <summary>Main Body/Content</summary>

  This is where the content of each page will be rendered.
</details>

---

#### Logged in User Homepage

![home page when logged in mockup](assets/images/mood-compass-loggedin-homepage.png)

This is an example of what the homepage would look like when a user is signed in. The login button will now say **"Hi, user"**, and the **"Favorites"** link will appear. This feature is only available for users.
</details>

<details>
<summary>About Page</summary>

![about page mockup](assets/images/mood-compass-about-page.png)

This page will provide more information on MoodCompass, such as why it was created, its purpose, values, etc. I will also provide a blurb about myself as well to connect with my users.
</details>

<details>
<summary>Moods Page</summary>

![moods page mockup](assets/images/mood-compass-moods-page.png)

This page will list cards of different moods that users can click to learn more about. For this capstone, I will be working with two moods. I plan on adding more in the future.

#### Specific Mood Page Example

![anxiety information page mockup](assets/images/mood-compass-anxiety-page.png)
</details>

<details>
<summary>Learn Page</summary>

Currently there isn't a "Learn" page since it is a hoverable dropdown menu. This dropdown menu will provide links to two pages: educational resources and coping strategies.

Although not depicted in the mockups, I plan on adding a favorite button or icon on each resource page. Favoriting a resource will add it to a user's favorites list. A modal prompting user registration will be activated if a user attempts to favorite a resource without an account.

#### Educational Resources Page

![educational resources page mockup](assets/images/mood-compass-educational-resources-page.png)

This page display educational resources as cards. The educational resources will provide more information on negative emotional states, as well as health promotion education. Users can click on the card to be redirected to the resource.

##### Specific Educational Resource Page

![mind connection educational resource page mockup](assets/images/mood-compass-mind-connection-page.png)

#### Coping Strategies Page

![coping strategies page mockup](assets/images/mood-compass-coping-strategies-page.png)

This page is similar to the educational resource page, but its content differs. Here, users can click on a card to learn more about different coping strategies.

##### Specific Coping Strategies Page

![emotion regulation page mockup](assets/images/mood-compass-emotion-regulation-page.png)
</details>

<details>
<summary>Favorites Page</summary>

![favorites page mockup](assets/images/mood-compass-favorites-page.png)

This page is only accessible to users who are registered and signed it, and therefore will be conditionally rendered. 

This page provides a centralized location for users to revisit to find the list of resources they saved on their account.

Users will have the ability to unfavorite (delete) resources.
</details>

<details>
<summary>Register Page</summary>

![register page mockup](assets/images/mood-compass-register-page.png)

This is a simple page for users to register for an account. In order to register, users will have to complete the form by filling out the username, email, and password input fields.

I am currently undecided on what I want to place on the right. Below are my current ideas for that space:

- Image
- Quote
- A blurb about the features users will have access to with an account, *albeit it is not a lot at the moment...*

If I use an image or quote, I would like it to be something empowering.
</details>

<details>
<summary>Login Page</summary>

![login page mockup](assets/images/mood-compass-login-page.png)

This page will allow users to log into the web app with their username and password. Below the login button is an option for users to register for an account if they do not have one yet.

I wanted to keep the register and login page similar. However, the login page will have some kind of welcome back message to the right of the login form.
</details>

---

### <a name="data"></a> Data

![database table schema](assets/images/database-table-schema.png)

---

### <a name="endpoints"></a> Endpoints

<details>
<summary>GET</summary><br>

```GET /api/moods```
- Retrieve a list of all available moods

Response body example:
```json
[
  { "id": "1", "name": "Anxiety" },
  { "id": "2", "name": "Depression" },
  { "id": "3", "name": "Stress" }
]
```

---

```GET /api/moods/:id```

- Retrieve detailed information about a specific mood, including its educational resources and coping strategies.

- Parameters:
    - ```id``` (e.g., "1" for anxiety)

Response body example:
```json
{
  "mood": {
    "id": "1",
    "name": "Anxiety",
    "description": "Anxiety is a feeling of worry, nervousness, or unease about something with an uncertain outcome.",
    "educationalResources": [
      {
        "id": "101",
        "title": "Understanding Anxiety",
        "description": "An article explaining what anxiety is, its symptoms, and potential causes.",
        "content": "Full text of the article about understanding anxiety."
      },
      {
        "id": "102",
        "title": "Managing Anxiety",
        "description": "A guide to managing anxiety through various techniques and lifestyle changes.",
        "content": "Detailed guide on techniques to manage anxiety."
      }
    ],
    "copingStrategies": [
      {
        "id": "201",
        "strategy": "Deep Breathing Exercises",
        "description": "A technique to help calm the mind and body through controlled breathing.",
        "content": "Detailed instructions on how to perform deep breathing exercises."
      },
      {
        "id": "202",
        "strategy": "Progressive Muscle Relaxation",
        "description": "A method to reduce muscle tension and anxiety.",
        "content": "Step-by-step guide to practicing progressive muscle relaxation."
      }
    ]
  }
}
```

---

```GET /api/educational/resources```

- Retrieve a list of all educational resources available.

```json
[
  {
    "id": "101",
    "title": "Understanding Anxiety",
    "description": "An article explaining what anxiety is, its symptoms, and potential causes.",
    "content": "Full text of the article about understanding anxiety."
  },
  {
    "id": "102",
    "title": "Managing Anxiety",
    "description": "A guide to managing anxiety through various techniques and lifestyle changes.",
    "content": "Detailed guide on techniques to manage anxiety."
  }
]

```

```GET /api/educational-resources/:id```

- Retrieve detailed information about a specific educational resource.

- Parameters:
    - ```id``` (e.g., 101)

Response body example:
```json
{
  "id": "101",
  "title": "Understanding Anxiety",
  "description": "An article explaining what anxiety is, its symptoms, and potential causes.",
  "content": "Full text of the article about understanding anxiety."
}
```

---

```GET /api/coping-strategies```

- Retrieve a list of all coping strategies

Response body example:
```json
[
  {
    "id": "201",
    "strategy": "Deep Breathing Exercises",
    "description": "A technique to help calm the mind and body through controlled breathing.",
    "content": "Detailed instructions on how to perform deep breathing exercises."
  },
  {
    "id": "202",
    "strategy": "Progressive Muscle Relaxation",
    "description": "A method to reduce muscle tension and anxiety.",
    "content": "Step-by-step guide to practicing progressive muscle relaxation."
  }
]
```

--- 
```GET /api/coping-strategies/:id```

- Retrieve detailed information about a specific coping strategy.

- Parameters:
    - ```id``` (e.g., 201)

Response body example:
```json
{
  "id": "201",
  "strategy": "Deep Breathing Exercises",
  "description": "A technique to help calm the mind and body through controlled breathing.",
  "content": "Detailed instructions on how to perform deep breathing exercises."
}
```

---

```GET /api/users/:id/favorites```

- Retrieve all saved items for the user

- Parameters:
    - ```id``` (user id)

Response body example:
```json
[
  {
    "id": "101",
    "type": "educational-resource",  // or "coping-strategy"
    "title": "Understanding Anxiety",  // Relevant for educational resources
    "strategy": "Deep Breathing Exercises",  // Relevant for coping strategies
    "description": "An article explaining what anxiety is.",  // Relevant for educational resources
    "content": "Full text of the article about understanding anxiety.",  // Relevant for educational resources
    "savedAt": "2024-09-09T12:00:00Z"
  },
  {
    "id": "202",
    "type": "coping-strategy",
    "strategy": "Progressive Muscle Relaxation",
    "description": "A method to reduce muscle tension and anxiety.",
    "content": "Step-by-step guide to practicing progressive muscle relaxation.",
    "savedAt": "2024-09-10T15:30:00Z"
  }
]
```
</details>

<details>
<summary>POST</summary><br>

```POST /api/users/register```

- Create a new user account

Request body example:
```json
{
  "username": "user123",
  "email": "user@example.com",
  "password": "securepassword"
}
```

Response body example:
```json
{
  "message": "User registered successfully.",
  "user": {
    "id": "123",
    "username": "user123",
    "email": "user@example.com"
  }
}
```

---

```POST /api/users/login```

- Authenticate a user and return a token

Request body example:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

Response body example:
```json
{
  "message": "Login successful.",
  "token": "jwt-token-here",
  "user": {
    "id": "123",
    "username": "user123",
    "email": "user@example.com"
  }
}
```

---

```POST /api/users/:id/favorites```

- Saves a resource or coping strategy to the user's favorites

- Parameters:
    - ```id``` (user id)

Request body example:
```json
{
  "type": "educational-resource",  // or "coping-strategy"
  "itemId": "101"  // ID of the resource or strategy to be saved
}
```

Response body example:
```json
{
  "message": "Item saved successfully.",
  "savedItem": {
    "id": "101",
    "type": "educational-resource",  // or "coping-strategy"
    "title": "Understanding Anxiety",  // Relevant for educational resources
    "strategy": "Deep Breathing Exercises",  // Relevant for coping strategies
    "description": "An article explaining what anxiety is.",  // Relevant for educational resources
    "content": "Full text of the article about understanding anxiety."  // Relevant for educational resources
  }
}
```
</details>

<details>
  <summary>DELETE</summary><br>

```DELETE /api/users/:id/favorites/:itemId```

- Deletes a specific item from the user's favorites

- Parameters:
    - ```id``` (user id)
    - ```itemId``` (id of the item to be remvoed)

Request body example:
```json
{
  "type": "educational-resource"  // or "coping-strategy"
}
```

Response body example:
```json
{
  "message": "Item removed from favorites."
}
```
</details>

---

![## Roadmap](assets/images/roadmap-banner.png)

### <a name="part-1-initial-setup"></a> Part 1: Initial Setup

<details>
<summary>Steps</summary>

  - Create repository
    - Within the root directory is:
      - Client directory
      - Server directory
  - Create relavant folders and files in client and server directory (e.g., components, styles, controllers, middlewares, etc)
  - Delete generated Vite files and folders that will not be used
  - Implement boilerplate codes
  - Create components *(informed by visual chunking)*
  - Set up BrowserRouter and routes in client
  - Set up routes and placeholder 200 responses in server
</details>

### <a name="part-2-data-prep"></a> Part 2: Data Prep

<details>
<summary>Steps</summary>

  - Create migration tables

  ![alt text](assets/images/data-collection-plan.png)

  - Create seeds with sample data
</details>

### <a name="part-3-create-features"></a> Part 3: Create Features

<details>
  <summary>Steps</summary>
  
  - Feature: Home page

  - Feature: My Story page

  <details>
      <summary>Feature: Mood list</summary>

      - Implement moods list page
      - Create ```GET /api/moods```
  </details>

  <details>
      <summary>Feature: View mood</summary>

      - Implement view mood page
      - Create ```GET /api/moods/:id```
  </details>

  <details>
      <summary>Feature: Educational resource list</summary>

      - Implement educational resource list page
      - Create ```GET /api/educational-resources```
  </details>

  <details>
    <summary>Feature: View educational resource</summary>

      - Implement view educational resource page
      - Create ```GET /api/educational-resources/:id```
  </details>

  <details>
    <summary>Feature: View coping strategies</summary>

      - Implement view coping strategies page
      - Create ```GET /api/coping-strategies```
  </details>

  <details>
    <summary>Feature: View coping strategy</summary>

      - Implement view coping strategy page
      - Create ```GET /api/coping-strategies/:id```
  </details>

  <details>
    <summary>Feature: Create account</summary>

      - Implement register page and form
      - Create ```POST /users/register```
  </details>

  <details>
    <summary>Feature: Login</summary>

      - Implement login page + form
      - Create ```POST /users/login```
  </details>

  <details>
    <summary>Feature: Implement JWT tokens</summary>

      - Implement bryptjs for password hashing
  </details>

  <details>
    <summary>Feature: Add favorite</summary>

      - Implement function for a user to favorite a resource or coping strategy
      - Create ```POST /api/users/:id/favorites```
  </details>

  <details>
    <summary>Feature: View favorites</summary>

      - Implement a view favorites page
      - Create ```GET /api/users/:id/favorites```
  </details>

  <details>
    <summary>Feature: Delete favorite</summary>

      - Implement function for a user to delete an item from their favorites page
      - Create ```DELETE /api/users/:id/favorites/:itemId```
  </details>
</details>

### <a name="part-4-bug-fixes"></a> Step 4: Bug fixes

<details>
  <summary>Steps</summary>

    - Test web app links/navigation
    - Test web app functionality
    - Refactor and organize code
</details>

### <a name="part-5-demo-day"></a> Step 5: DEMO DAY

<details>
  <summary>Details</summary>

    Finally! Demo day! So excited. :D
</details>

![## Nice-to-haves](assets/images/nice-to-haves-banner.png)

Below are a few things I would like to implement in the future:

<a name="log-out"></a> <details>
<summary>Log Out Functionality</summary>

  It makes sense for users to be able to log out if they can log in. I am hoping to implement this during my capstone, but if not I will implement it afterwards.
</details>

<details>
  <summary>Contact Page</summary>

  Although users can connect with me via socials, it would be more convenient if there is a page with a form they can use to contact me when they have questions, feedback, etc.
</details>

<details>
  <summary>Search Functionality</summary>

  It would be great if users can search for resources available. This would be useful when more content is added. It would make things more accessible as the web app grows larger.
</details>

<details>
  <summary>Share Functionality</summary>

  Mental health education and resources should be available for <i>everyone</i>. One way to spread available education and resources is to add a share button. By clicking that, users can share it with others through things such as social media, email, etc.
</details>

<details>
  <summary>Sort Functionality</summary>

  It would be useful for users to be able to sort moods and resources (alphabetically, newest to oldest, oldest to newest, etc). I would also like to add an option for users to reorganize and sort their favorites list.
</details>

<details>
  <summary>Forgot Password</summary>

  I do not want users to *ever* lose access to their saves resources. Therefore, it would be useful to have way for them to retrieve their lost password.
</details>

<details>
  <summary>Deploy on Netlify or Heroku</summary>

  I would love to deploy my web app for others to use. However, before that, I would like to gather feedback from key stakeholders within the healthcare and mental health sector. I think it would be helpful to deploy my web app and provide them with the URL so that they can review it.
</details>

<details>
  <summary>Google Maps (or another relevant API)</summary>

  I would love to add a page where users can input their location to find the closest mental health supports. I think this would be a great feature and make MoodCompass more of a "one-stop-shop" for mental health education and resources.
</details>

<details>
  <summary>Mood Tracker</summary>

  A feature where users can track their mood would be useful in establishing patterns (e.g., triggers, negative thinking, protective factors, etc). Users can also share this data with their healthcare provider.

  To encourage daily use of a mood tracker, it would be beneficial to add an incentive. For example, medals or even a game! A fun game would be growing your own garden. For example, every mood a user tracks will take care of a plant in their garden.

  However, this may be a late feature due to legislation surrounding the privacy and confidentiality of patient health information. A lot of care will need to go into implementing this.
</details>