import { getUserByEmailService } from "../services/auth.service";
import { generatePassword } from "../utils/helper";

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