import User from "../models/user.model.js";

export async function getUserByEmailDao(email) {
  if (!email) return;
  try {
    const user = User.findOne({ email });
    return user;

  } catch (error) {
    console.log(error);
  }
}