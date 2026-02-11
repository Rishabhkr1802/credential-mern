import express        from "express";
import dotenv         from "dotenv";
import { connectDB }  from "./db/database.config.js";
// import cookieparser   from "cookie-parser";
// import cors           from "cors";

import authRoutes     from "./routes/auth.routes.js";

dotenv.config({
  path: "./.env",
})

// app.use(cors({
//     origin: ['http://localhost:3000','http://192.168.0.104:3000'],
//     credentials: true,
// }));

const PORT  = process.env.PORT || 5000;
const app   = express();

app.use(express.json({ limit: "30kb" }));
app.use(express.urlencoded({ extended: false, limit: '20kb' }));
// app.use(express.static("uploads"));
// app.use(cookieparser());

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
  connectDB();
})