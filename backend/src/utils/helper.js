import bcrypt from "bcrypt";

export async function generatePassword(password) {
  const encryptedPassword = await bcrypt.hash(password, 10);
  return encryptedPassword;
}

export async function matchPassword() {
  const matchPassword = await bcrypt.compare(password, )
}