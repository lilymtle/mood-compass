const usersData = [
  {
    id: 1,
    firebase_uid: "uid_Lily",
    name: "Lily",
    email: "lily@example.com"
  },
  {
    id: 2,
    firebase_uid: "uid_Patrick",
    name: "Patrick",
    email: "patrick@example.com"
  },
  {
    id: 3,
    firebase_uid: "uid_Bib",
    name: "Bib",
    email: "bib@example.com"
  },
  {
    id: 4,
    firebase_uid: "uid_Catrick",
    name: "Catrick",
    email: "catrick@example.com"
  },
  {
    id: 5,
    firebase_uid: "uid_Mac",
    name: "Mac",
    email: "thankyouforhelpingme@example.com"
  }
];


export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert(usersData);
};