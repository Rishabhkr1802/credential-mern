import User from "../models/User.model.js";

export async function getUserByEmailDao(email) {
  if (!email) return;
  try {
    const user = await User.findOne({email});
    return user;

  } catch (error) {
    console.log(error);
  }
}