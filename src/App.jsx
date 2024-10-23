import { useState } from 'react'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import './App.css'
import Bookmark from './components/bookmarks/Bookmark'

function App() {
  const [bookmarks, setbookmark] = useState([]);
  const handlebookmark = (blog) =>{
    // console.log(blog);
    const newBookmark = [...bookmarks, blog];
    setbookmark(newBookmark);
  }
  // console.log(bookmarks);
  const[readtime, setreadtime] = useState(0);
  const handleTime = (reading_time, id) =>{
    // console.log(reading_time);
    setreadtime(readtime + reading_time);
    // console.log(id);
    const reamingBookmark = bookmarks.filter(Bookmark => Bookmark.id !== id);
    setbookmark(reamingBookmark);
  }
  // console.log(readtime);
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs handleTime={handleTime} handlebookmark={handlebookmark}></Blogs>
        <Bookmarks readtime={readtime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App
