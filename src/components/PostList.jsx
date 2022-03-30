import React from 'react';
import BlogPostCard from './BlogPostCard';
import blogImage1 from '../assets/blog-image-1.jpg';
import blogImage2 from '../assets/blog-image-2.jpg';
import blogImage3 from '../assets/blog-image-3.jpg';
import blogImage4 from '../assets/blog-image-4.jpg';

const PostList = () => {
  return (
    <div>
      <div className="w-full mx-auto my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24 place-items-center">
          <BlogPostCard
            imgSrc={blogImage1}
            date="03/29/2022"
            title="Post 2"
            excerpt="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure debitis vitae sunt mollitia eaque minima adipisci obcaecati doloremque voluptatem nobis."
          />
          <BlogPostCard
            imgSrc={blogImage2}
            date="03/29/2022"
            title="Post 3"
            excerpt="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure debitis vitae sunt mollitia eaque minima adipisci obcaecati doloremque voluptatem nobis."
          />
          <BlogPostCard
            imgSrc={blogImage1}
            date="03/29/2022"
            title="Post 4"
            excerpt="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure debitis vitae sunt mollitia eaque minima adipisci obcaecati doloremque voluptatem nobis."
          />
          <BlogPostCard
            imgSrc={blogImage2}
            date="03/29/2022"
            title="Post 5"
            excerpt="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure debitis vitae sunt mollitia eaque minima adipisci obcaecati doloremque voluptatem nobis."
          />
          <BlogPostCard
            imgSrc={blogImage1}
            date="03/29/2022"
            title="Post 6"
            excerpt="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure debitis vitae sunt mollitia eaque minima adipisci obcaecati doloremque voluptatem nobis."
          />
          <BlogPostCard
            imgSrc={blogImage2}
            date="03/29/2022"
            title="Post 1"
            excerpt="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure debitis vitae sunt mollitia eaque minima adipisci obcaecati doloremque voluptatem nobis."
          />
        </div>
      </div>
    </div>
  );
};

export default PostList;
