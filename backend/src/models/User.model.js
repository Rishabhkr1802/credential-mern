import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a valid name"]
  },
  email: {
    type: String,
    required: [true, "Please provide a valid email"],
    unique: true, index: true
  },
  password: {
    type: String,
    required: [true, "Please provide a valid password"]
  }
}, { timestamp: true });

const User = mongoose.model("User", UserSchema);

export default User;