import assert from "assert";
import express, { Express } from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

assert(process.env.PORT, "PORT is not defined");

const port = process.env.PORT;

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });

server.on("error", (err) => {
    console.error(err);
});

process.on("SIGINT", () => {
    server.close(() => {
        console.log("Server closed");
        process.exit(0);
    });
});

process.on("SIGTERM", () => {
    server.close(() => {
        console.log("Server closed");
        process.exit(0);
    });
});


