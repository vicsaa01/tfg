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

// Create DB schemas and models

const itemsSchema = new mongoose.Schema({
    name: String,
    info: String,
  });
const items = mongoose.model('Items', itemsSchema);

const groupsSchema = new mongoose.Schema({
  name: String,
  type: String,
});
const groups = mongoose.model('Groups', groupsSchema);

const listsSchema = new mongoose.Schema({
  name: String,
  type: String,
});
const lists = mongoose.model('Lists', listsSchema);


const discussionsSchema = new mongoose.Schema({
  title: String
});
const discussions = mongoose.model('Discussions', discussionsSchema);

const itemInSchema = new mongoose.Schema({
  item: String,
  list: String,
});
const item_in = mongoose.model('ItemIn', itemInSchema);


const usersSchema = new mongoose.Schema({
  name: String
});
const users = mongoose.model('Users', usersSchema);


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

// Routes for the Community section

app.get('/groups', async (req, res) => {
  const groupList = await groups.find().sort({members: 'desc'}).select('_id -name -logo -type -created -creator -members -items');
  res.json(groupList);
});

app.get('/lists', async (req, res) => {
  const listList = await lists.find().sort({views: 'desc'}).select('_id -name -type -created -owner -items -views');
  res.json(listList);
});

app.get('/discussions', async (req, res) => {
  group_id = req.query.group_id;
  const discussionsList = await discussions.find({group: group_id}).sort({likes: 'desc'}).select('_id -title -text -tags -created -creator -likes -group');
  res.json(discussionsList);
});

app.get('/poll-elements', async (req, res) => {
  list_id = req.query.list_id;
  const pollElementsList = await item_in.find({list: list_id}).sort({votes: 'desc'}).select('_id -item -list -votes');
  res.json(pollElementsList);
});

// Routes for the Search system

/* implement ordering and filtering */

// Routes to fetch by ID

app.get('/item', async (req, res) => {
  id = req.query.id;
  const itemList = await items.findById(id);
  res.json(itemList);
});

app.get('/group', async (req, res) => {
  id = req.query.id;
  const groupList = await groups.findById(id);
  res.json(groupList);
});

app.get('/list', async (req, res) => {
  id = req.query.id;
  const listList = await lists.findById(id);
  res.json(listList);
});

app.get('/discussion', async (req, res) => {
  id = req.query.id;
  const discussionsList = await discussions.findById(id);
  res.json(discussionsList);
});

app.get('/user', async (req, res) => {
  id = req.query.id;
  const userList = await users.findById(id);
  res.json(userList);
});