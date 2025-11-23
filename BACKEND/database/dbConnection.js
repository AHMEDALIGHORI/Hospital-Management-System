import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ path: "./config/config.env" });

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};