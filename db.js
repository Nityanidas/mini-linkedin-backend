import pkg from 'pg';
const { Pool } = pkg;

export const db = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'linkedin_clone',
  port: process.env.DB_PORT || 5432,
  ssl: process.env.DB_SSL === 'true' // Render PostgreSQL requires SSL
});
