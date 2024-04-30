const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const url = 'mongodb://localhost:27017/tfg'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection error:', error));

// Create DB schema and model
const itemsSchema = new mongoose.Schema({
    name: String,
    info: String,
  });
const items = mongoose.model('Items', itemsSchema);

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Define routes
app.get('/items', async (req, res) => {
    const itemList = await items.find();
    res.json(itemList);
  });

