import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function generatePassword(password) {
  const encryptedPassword = await bcrypt.hash(password, 10);
  return encryptedPassword;
}

export async function matchPassword(password) {
  const matchPassword = await bcrypt.compare(password, process.env.SECRET_KEY);
  return matchPassword;
}

export async function generateJWToken(params) {
  const jwt = await jwt.sign()
}