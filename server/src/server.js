// import dependencies
import express from "express";
import cors from "cors";
import "dotenv/config";

// import routers
import moodsRoute from "./routes/moods.js";

// instantiate express
const app = express();

// import environment variables
const { PORT, CORS_ORIGIN } = process.env;
const port = PORT || 8080;

app.use(cors({ origin: CORS_ORIGIN }))

// parses JSON bodies
app.use(express.json());

app.use("/images", express.static("public/images"));


// app.get("/", (req, res) => {
//     res.send("Get works!");
// });

app.use("/api/moods", moodsRoute);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});