import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ path: "./config/config.env" });

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 4004;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});