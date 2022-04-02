import React from 'react';
import blogHero from '../assets/blog-hero.jpg';

const BlogHeader = ({ post }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row my-6 gap-x-8">
        <div className="">
          <img src={blogHero} className="lg:max-w-3xl" />
        </div>
        <div className="flex flex-col items-start gap-y-2 lg:gap-y-6 mt-4 md:mt-0 mr-4">
          <p className="text-gray-400">March 20, 2022</p>
          <h2 className="text-3xl">How to Start Freelancing in 2022</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            debitis vitae sunt mollitia eaque minima adipisci obcaecati
            doloremque voluptatem nobis.
          </p>
          <a className="text-accent underline cursor-pointer hover:opacity-60 transition-all">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
