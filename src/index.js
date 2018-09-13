import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './containers/Home/Home.js';
import ListaPosts from './components/ListaPosts/ListaPosts.js';
import Post from './components/Post/Post.js';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div className="wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/lista-post" component={ListaPosts} />
            <Route path="/post/:slug" component={Post} />
        </div>
    </ Router>
    , document.getElementById('root'));
registerServiceWorker();
