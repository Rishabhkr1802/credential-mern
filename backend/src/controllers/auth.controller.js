import { getUserByEmailService } from "../services/auth.service";
import { generatePassword, generteJWTToken } from "../utils/helper";
import User from "../models/User.model.js";

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Invalid input" });
  }
  try {
    const existingUser = await getUserByEmailService(email);
    if (existingUser) {
      res.status(400).json({ success: false, message: "Email already exists" })
    }

    const newPassword = await generatePassword(password);
    const user = new User({
      name, email, password: newPassword
    })
    await user.save();

    const token = await generteJWTToken(user);
    res.cookie(token);
    return res.status(201).json({ success: true, message: "user create successfully", token });

  } catch (error) {
    console.log("Error occurs during signup controller", error);
  }
}

export async function login(req, res) {
  return console.log("login")
}

export async function logout(req, res) {
  return console.log("logout")
}