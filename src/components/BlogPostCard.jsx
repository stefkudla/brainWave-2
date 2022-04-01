import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';

const BlogPostCard = ({ post }) => {
  const formatSlug = (title) => title.toLowerCase().replace(/ /g, '-');

  return (
    <div>
      <div className="container flex flex-col gap-y-2 max-w-sm">
        <img src={post.imgSrc} className="max-w-xs" />
        <p className="text-xs text-primary">{post.dateTime}</p>
        <Link
          to={`/${formatSlug(post.title)}`}
          className="font-medium text-lg cursor-pointer hover:opacity-60 transition-all w-fit">
          {post.title}
        </Link>
        <p className="text-md text-primary pr-16">{post.body}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;

// post.title.toLowerCase().replace(/ /g, '-')
