import React from 'react';
import Bookmark from './Bookmark';
import PropTypes from 'prop-types'
const Bookmarks = ({ bookmarks, readtime }) => {
  //   console.log(bookmarks);
  return (
    <div className="md:w-1/3">
      <div className="p-6">
       <div className='text-blue-800 border p-6 text-center font-black bg-blue-300'>
        <h2>Spent on time to read: {readtime}</h2>
       </div>
        <h1 className="text-[24px] text-black mt-2 text-[700]">
          Bookmarked: {bookmarks.length}
        </h1>
      </div>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark
          key={idx}
          bookmark={bookmark}
        ></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.prototype = {
    bookmarks : PropTypes.array
}
export default Bookmarks;