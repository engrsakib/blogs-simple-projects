import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = ({ handlebookmark, handleTime }) => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    const blogsLoad = async () => {
      try {
        const response = await fetch("blogs.json");
        const data = await response.json();
        setblogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    blogsLoad();
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleTime={handleTime}
          handlebookmark={handlebookmark}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;