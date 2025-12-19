import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Configuration dotenv
dotenv.config();

const app = express();

// Pour utiliser __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(app);

// Configuration CORS
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173', // Vite
  'http://127.0.0.1:3000',
];

const io = new Server(server, {
  cors: {
    origin: function(origin, callback) {
      // Permettre les requêtes sans origine (comme Postman, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `L'origine ${origin} n'est pas autorisée par CORS`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  },
  transports: ['websocket', 'polling'],
});

// Middleware
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes API
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);
});

app.post('/api/messages', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  
  // Émettre à tous les clients via Socket.io
  io.emit('new_message', {
    id: Date.now(),
    message,
    timestamp: new Date().toISOString(),
  });
  
  res.json({ success: true, message: 'Message envoyé' });
});

// Gestion des connexions Socket.io
io.on('connection', (socket) => {
  console.log(` Nouveau client connecté: ${socket.id}`);
  
  // Envoyer un message de bienvenue
  socket.emit('welcome', {
    message: 'Bienvenue sur le serveur!',
    socketId: socket.id,
    timestamp: new Date().toISOString(),
  });
  
  // Écouter les messages du client
  socket.on('chat_message', (data) => {
    console.log(` Message de ${socket.id}:`, data);
    
    // Créer un objet message avec métadonnées
    const messageObj = {
      id: Date.now(),
      socketId: socket.id,
      text: data.text,
      user: data.user || 'Anonymous',
      timestamp: new Date().toISOString(),
    };
    
    // Diffuser à tous les clients
    io.emit('chat_message', messageObj);
  });
  
  // Gestion des rooms
  socket.on('join_room', (roomName) => {
    socket.join(roomName);
    console.log(`${socket.id} a rejoint la room: ${roomName}`);
    socket.to(roomName).emit('user_joined', {
      socketId: socket.id,
      room: roomName,
    });
  });
  
  socket.on('leave_room', (roomName) => {
    socket.leave(roomName);
    console.log(`${socket.id} a quitté la room: ${roomName}`);
  });
  
  socket.on('room_message', ({ room, text, user }) => {
    const messageObj = {
      id: Date.now(),
      socketId: socket.id,
      text,
      user: user || 'Anonymous',
      room,
      timestamp: new Date().toISOString(),
    };
    
    // Envoyer uniquement aux clients dans la room
    io.to(room).emit('room_message', messageObj);
  });
  
  socket.on('disconnect', (reason) => {
    console.log(` Client déconnecté: ${socket.id} - Raison: ${reason}`);
  });
  
  socket.on('error', (error) => {
    console.error(`Socket error (${socket.id}):`, error);
  });
});

// Servir les fichiers statiques en production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(` Serveur démarré sur le port ${PORT}`);
  console.log(` Socket.io disponible sur: ws://localhost:${PORT}`);
  console.log(` Environnement: ${process.env.NODE_ENV || 'development'}`);
});