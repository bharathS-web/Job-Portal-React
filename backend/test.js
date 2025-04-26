import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';  // Import fs module to access files locally

dotenv.config(); // Load .env

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary config:");
console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API Key:", process.env.CLOUDINARY_API_KEY);
console.log("API Secret:", process.env.CLOUDINARY_API_SECRET);

// Local file path for Windows
const filePath = "C:\\Users\\sbhar\\OneDrive\\Desktop\\resum.jpeg"; // Correct file path format

// Use fs.createReadStream to read the file and upload it
fs.createReadStream(filePath)
  .pipe(cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
    if (error) {
      console.error("❌ Upload Failed:", error.message);
    } else {
      console.log("✅ Upload Success:", result.secure_url); // Print the URL of the uploaded file
    }
  }));
