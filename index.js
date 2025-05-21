const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const MONGO_URI='mongodb+srv://otantik_nuna:demopass@cluster0.dkoyhul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const JWT_SECRET='MySuperSecretKey123'
const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
