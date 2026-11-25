const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/tracks', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tory');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Błąd bazy danych' });
  }
});

app.listen(3000, () => console.log('API on :3000'));