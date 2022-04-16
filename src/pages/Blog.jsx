import React from 'react';
import PostList from '../components/PostList';

const Blog = ({ posts }) => {
    return (
        <div className="container mx-auto px-2">
            <h1 className="text-3xl sm:text-5xl text-primary sm:mt-4 ">
                brainBlog
            </h1>
            <PostList posts={posts} />
        </div>
    );
};

export default Blog;
