import axios from "axios";

const API = axios.create({
baseURL: "https://drug-backend.vercel.app",
  // baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000", // Replace with your API base URL
  timeout: 10000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
