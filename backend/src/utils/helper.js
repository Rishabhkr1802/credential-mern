import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function generatePassword(password) {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);
  return encryptedPassword;
}

export async function matchPassword(password) {
  const matchPassword = await bcrypt.compare(password, process.env.SECRET_KEY);
  return matchPassword;
}

export async function generteJWTToken(user) {
  const token = await jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
    secure: true,
    xxr: "",
    css: "",
  })
  return token;
}