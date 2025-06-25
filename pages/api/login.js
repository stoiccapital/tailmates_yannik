export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email, password } = req.body;
  if (email && password) {
    return res.status(200).json({ user: { email } });
  } else {
    return res.status(400).json({ error: 'Email and password are required' });
  }
} 