// import dependencies
import express from "express";
import cors from "cors";
import "dotenv/config";

// import routers
import moodsRoute from "./routes/moods.js";
import educationalResourcesRoute from "./routes/educationalResources.js";
import copingStrategiesRoute from "./routes/copingStrategies.js";
import usersRoute from "./routes/users.js";
import favoritesRoute from "./routes/favorites.js";

// instantiate express
const app = express();

// import environment variables
const { PORT, CORS_ORIGIN } = process.env;

const port = PORT || 8080;

app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true,
    methods: "GET,POST,PUT,DELETE"
}));

// parses JSON bodies
app.use(express.json());

app.use("/images", express.static("public/images"));

app.use("/api/moods", moodsRoute);
app.use("/api/educational-resources", educationalResourcesRoute);
app.use("/api/coping-strategies", copingStrategiesRoute);
app.use("/api/users", usersRoute);
app.use("/api/favorites", favoritesRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});