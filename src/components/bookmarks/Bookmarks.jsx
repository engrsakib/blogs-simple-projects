import React from 'react';
import Bookmark from './Bookmark';
import PropTypes from 'prop-types'
const Bookmarks = ({bookmarks}) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3">
      <div className="p-6">
        <h1 className="text-[24px] text-black text-[700]">
          Bookmarked: {bookmarks.length}
        </h1>
      </div>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.prototype = {
    bookmarks : PropTypes.array
}
export default Bookmarks;