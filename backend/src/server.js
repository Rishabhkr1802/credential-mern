import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/database.config.js";

import authRoutes from "./routes/auth.routes.js";

dotenv.config({
  path: "./.env",
})

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "30kb" }));

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
  connectDB();
})