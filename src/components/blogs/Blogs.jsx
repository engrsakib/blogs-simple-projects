import React, { useEffect, useState } from 'react';

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
        <div>
            
        </div>
    );
};

export default Blogs;