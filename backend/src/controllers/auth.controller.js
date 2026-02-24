import { getUserByEmailService } from "../services/auth.service.js";
import { generatePassword, generteJWTToken } from "../utils/helper.js";
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
    res.cookie("token", token, 
      { maxAge    : 24 * 7 * 60 * 60 * 1000,
        httpOnly  : true,
        sameSite  : "strict",
        secure    : process.env.NOde_ENV === "production"
      }
    );
    return res.status(201).json({ success: true, message: "user create successfully", token });

  } catch (error) {
    console.log("Error occurs during signup controller", error);
  }
}

export async function login(req, res) {
  return 
}

export async function logout(req, res) {
  return 
}