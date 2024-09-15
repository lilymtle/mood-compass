/* this page is for a single mood and provides more 
detailed information on it */

// import styling
import "./MoodPage.scss";

// import environment variable
const baseURL = import.meta.env.VITE_API_URL;

// import hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MoodPage() {
    return (
        <main>
            <section className="mood">
                <h1 className="mood__header">
                    {selectedMood.title}
                </h1>
            </section>
        </main>
    );
};