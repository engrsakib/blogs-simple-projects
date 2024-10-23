import { useState } from 'react'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import './App.css'

function App() {
  const [bookmarks, setbookmark] = useState([]);
  const handlebookmark = (blog) =>{
    // console.log(blog);
    const newBookmark = [...bookmarks, blog];
    setbookmark(newBookmark);
  }
  // console.log(bookmarks);
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs handlebookmark={handlebookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App
