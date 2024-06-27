const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017', {
  dbName: 'tfg',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch((error) => console.error('Connection error:', error));

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


// Routes to fetch newest items

app.get('/newest-items', async (req, res) => {
  const itemList = await items.find().sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

app.get('/newest-music', async (req, res) => {
  const itemList = await items.find({type: 'música'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

app.get('/newest-games', async (req, res) => {
  const itemList = await items.find({type: 'videojuego'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

app.get('/newest-movies', async (req, res) => {
  const itemList = await items.find({type: 'película'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

app.get('/newest-tv', async (req, res) => {
  const itemList = await items.find({type: 'serie'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

app.get('/newest-books', async (req, res) => {
  const itemList = await items.find({type: 'libro'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

// Routes to fetch most popular items

app.get('/popular-items', async (req, res) => {
  const itemList = await items.find().sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

app.get('/popular-music', async (req, res) => {
  const itemList = await items.find({type: 'música'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

app.get('/popular-games', async (req, res) => {
  const itemList = await items.find({type: 'videojuego'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

app.get('/popular-movies', async (req, res) => {
  const itemList = await items.find({type: 'película'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

app.get('/popular-tv', async (req, res) => {
  const itemList = await items.find({type: 'serie'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

app.get('/popular-books', async (req, res) => {
  const itemList = await items.find({type: 'libro'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -directors -length');
  res.json(itemList);
});

// Routes to fetch by ID

app.get('/item', async (req, res) => {
  id = req.query.id;
  const itemList = await items.findById(id);
  res.json(itemList);
});