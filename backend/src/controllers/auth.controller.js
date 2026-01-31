export async function signUp(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Invalid input" });
  }
}

export async function login(req, res) {
  return console.log("login")
}

export async function logout(req, res) {
  return console.log("logout")
}