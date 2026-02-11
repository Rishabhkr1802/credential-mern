import { getUserByEmailDao } from "../dao/auth.dao.js";

export async function getUserByEmailService(email) {
  if (!email) return
  const checkExistingUser = await getUserByEmailDao(email);
  return checkExistingUser;
}