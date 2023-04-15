import express from "express";
import { connectToDatabase } from "./services/db.connection";
import { languagesRouter } from "./routes/languages.routes";

const app = express();
const port = 8080; // default port to listen

connectToDatabase()
    .then(() => {
        // root endpoint
        app.get("/", (req, res) => {
            res.send("Use /languages endpoint to get the data!");
        });
        // send all calls to /languages to our languagesRouter
        app.use("/languages", languagesRouter);

        // start the Express server
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
