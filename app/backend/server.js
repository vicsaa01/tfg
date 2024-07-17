const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Define some supporting functions

// generates random ID
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}



// Connection to MongoDB

mongoose.connect('mongodb://127.0.0.1:27017', {
  dbName: 'tfg',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch((error) => console.error('Connection error:', error));



// DB schemas and models

const itemsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    info: {type: String, required: true, default: 'No hay información sobre este ítem.'},
    type: {type: String, required: true},
    genres: {type: String, required: true},
    icon: {type: String, required: true, default: 'default-item-icon.png'},
    points: {type: Number, required: true, default: 0},
    ratings: {type: Number, required: true, default: 0},
    creators: {type: String, required: true},
    producers: {type: String, required: false},
    year: {type: Number, required: true},
    country: {type: String, required: true},
    length: {type: String, required: false},
    platforms: {type: String, required: false}
  });
const items = mongoose.model('Items', itemsSchema);

const listsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  scope: {type: String, required: false},
  creator_id: {type: String, required: true},
  created_at: {type: Date, required: true, default: Date.now()},
  views: {type: Number, required: true, default: 0}
});
const lists = mongoose.model('Lists', listsSchema);

const groupsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  logo: {type: String, required: true, default: 'default-group-logo.png'},
  creator_id: {type: String, required: true},
  created_at: {type: Date, required: true, default: Date.now()},
  members: {type: Number, required: true, default: 0},
  items: {type: Number, required: true, default: 0}
});
const groups = mongoose.model('Groups', groupsSchema);

const discussionsSchema = new mongoose.Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  tags: {type: String, required: false},
  group_id: {type: String, required: true},
  creator_id: {type: String, required: true},
  created_at: {type: Date, required: true, default: Date.now()},
  likes: {type: Number, required: true, default: 0},
  dislikes: {type: Number, required: true, default: 0}
});
const discussions = mongoose.model('Discussions', discussionsSchema);

const commentsSchema = new mongoose.Schema({
  discussion: {type: String, required: false},
  item: {type: String, required: false},
  user: {type: String, required: true},
  text: {type: String, required: true},
  created_at: {type: Date, required: true, default: Date.now()},
  likes: {type: Number, required: true, default: 0},
  dislikes: {type: Number, required: true, default: 0}
});
const comments = mongoose.model('Comments', commentsSchema);

const recommendationsSchema = new mongoose.Schema({
  item: {type: String, required: true},
  recommended_item: {type: String, required: true},
  likes: {type: Number, required: true, default: 0},
  dislikes: {type: Number, required: true, default: 0}
});
const recommendations = mongoose.model('Recommendations', recommendationsSchema);

const usersSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  avatar: {type: String, required: true, default: 'default-user-avatar.png'},
  info: {type: String, required: false},
  created_at: {type: Date, required: true, default: Date.now()},
  is_admin: {type: Boolean, required: true, default: false}
});
const users = mongoose.model('Users', usersSchema);

const itemInSchema = new mongoose.Schema({
  item: String,
  list: String,
});
const item_in = mongoose.model('ItemIn', itemInSchema);



// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







// Routes to fetch newest items

app.get('/newest-items', async (req, res) => {
  const itemList = await items.find().sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  res.json(itemList);
});

app.get('/newest-music', async (req, res) => {
  const itemList = await items.find({type: 'música'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  res.json(itemList);
});

app.get('/newest-games', async (req, res) => {
  const itemList = await items.find({type: 'videojuego'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  res.json(itemList);
});

app.get('/newest-movies', async (req, res) => {
  const itemList = await items.find({type: 'película'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  res.json(itemList);
});

app.get('/newest-tv', async (req, res) => {
  const itemList = await items.find({type: 'serie'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  res.json(itemList);
});

app.get('/newest-books', async (req, res) => {
  const itemList = await items.find({type: 'libro'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  res.json(itemList);
});





// Routes to fetch most popular items

app.get('/popular-items', async (req, res) => {
  const itemList = await items.find().sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  res.json(itemList);
});

app.get('/popular-music', async (req, res) => {
  genre = req.query.genre;
  var itemList = []
  if (genre=='all'){
    itemList = await items.find({type: 'música'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  } else {
    itemList = await items.find({type: 'música', genres: genre}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  }
  res.json(itemList);
});

app.get('/popular-games', async (req, res) => {
  genre = req.query.genre;
  var itemList = []
  if (genre=='all'){
    itemList = await items.find({type: 'videojuego'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  } else {
    itemList = await items.find({type: 'videojuego', genres: genre}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  }
  res.json(itemList);
});

app.get('/popular-movies', async (req, res) => {
  genre = req.query.genre;
  var itemList = []
  if (genre=='all'){
    itemList = await items.find({type: 'película'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  } else {
    itemList = await items.find({type: 'película', genres: genre}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  }
  res.json(itemList);
});

app.get('/popular-tv', async (req, res) => {
  genre = req.query.genre;
  var itemList = []
  if (genre=='all'){
    itemList = await items.find({type: 'serie'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  } else {
    itemList = await items.find({type: 'serie', genres: genre}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  }
  res.json(itemList);
});

app.get('/popular-books', async (req, res) => {
  genre = req.query.genre;
  var itemList = []
  if (genre=='all'){
    itemList = await items.find({type: 'libro'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  } else {
    itemList = await items.find({type: 'libro', genres: genre}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  }
  res.json(itemList);
});





// Routes for the Community section

app.get('/lists', async (req, res) => {
  const listList = await lists.find().sort({views: 'desc'}).select('_id -name -type -scope -creator_id -created_at -views -__v');
  res.json(listList);
});

app.get('/poll-elements', async (req, res) => {
  list_id = req.query.list_id;
  const pollElementsList = await item_in.find({list: list_id}).sort({votes: 'desc'}).select('_id -item -list -votes -__v');
  res.json(pollElementsList);
});

app.get('/groups', async (req, res) => {
  const groupList = await groups.find().sort({members: 'desc'}).select('_id -name -type -logo -creator_id -created_at -members -items -__v');
  res.json(groupList);
});

app.get('/discussions', async (req, res) => {
  group_id = req.query.group_id;
  const discussionsList = await discussions.find({group_id: group_id}).sort({likes: 'desc'}).select('_id -title -text -tags -group_id -creator_id -created_at -likes -dislikes -__v');
  res.json(discussionsList);
});





// Comments

app.get('/popular-discussion-comments', async (req, res) => {
  discussion = req.query.discussion_id;
  const commentsList = await comments.find({discussion: discussion}).sort({likes: 'desc'}).select('_id -discussion -item -user -text -created_at -likes -dislikes -__v');
  res.json(commentsList);
});

app.get('/old-discussion-comments', async (req, res) => {
  discussion = req.query.discussion_id;
  const commentsList = await comments.find({discussion: discussion}).sort({created_at: 'asc'}).select('_id -discussion -item -user -text -created_at -likes -dislikes -__v');
  res.json(commentsList);
});

app.get('/new-discussion-comments', async (req, res) => {
  discussion = req.query.discussion_id;
  const commentsList = await comments.find({discussion: discussion}).sort({created_at: 'desc'}).select('_id -discussion -item -user -text -created_at -likes -dislikes -__v');
  res.json(commentsList);
});

app.get('/controversial-discussion-comments', async (req, res) => {
  discussion = req.query.discussion_id;
  const commentsList = await comments.find({discussion: discussion}).sort({dislikes: 'desc'}).select('_id -discussion -item -user -text -created_at -likes -dislikes -__v');
  res.json(commentsList);
});



app.get('/popular-item-comments', async (req, res) => {
  item = req.query.item_id;
  const commentsList = await comments.find({item: item}).sort({likes: 'desc'}).select('_id -discussion -item -user -text -created_at -likes -dislikes -__v');
  res.json(commentsList);
});

app.get('/old-item-comments', async (req, res) => {
  item = req.query.item_id;
  const commentsList = await comments.find({item: item}).sort({created_at: 'asc'}).select('_id -discussion -item -user -text -created_at -likes -dislikes -__v');
  res.json(commentsList);
});

app.get('/new-item-comments', async (req, res) => {
  item = req.query.item_id;
  const commentsList = await comments.find({item: item}).sort({created_at: 'desc'}).select('_id -discussion -item -user -text -created_at -likes -dislikes -__v');
  res.json(commentsList);
});

app.get('/controversial-item-comments', async (req, res) => {
  item = req.query.item_id;
  const commentsList = await comments.find({item: item}).sort({dislikes: 'desc'}).select('_id -discussion -item -user -text -created_at -likes -dislikes -__v');
  res.json(commentsList);
});



app.post('/add-discussion-comment', (req, res) => {
  insertData = {'text': req.body.text, 'discussion': req.body.discussion, 'user': req.body.user, 'created_at': Date.now()};
  const newComment = new comments(insertData);
  newComment.save();
  res.status(201).json(newComment);
})

app.post('/add-item-comment', (req, res) => {
  insertData = {'text': req.body.text, 'item': req.body.item, 'user': req.body.user, 'created_at': Date.now()};
  const newComment = new comments(insertData);
  newComment.save();
  res.status(201).json(newComment);
})





// Recommendations

app.get('/recommendations', async (req, res) => {
  item_id = req.query.item_id;
  const recommendationsList = await recommendations.find({item: item_id}).sort({likes: 'desc'}).select('_id -item -recommended_item -likes -dislikes -__v');
  res.json(recommendationsList);
});

app.post('/add-recommendation', async (req, res) => {
  const searchList = await items.find({name: req.body.name, type: req.body.type}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
  if (searchList.length > 0) {  
    const recommended_item = searchList[0]._id;
    if (recommended_item != req.body.item) {
      insertData = {'item': req.body.item, 'recommended_item': recommended_item};
      const newRecommendation = new recommendations(insertData);
      newRecommendation.save();
      res.status(201).json({message: 'Se ha añadido la recomendación', item: req.body.item});
    } else {
      res.status(401).json({message: 'El ítem recomendado no puede ser el mismo que ítem donde aparece la recomendación'});
    }
  } else {
    res.status(404).json({message: 'No se ha encontrado ningún ítem llamado ' + req.body.name + ' y de tipo ' + req.body.type});
  }
})





// Route for the Search system

app.get('/search', async (req, res) => {
  string = req.query.string;
  orderby = req.query.orderby;
  filterby = req.query.filterby;
  var searchList = [];

  switch (filterby) {
    case 'all':
      if (orderby == 'popular') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else if (orderby == 'newest') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else {
        searchList = await items.find({name: {$regex: string, $options: 'i'}}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      }
      break;

    case 'music':
      if (orderby == 'popular') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'música'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else if (orderby == 'newest') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'música'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'música'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      }
      break;

    case 'games':
      if (orderby == 'popular') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'videojuego'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else if (orderby == 'newest') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'videojuego'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'videojuego'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      }
      break;

    case 'movies':
      if (orderby == 'popular') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'película'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else if (orderby == 'newest') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'película'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'película'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      }
      break;

    case 'tv':
      if (orderby == 'popular') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'serie'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else if (orderby == 'newest') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'serie'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'serie'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      }
      break;

    case 'books':
      if (orderby == 'popular') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'libro'}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else if (orderby == 'newest') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'libro'}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else {
        searchList = await items.find({name: {$regex: string, $options: 'i'}, type: 'libro'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      }
      break;

    case 'groups':
      if (orderby == 'popular') {
        searchList = await groups.find({name: {$regex: string, $options: 'i'}}).sort({members: 'desc'}).select('_id -name -type -logo -creator_id -created_at -members -items -__v');
      } else if (orderby == 'newest') {
        searchList = await groups.find({name: {$regex: string, $options: 'i'}}).sort({created: 'desc'}).select('_id -name -type -logo -creator_id -created_at -members -items -__v');
      } else {
        searchList = await groups.find({name: {$regex: string, $options: 'i'}}).select('_id -name -type -logo -creator_id -created_at -members -items -__v');
      }
      break;

    case 'lists':
      if (orderby == 'popular') {
        searchList = await lists.find({name: {$regex: string, $options: 'i'}}).sort({views: 'desc'}).select('_id -name -type -scope -creator_id -created_at -views -__v');
      } else if (orderby == 'newest') {
        searchList = await lists.find({name: {$regex: string, $options: 'i'}}).sort({created: 'desc'}).select('_id -name -type -scope -creator_id -created_at -views -__v');
      } else {
        searchList = await lists.find({name: {$regex: string, $options: 'i'}}).select('_id -name -type -scope -creator_id -created_at -views -__v');
      }
      break;

    case 'discussions':
      if (orderby == 'popular') {
        searchList = await discussions.find({title: {$regex: string, $options: 'i'}}).sort({likes: 'desc'}).select('_id -title -text -tags -created -creator -likes -group');
      } else if (orderby == 'newest') {
        searchList = await discussions.find({title: {$regex: string, $options: 'i'}}).sort({created: 'desc'}).select('_id -title -text -tags -created -creator -likes -group');
      } else {
        searchList = await discussions.find({title: {$regex: string, $options: 'i'}}).select('_id -title -text -tags -created -creator -likes -group');
      }
      break;

    default:
      if (orderby == 'popular') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}}).sort({points: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else if (orderby == 'newest') {
        searchList = await items.find({name: {$regex: string, $options: 'i'}}).sort({year: 'desc'}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      } else {
        searchList = await items.find({name: {$regex: string, $options: 'i'}}).select('_id -name -icon -info -type -year -points -ratings -genres -platforms -studio -country -directors -length');
      }
      break;
  }
  res.json(searchList);
});





// Routes to fetch by ID

app.get('/item', async (req, res) => {
  id = req.query.id;
  const itemList = await items.findById(id);
  res.json(itemList);
});

app.get('/group', async (req, res) => {
  id = req.query.id;
  const group = await groups.findById(id);
  res.json(group);
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

app.get('/comment', async (req, res) => {
  id = req.query.id;
  const commentsList = await comments.findById(id);
  res.json(commentsList);
});

app.get('/recommendation', async (req, res) => {
  id = req.query.id;
  const recommendationsList = await recommendations.findById(id);
  res.json(recommendationsList);
});

app.get('/user', async (req, res) => {
  id = req.query.id;
  const userList = await users.findById(id);
  res.json(userList);
});





// Routes to upload forms

app.post('/create-list', (req, res) => {
  insertData = {'name': req.body.name, 'type': req.body.type, 'scope': req.body.scope, 'creator_id': req.body.creator_id, 'created_at': Date.now()};
  const newList = new lists(insertData);
  newList.save();
  res.status(201).json(newList);
})

app.post('/create-group', (req, res) => {
  insertData = {'name': req.body.name, 'type': req.body.type, 'creator_id': req.body.creator_id, 'created_at': Date.now()};
  const newGroup = new groups(insertData);
  newGroup.save();
  res.status(201).json(newGroup);
})

app.post('/create-discussion', (req, res) => {
  insertData = {'title': req.body.title, 'text': req.body.text, 'tags': req.body.tags, 'group_id': req.body.group_id, 'creator_id': req.body.creator_id, 'created_at': Date.now()};
  const newDiscussion = new discussions(insertData);
  newDiscussion.save();
  res.status(201).json(newDiscussion);
})

app.post('/add-item', (req, res) => {
  insertData = {'name': req.body.name, 'info': req.body.info, 'type': req.body.type, 'genres': req.body.genres, 'year': req.body.year, 'country': req.body.country, 'creators': req.body.creators, 'producers': req.body.creators, 'length': req.body.length, 'platforms': req.body.platforms};
  const newItem = new items(insertData);
  newItem.save();
  res.status(201).json(newItem);
})





// Routes for editing objects

app.post('/edit-list', async (req, res) => {
  id = req.query.id;
  insertData = {name: req.body.name, scope: req.body.scope};
  const result = await lists.updateOne({_id: id}, insertData);
  console.log('Modified lists: ' + result.modifiedCount);
  res.status(200).json({modified: result.modifiedCount});
})

app.post('/edit-group', async (req, res) => {
  id = req.query.id;
  insertData = {name: req.body.name, type: req.body.type};
  const result = await groups.updateOne({_id: id}, insertData);
  console.log('Modified groups: ' + result.modifiedCount);
  res.status(200).json({modified: result.modifiedCount});
})

app.post('/edit-user', async (req, res) => {
  id = req.query.id;
  insertData = {name: req.body.name, info: req.body.info};
  const result = await users.updateOne({_id: id}, insertData);
  console.log('Modified users: ' + result.modifiedCount);
  res.status(200).json({modified: result.modifiedCount});
})





// Routes to register and login users

app.post('/register', (req, res) => {
  insertData = {'name': req.body.name, 'email': req.body.email, 'password': req.body.pass, 'info': req.body.info, 'created_at': Date.now()};

  // check if username or email exists

  const newUser = new users(insertData);
  newUser.save();
  res.status(201).json(newUser);
})

app.post('/auth', async (req, res) => {
  const user = await users.find({name: req.body.name});
  if (user.length == 1) {
    if (user[0].password == req.body.pass) {
      res.status(200).json({message: 'Se ha iniciado sesión', user_id: user[0]._id, access_token: makeid(16)});
    } else {
      res.status(401).json({message: 'Contraseña incorrecta'});
    }
  } else {
    res.status(401).json({message: 'El usuario no existe'});
  }
})

app.post('/reset-pass', async (req, res) => {
  const user = await users.find({name: req.body.name});
  if (user.length == 1) {
    if (user[0].email == req.body.email) {
      res.status(200).json({message: 'Se enviará un correo para restablecer la contraseña', email: true});

      // send email

    } else {
      res.status(401).json({message: 'El correo electrónico no coincide con el del usuario', email: false});
    }
  } else {
    res.status(401).json({message: 'El usuario no existe', email: false});
  }
})