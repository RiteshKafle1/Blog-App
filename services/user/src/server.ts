import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 4300;
const MONGO_URI=process.env.MONGO_URI
app.listen(PORT, () => {
  connectDB(MONGO_URI as string);
  console.log("Server is running at ", PORT);
});
