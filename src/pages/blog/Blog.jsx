import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Footer } from '../../components';
import BlogHeader from '../../components/BlogHeader';
import PostList from '../../components/PostList';
import { blogImage1, blogImage2 } from '../../assets';
import BlogPostCard from '../../components/BlogPostCard';
import BlogPost from '../../components/BlogPost';

const Blog = ({ posts }) => {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl text-primary sm:mt-4 ">brainBlog</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Blog;
