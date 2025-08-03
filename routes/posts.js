import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.post('/create', (req, res) => {
  const { userId, content } = req.body;
  const sql = "INSERT INTO posts (user_id, content) VALUES (?, ?)";
  db.query(sql, [userId, content], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json({ message: 'Post created' });
  });
});

router.get('/', (req, res) => {
  const sql = `
    SELECT posts.*, users.name 
    FROM posts 
    JOIN users ON posts.user_id = users.id 
    ORDER BY posts.created_at DESC`;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result);
  });
});

router.get('/user/:id', (req, res) => {
  const sql = `
    SELECT * FROM posts 
    WHERE user_id = ? 
    ORDER BY created_at DESC`;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result);
  });
});

export default router;
