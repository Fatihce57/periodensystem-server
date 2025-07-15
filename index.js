require('dotenv').config();
const express = require('express');
const cors = require('cors');
const postgres = require('postgres');

const app = express();
const port = 3000;

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString, {
  ssl: { rejectUnauthorized: false }
});

app.use(cors());

app.get('/elements', async (req, res) => {
  const { state, category, name } = req.query;

  let query = sql`
    SELECT * FROM elements WHERE 1=1
    ${state ? sql` AND LOWER(aggregatzustand) = ${state.toLowerCase()}` : sql``}
    ${category ? sql` AND LOWER(kategorie) = ${category.toLowerCase()}` : sql``}
    ${name ? sql` AND LOWER(name) LIKE ${'%' + name.toLowerCase() + '%'}` : sql``}
  `;

  try {
    const rows = await query;
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
