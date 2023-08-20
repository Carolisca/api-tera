import express from "express";

const app = express();

import cors from "cors";

app.use(cors());
app.use(express.json());

import db from "./config/database.js";
db.connect();

import routes from "./routes/userroutes.js";
app.use("/users", routes);


export default app;
