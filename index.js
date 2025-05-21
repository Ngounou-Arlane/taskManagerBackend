const express = require('express'); // Don't forget to require express
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const MONGO_URI = 'mongodb+srv://otantik_nuna:demopass@cluster0.dkoyhul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const JWT_SECRET = 'MySuperSecretKey123';
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
