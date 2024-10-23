import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setblogs] = useState([]);
    useEffect(()=>{
        const blogsLoad = async() =>{
            try {
                const response = await fetch("blogs.json");
                const data = await response.json();
                setblogs(data);
            } catch (error) {
                console.log(error);
            }
        }
        blogsLoad();
    },[])
    return (
        <div className='md:w-2/3'>
            <h1>Blogs {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;