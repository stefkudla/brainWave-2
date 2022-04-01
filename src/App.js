import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import BlogPostCard from './components/BlogPostCard';
import Layout from './components/Layout';
import Blog from './pages/blog/Blog';
import Home from './pages/Home';
import Pathways from './pages/Pathways';
import blogFeaturedImg from './assets/blog-hero.jpg';
import blogImage1 from './assets/blog-image-1.jpg';
import blogImage2 from './assets/blog-image-2.jpg';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 0,
      imgSrc: blogFeaturedImg,
      title: 'How Learning Can Actually Be Fun',
      author: 'Stefan Kudla',
      dateTime: 'March 29, 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, quia iusto, pariatur delectus perspiciatis temporibus id maxime cum necessitatibus minus? Sit quod nostrum in laborum consequatur nisi dicta tempora.',
    },
    {
      id: 1,
      imgSrc: blogImage1,
      title: 'Coloring Books Trigonometry',
      author: 'Marcus Colson',
      dateTime: 'March 30, 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, quia iusto, pariatur delectus perspiciatis temporibus id maxime cum necessitatibus minus? Sit quod nostrum in laborum consequatur nisi dicta tempora.',
    },
    {
      id: 2,
      imgSrc: blogImage2,
      title: 'brainWave Benny',
      author: 'Benny Thomas',
      dateTime: 'March 30, 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, quia iusto, pariatur delectus perspiciatis temporibus id maxime cum necessitatibus minus? Sit quod nostrum in laborum consequatur nisi dicta tempora.',
    },
    {
      id: 3,
      imgSrc: blogImage1,
      title: 'How Gears of War Taught Me Calculus',
      author: 'Milton',
      dateTime: 'March 30, 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, quia iusto, pariatur delectus perspiciatis temporibus id maxime cum necessitatibus minus? Sit quod nostrum in laborum consequatur nisi dicta tempora.',
    },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog posts={posts} />} />
        <Route path="/:postID" element={<BlogPost post={posts} />} />
        <Route path="/pathways" element={<Pathways />} />
      </Route>
    </Routes>
  );
}

export default App;
