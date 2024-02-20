import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error in DB connection", error);
  });

const app = express();

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
