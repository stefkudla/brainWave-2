import React from 'react';
import cardImage from '../assets/blog-image-1.jpg';

const BlogPost = ({ imgSrc, title, date, excerpt }) => {
  return (
    <div>
      <div className="container flex flex-col gap-y-2 max-w-sm">
        <img src={imgSrc} className="max-w-xs" />
        <p className="text-xs text-primary">{date}</p>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-primary pr-16">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogPost;
