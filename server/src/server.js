// import dependencies
import express from "express";
import cors from "cors";
import "dotenv/config";

// import router

// instantiate express
const app = express();

// import environment variables
const { PORT, CORS_ORIGIN } = process.env;
const port = PORT || 8080;

app.use(cors({ origin: CORS_ORIGIN }))

app.get("/", (req, res) => {
    res.send("Get works!");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});