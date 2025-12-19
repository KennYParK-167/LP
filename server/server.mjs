import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Variables d'environnement
const PORT = process.env.PORT || 5000;
const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'learning_db',
  port: process.env.DB_PORT || 3306
};

// Connexion MySQL
let db;
async function connectToDatabase() {
  try {
    console.log(' Tentative de connexion MySQL...');
    db = await mysql.createConnection(DB_CONFIG);
    console.log(' MySQL connecté avec succès!');
    console.log(` Base de données: ${DB_CONFIG.database}`);
    return db;
  } catch (error) {
    console.error(' Erreur de connexion MySQL:', error.message);
    console.log(' Conseil: Vérifiez que MySQL est démarré');
    process.exit(1);
  }
}

// Route test
app.get('/', (req, res) => {
  res.json({
    project: 'Hackathon Décembre',
    version: '1.0.0',
    status: 'online',
    endpoints: ['GET /', 'GET /api/health', 'GET /api/test-db']
  });
});

// Route santé API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: db ? 'connected' : 'disconnected'
  });
});

// Test connexion DB
app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT 1 + 1 as result');
    res.json({
      database: 'MySQL',
      status: 'working',
      test: rows[0].result,
      connection: 'success'
    });
  } catch (error) {
    res.status(500).json({
      error: 'Database error',
      message: error.message
    });
  }
});

// Gestion erreurs 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.url} non trouvée`
  });
});

// Démarrage serveur
async function startServer() {
  try {
    // Connecter à la DB
    await connectToDatabase();
    
    // Démarrer serveur
    app.listen(PORT, () => {
      console.log('\n' + '='.repeat(50));
      console.log(` SERVEUR HACKATHON DÉMARRÉ`);
      console.log(` Port: ${PORT}`);
      console.log(` Fichier: server.mjs`);
      console.log(`URL: http://localhost:${PORT}`);
      console.log(`  MySQL: ${DB_CONFIG.host}:${DB_CONFIG.port}`);
      console.log('='.repeat(50) + '\n');
      
      console.log(' Endpoints disponibles:');
      console.log(`  GET http://localhost:${PORT}/`);
      console.log(`  GET http://localhost:${PORT}/api/health`);
      console.log(`  GET http://localhost:${PORT}/api/test-db`);
    });
  } catch (error) {
    console.error(' Erreur démarrage serveur:', error);
    process.exit(1);
  }
}

// Lancer l'application
startServer();