import React from 'react';

const Bookmark = ({ bookmark }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 m-3 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end">
        
          </div>
          <p className='text-xl text-black font-black'>{bookmark.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;