import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostCard from './BlogPostCard';

const PostList = ({ posts }) => {
  const featuredPost = posts[0];
  const mainPosts = posts.slice(1);
  console.log(featuredPost);
  const formatSlug = (title) => title.toLowerCase().replace(/ /g, '-');

  return (
    <div>
      <div className="flex flex-col md:flex-row my-6 gap-x-8">
        <div className="">
          <img
            src={featuredPost.imgSrc}
            className="lg:max-w-3xl"
            alt={featuredPost.title}
          />
        </div>
        <div className="flex flex-col items-start gap-y-2 lg:gap-y-6 mt-4 md:mt-0 mr-4">
          <p className="text-gray-400">{featuredPost.dateTime}</p>
          <Link
            to={`/${formatSlug(featuredPost.title)}`}
            className="cursor-pointer hover:opacity-60 transition-all w-fit">
            <h2 className="text-3xl">{featuredPost.title}</h2>
          </Link>
          <p>{featuredPost.body}</p>
        </div>
      </div>
      <div className="w-full mx-auto my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24 justify-center">
          {mainPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
