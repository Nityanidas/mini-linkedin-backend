import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
