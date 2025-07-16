import jwt from "jsonwebtoken";

const default_user = {
  id: 1,
  email: "user@email.com",
  password: "strongPass123",
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = { id: 1, email };

  if (email === default_user.email && password === default_user.password) {
    const payload = { id: user.id };
    const expiration = { expiresIn: "1h" };

    const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);
    res.json({ token });
  } else {
    res.sendStatus(401).json({error: 'Sus credenciales no coinciden ....'})
  }
};
