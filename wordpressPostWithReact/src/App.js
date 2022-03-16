import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from "./components/Home.jsx";
import Posts from "./components/Posts.jsx";
import PostComp from './components/PostComp.jsx';


function App() {
  return (<>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/post/:id" element={<PostComp />} />
          </Routes>
      </BrowserRouter>
  </>);
}

export default App;
