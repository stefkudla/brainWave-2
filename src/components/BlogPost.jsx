import { useLocation, Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const BlogPost = ({ post }) => {
  const formatSlug = (title) => title.toLowerCase().replace(/ /g, '-');
  const currentUrl = useLocation().pathname;
  const currentPost = post.find(
    (post) => `/${formatSlug(post.title)}` == currentUrl
  );

  return (
    <article className="container max-w-4xl mx-auto px-1 sm:px-0">
      <Link to="/blog">
        <div className="mb-2 hover:text-accent hover:opacity-50 hover:translate-x-1 transition-all">
          <span className="text-xs">
            <MdArrowBack className="inline" /> Blog Home
          </span>
        </div>
      </Link>
      <p className="text-primary text-sm">{currentPost.dateTime}</p>
      <h1 className="text-3xl text-primary">{currentPost.title}</h1>
      <p className="text-primary">By: {currentPost.author}</p>
      <img src={currentPost.imgSrc} className="max-w-full md:max-w-xl my-4" />
      <p>{currentPost.body}</p>
    </article>
  );
};

export default BlogPost;
