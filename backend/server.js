require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); 
app.use(express.json());

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

const initializeDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS emails (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Tabela 'emails' verificada/criada com sucesso.");
  } catch (err) {
    console.error("Erro ao inicializar o banco de dados:", err.stack);
    process.exit(1);
  }
};

app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;
  
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Formato de e-mail inválido. Verifique por favor.' });
    }
  
    try {
      const result = await pool.query(
        'INSERT INTO emails (email) VALUES ($1) ON CONFLICT (email) DO NOTHING RETURNING *',
        [email]
      );
  
      if (result.rowCount === 0) {
          return res.status(200).json({ message: 'Este e-mail já estava na nossa lista. Tudo pronto!' });
      }
  
      console.log(`E-mail salvo: ${email}`);
      return res.status(201).json({ message: 'Perfeito! Você será notificado no lançamento. Obrigado!' });
  
    } catch (error) {
      console.error('Erro ao salvar no banco de dados:', error);
      return res.status(500).json({ message: 'Ops! Tivemos um problema aqui no servidor. Tente de novo.' });
    }
  });

app.get('/api/subscribers', async (req, res) => {
    try {
      console.log('Buscando lista de e-mails para teste...');
      const { rows } = await pool.query('SELECT id, email, created_at FROM emails ORDER BY created_at DESC');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Erro ao buscar a lista de e-mails:', error);
      res.status(500).json({ message: 'Erro interno ao buscar os dados.' });
    }
  });
  

app.listen(port, () => {
  console.log(`Servidor da API rodando na porta ${port}`);
  initializeDb();
});