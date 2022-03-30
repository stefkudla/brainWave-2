import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Blog from './pages/blog/Blog';
import Home from './pages/Home';
import Pathways from './pages/Pathways';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />}></Route>
        <Route path="/pathways" element={<Pathways />} />
      </Route>
    </Routes>
  );
}

export default App;
