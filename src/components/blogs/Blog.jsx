import React from "react";

const Blog = ({ blog }) => {
  const {
    cover_img,
    title,
    reading_time,
    author_name,
    author_img,
    hashTah,
    posted_date,
  } = blog;
  return (
    <div className="m-5">
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img src={cover_img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div>
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={author_img}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl font-[700] ">{author_name}</h1>
                <h2 className="text-gray-500 text-[16px] font-[600]">
                  {posted_date}
                </h2>
              </div>
            </div>
            <div>
                <h2 className="text-[20px] text-gray-500 font-[500]">{reading_time}</h2>
            </div>
          </div>
          <div>
            <h1 className="text-[40px] font-[700] text-black">{title}</h1>
          </div>
          <div className="card-actions justify-end">
            <p className="text-[20px] font-[500] text-gray-400">{hashTah}</p>
            <button className="btn text-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
