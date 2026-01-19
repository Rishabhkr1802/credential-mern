import mongoose from "mongoose";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MongoDB_URI);
    console.log(`MongoDB Database Connect Successfully : ${conn.connection.host}`);

  } catch (error) {
    console.log("Error occuring during database connection")
    process.exit(1);
  }
}
