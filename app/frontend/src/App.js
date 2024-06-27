import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages";
import Community from "./pages/community";
import CreateGroup from "./pages/create-group";
import CreateList from "./pages/create-list";
import Discussion from "./pages/discussion";
import Music from "./pages/music";
import Games from "./pages/games";
import Movies from "./pages/movies";
import TV from "./pages/tv";
import Books from "./pages/books";
import Group from "./pages/group";
import Item from "./pages/item";
import List from "./pages/list";
import Login from "./pages/login";
import Search from './pages/search';
import UserEdit from "./pages/user-edit";
import User from "./pages/user";
import Footer from "./components/Footer";

const App = () => {
  /* const [items, setItems] = useState([]);
  useEffect(() => {
    // Fetch data from the Express server
    axios.get('http://localhost:8000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []); */
  return (
    <Router>
        <body class="h-100">
            <div class="container-fluid h-100 d-flex flex-column">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/create-group" element={<CreateGroup />} />
                    <Route path="/create-list" element={<CreateList />} />
                    <Route path="/discussion" element={<Discussion />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tv" element={<TV />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/group" element={<Group />} />
                    <Route path="/item" element={<Item />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/user-edit" element={<UserEdit />} />
                    <Route path="/user" element={<User />} />
                </Routes>
                <Footer />
            </div>
        </body>
    </Router>
  );
};

export default App;