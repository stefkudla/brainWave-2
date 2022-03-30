import React from 'react';
import { Footer } from '../../components';
import BlogHeader from '../../components/BlogHeader';
import PostList from '../../components/PostList';

const Blog = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto min-h-screen p-3">
        <h1 className="text-3xl sm:text-5xl text-primary sm:mt-4 ">
          brainBlog
        </h1>
        <BlogHeader />
        <PostList />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
