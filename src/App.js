import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import Layout from './components/Layout';
import { Home, Blog, Pathways, Login } from './pages/index';
import {
  blogFeaturedImg,
  blogImage1,
  blogImage2,
  blogImage3,
  blogImage4,
  blogImage5,
} from './assets/';

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
      imgSrc: blogImage5,
      title: 'Coloring Books Trigonometry',
      author: 'Marcus Colson',
      dateTime: 'March 30, 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, quia iusto, pariatur delectus perspiciatis temporibus id maxime cum necessitatibus minus? Sit quod nostrum in laborum consequatur nisi dicta tempora.',
    },
    {
      id: 2,
      imgSrc: blogImage4,
      title: 'brainWave Benny',
      author: 'Benny Thomas',
      dateTime: 'March 30, 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, quia iusto, pariatur delectus perspiciatis temporibus id maxime cum necessitatibus minus? Sit quod nostrum in laborum consequatur nisi dicta tempora.',
    },
    {
      id: 3,
      imgSrc: blogImage5,
      title: 'How Gears of War Taught Me Calculus',
      author: 'Milton',
      dateTime: 'March 30, 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, quia iusto, pariatur delectus perspiciatis temporibus id maxime cum necessitatibus minus? Sit quod nostrum in laborum consequatur nisi dicta tempora.',
    },
    {
      id: 4,
      imgSrc: blogImage4,
      title: 'Morpheus Technique',
      author: 'Mr. Anderson',
      dateTime: 'April 1, 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, quia iusto, pariatur delectus perspiciatis temporibus id maxime cum necessitatibus minus? Sit quod nostrum in laborum consequatur nisi dicta tempora.',
    },
    {
      id: 5,
      imgSrc: blogImage3,
      title: 'Lo-fi Coffee Study',
      author: 'Lo-fi Ry',
      dateTime: 'April 1, 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, quia iusto, pariatur delectus perspiciatis temporibus id maxime cum necessitatibus minus? Sit quod nostrum in laborum consequatur nisi dicta tempora.',
    },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog posts={posts} />} />
        <Route path="/:postID" element={<BlogPost post={posts} />} />
        <Route path="/pathways" element={<Pathways />}>
          <Route path="/pathways/:category" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
