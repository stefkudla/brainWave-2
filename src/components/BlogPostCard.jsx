import React from 'react';
import { Link } from 'react-router-dom';
import { formatSlug } from '../util/Helper';

const BlogPostCard = ({ post }) => {
    return (
        <div>
            <div className="container flex flex-col max-w-sm mx-auto border border-blue-200 rounded-md">
                <div className="">
                    <img
                        src={post.imgSrc}
                        className="rounded-t-md"
                        alt={post.title}
                    />
                </div>
                <div className="p-4">
                    <p className="text-xs text-gray-400">{post.dateTime}</p>
                    <Link
                        to={`/${formatSlug(post.title)}`}
                        className="font-medium text-lg cursor-pointer hover:opacity-60 transition-all w-fit"
                    >
                        {post.title}
                    </Link>
                    <p className="text-sm text-primary pr-16 mt-2">
                        {post.body}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogPostCard;

// post.title.toLowerCase().replace(/ /g, '-')
