import { db } from "../config/db.js";

export async function handleUserData(firebaseUid, name, email) {
    const existingUser =
        await db("users").where({ firebase_uid: firebaseUid }).first();
    console.log("Existing user:", existingUser);

    if (existingUser) {
        await db("users").where({ firebase_uid: firebaseUid }).update({ name, email });
    } else {
        await db("users").insert({
            firebase_uid: firebaseUid,
            name,
            email
        });
        console.log("User inserted")
    };
};