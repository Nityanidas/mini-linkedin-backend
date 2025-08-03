import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.post('/register', (req, res) => {
  const { name, email, password, bio } = req.body;
  const sql = "INSERT INTO users (name, email, password, bio) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, password, bio], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json({ message: 'User registered' });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    return res.json(result[0]);
  });
});

export default router;
