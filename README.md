![moodcompass banner](assets/images/mood-compass-banner.png)

<h1 align="center">
  <strong>MoodCompass</strong> is now live! You can check it out <a href="https://mood-compass.vercel.app">here</a>. 
</h1>

There has been a sharp decline in mental health worldwide since the COVID-19 pandemic. The increased prevalence of anxiety, depression, and stress has led to a high demand for mental health services. However, there is a well-documented shortage of such services.

Currently, there are online resources available to help users learn about their negative moods, coping strategies, and more. However, many of these apps do not allow users to save educational resources in a centralized location for easy retrieval. As a result, users often need to search for these resources repeatedly, which can be time-consuming and discouraging.

That's where **MoodCompass** comes in. MoodCompass is a safe space where individuals can learn more about their negative emotional states, as well as relevant coping strategies and therapy options to help them.

**Features include:**

<ul>
  <li> <strong>User Authentication & Authorization:</strong> Secure login and logout functionality, ensuring users can access personalized content.</li>
  <li> <strong>Favorite Resources:</strong> Users can easily mark resources as favorites and remove them from favorites at any time.</li>
  <li> <strong>Persistent Data Storage:</strong> All user data, including favorites, is stored in a database, ensuring it's available across sessions.</li>
  <li> <strong>Fully Responsive Design:</strong> The application is optimized for a seamless user experience across all devices, from desktop to mobile.</li>
</ul>

**Current Updates:**

<blockquote>
  <strong>October 10, 2024:</strong>
    <ul>
      <li> Created migration table on database and seed files for mood options</li>
      <li> Set up test endpoints for mood options</li>
      <li> Create modal for mood options selection</li>
    </ul>
</blockquote>

Finally, MoodCompass is rooted in the following values:

![moodcompass values](assets/images/mood-compass-values.png)

---

![implementation banner](assets/images/implementation-banner.png)

### Tech Stack

- React
- Node.js
- Express
- MySQL

<details>
  <summary>Client Libraries/Tools</summary>
    <ul>
      <li>SASS</li>
      <li>Material UI</li>
      <li>Axios</li>
      <li>react-router-dom</li>
      <li>react-helmet-async</li>
      <li>Firebase</li>
    </ul>
</details>

<details>
  <summary>Server Libraries/Tools</summary>
  <ul>
    <li>Express</li>
    <li>Knex</li>
    <li>Firebase</li>
  </ul>
</details>

---

### APIs

- No external APIs will be used for this. I will be making my own API.

---

### Endpoints

**To be updated.**

---

![## Nice-to-haves](assets/images/nice-to-haves-banner.png)

Below are a few things I would like to implement in the future:

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
  <summary>Google Maps (or another relevant API)</summary>

  I would love to add a page where users can input their location to find the closest mental health supports. I think this would be a great feature and make MoodCompass more of a "one-stop-shop" for mental health education and resources.
</details>

<details>
  <summary>Mood Tracker <i>(currently being worked on)</i></summary>

  A feature where users can track their mood would be useful in establishing patterns (e.g., triggers, negative thinking, protective factors, etc). Users can also share this data with their healthcare provider.

  To encourage daily use of a mood tracker, it would be beneficial to add an incentive. For example, medals or even a game! A fun game would be growing your own garden. For example, every mood a user tracks will take care of a plant in their garden.

  However, this may be a late feature due to legislation surrounding the privacy and confidentiality of patient health information. A lot of care will need to go into implementing this.
</details>