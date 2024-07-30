import React, { useState, useEffect } from 'react';

import ErrorBoundary from "./components/ErrorBoundary"

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import NavbarEnglish from "./components/NavbarEnglish";
import Footer from "./components/Footer";

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
import List from "./pages/list-v2";
import Login from "./pages/login";
import Search from './pages/search';
import EditUser from "./pages/edit-user-v2";
import EditGroup from "./pages/edit-group";
import EditList from "./pages/edit-list";
import User from "./pages/user";
import CreateDiscussion from './pages/create-discussion';
import AddItem from './pages/add-item';
import Register from './pages/register';
import ForgotPass from './pages/forgot-pass';
import AddRecommendation from './pages/add-recommendation';
import Invites from './pages/invites';
import InviteUser from './pages/invite-user';
import JoinRequests from './pages/join-requests';
import AddToGroup from './pages/add-to-group';
import AddToList from './pages/add-to-list';

import EnHome from "./pages_en";
import EnCommunity from "./pages_en/community";
import EnCreateGroup from "./pages_en/create-group";
import EnCreateList from "./pages_en/create-list";
import EnDiscussion from "./pages_en/discussion";
import EnMusic from "./pages_en/music";
import EnGames from "./pages_en/games";
import EnMovies from "./pages_en/movies";
import EnTV from "./pages_en/tv";
import EnBooks from "./pages_en/books";
import EnGroup from "./pages_en/group";
import EnItem from "./pages_en/item";
import EnList from "./pages_en/list-v2";
import EnLogin from "./pages_en/login";
import EnSearch from './pages_en/search';
import EnEditUser from "./pages_en/edit-user-v2";
import EnEditGroup from "./pages_en/edit-group";
import EnEditList from "./pages_en/edit-list";
import EnUser from "./pages_en/user";
import EnCreateDiscussion from './pages_en/create-discussion';
import EnAddItem from './pages_en/add-item';
import EnRegister from './pages_en/register';
import EnForgotPass from './pages_en/forgot-pass';
import EnAddRecommendation from './pages_en/add-recommendation';
import EnInvites from './pages_en/invites';
import EnInviteUser from './pages_en/invite-user';
import EnJoinRequests from './pages_en/join-requests';
import EnAddToGroup from './pages_en/add-to-group';
import EnAddToList from './pages_en/add-to-list';

const App = () => {
  const [showNav, setShowNav] = useState(true);
  const [lang, setLang] = useState('es');
  return (
    <Router>
        <body class="h-100">
            <div class="container-fluid h-100 d-flex flex-column">
                {showNav && <Navbar isNavShown={showNav} lang={lang}/>}
                <Routes>
                    <Route exact path="/" element={<Home setLang={setLang} />} />
                    <Route path="/music" element={<Music setLang={setLang} />} />
                    <Route path="/games" element={<Games setLang={setLang} />} />
                    <Route path="/movies" element={<Movies setLang={setLang} />} />
                    <Route path="/tv" element={<TV setLang={setLang} />} />
                    <Route path="/books" element={<Books setLang={setLang} />} />
                    <Route path="/search" element={<Search setLang={setLang} />} />
                    <Route path="/item" element={<Item setLang={setLang} />} />
                    <Route path="/add-item" element={<AddItem setLang={setLang} />} />
                    <Route path="/add-recommendation" element={<AddRecommendation setLang={setLang} />} />
                    <Route path="/add-to-group" element={<AddToGroup setLang={setLang} />} />
                    <Route path="/add-to-list" element={<AddToList setLang={setLang} />} />

                    <Route path="/community" element={<Community setLang={setLang} />} />
                    <Route path="/group" element={<Group setLang={setLang} />} />
                    <Route path="/discussion" element={<Discussion setLang={setLang} />} />
                    <Route path="/list" element={<List setLang={setLang} />} />
                    <Route path="/create-group" element={<CreateGroup setLang={setLang} />} />
                    <Route path="/create-discussion" element={<CreateDiscussion setLang={setLang} />} />
                    <Route path="/create-list" element={<CreateList setLang={setLang} />} />
                    <Route path="/edit-group" element={<EditGroup setLang={setLang} />} />
                    <Route path="/edit-list" element={<EditList setLang={setLang} />} />
                    <Route path="/join-requests" element={<JoinRequests setLang={setLang} />} />

                    <Route path="/login" element={<Login setLang={setLang} setNav={setShowNav} />}/>
                    <Route path="/register" element={<Register setLang={setLang} setNav={setShowNav} />} />
                    <Route path="/forgot-pass" element={<ForgotPass setLang={setLang} setNav={setShowNav} />} />
                    <Route path="/user" element={<User setLang={setLang} />} />
                    <Route path="/edit-user" element={<EditUser setLang={setLang} />} />
                    <Route path="/invites" element={<Invites setLang={setLang} />} />
                    <Route path="/invite-user" element={<InviteUser setLang={setLang} />} />

                    <Route exact path="/home" element={<EnHome setLang={setLang} />} />
                    <Route path="/en/music" element={<EnMusic setLang={setLang} />} />
                    <Route path="/en/games" element={<EnGames setLang={setLang} />} />
                    <Route path="/en/movies" element={<EnMovies setLang={setLang} />} />
                    <Route path="/en/tv" element={<EnTV setLang={setLang} />} />
                    <Route path="/en/books" element={<EnBooks setLang={setLang} />} />
                    <Route path="/en/search" element={<EnSearch setLang={setLang} />} />
                    <Route path="/en/item" element={<EnItem setLang={setLang} />} />
                    <Route path="/en/add-item" element={<EnAddItem setLang={setLang} />} />
                    <Route path="/en/add-recommendation" element={<EnAddRecommendation setLang={setLang} />} />
                    <Route path="/en/add-to-group" element={<EnAddToGroup setLang={setLang} />} />
                    <Route path="/en/add-to-list" element={<EnAddToList setLang={setLang} />} />

                    <Route path="/en/community" element={<EnCommunity setLang={setLang} />} />
                    <Route path="/en/group" element={<EnGroup setLang={setLang} />} />
                    <Route path="/en/discussion" element={<EnDiscussion setLang={setLang} />} />
                    <Route path="/en/list" element={<EnList setLang={setLang} />} />
                    <Route path="/en/create-group" element={<EnCreateGroup setLang={setLang} />} />
                    <Route path="/en/create-discussion" element={<EnCreateDiscussion setLang={setLang} />} />
                    <Route path="/en/create-list" element={<EnCreateList setLang={setLang} />} />
                    <Route path="/en/edit-group" element={<EnEditGroup setLang={setLang} />} />
                    <Route path="/en/edit-list" element={<EnEditList setLang={setLang} />} />
                    <Route path="/en/join-requests" element={<EnJoinRequests setLang={setLang} />} />

                    <Route path="/en/login" element={<EnLogin setLang={setLang} setNav={setShowNav} />}/>
                    <Route path="/en/register" element={<EnRegister setLang={setLang} setNav={setShowNav} />} />
                    <Route path="/en/forgot-pass" element={<EnForgotPass setLang={setLang} setNav={setShowNav} />} />
                    <Route path="/en/user" element={<EnUser setLang={setLang} />} />
                    <Route path="/en/edit-user" element={<EnEditUser setLang={setLang} />} />
                    <Route path="/en/invites" element={<EnInvites setLang={setLang} />} />
                    <Route path="/en/invite-user" element={<EnInviteUser setLang={setLang} />} />
                </Routes>
                {showNav && <Footer />}
            </div>
        </body>
    </Router>
  );
};

export default App;