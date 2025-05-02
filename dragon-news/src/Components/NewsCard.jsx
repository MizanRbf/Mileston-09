import React from "react";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  const { title, author, thumbnail_url, details } = singleNews;
  return (
    <div className="border border-base-300 mb-4 space-y-4 pb-4">
      {/* author */}
      <div className="flex justify-between bg-base-200 p-4 items-center">
        <div className="flex gap-2">
          <img className="w-[50px] rounded-full " src={author.img} alt="" />
          <div>
            <p className="font-bold">{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <CiBookmark size={25} />
          <IoShareSocialOutline size={25} />
        </div>
      </div>
      {/* News */}
      <div className="px-4 space-y-4">
        <h1>{title}</h1>
        <img className="rounded-lg" src={thumbnail_url} alt="" />
        <p>{details}</p>
        <button className="text-amber-500 font-bold text-lg">Read More</button>
        <hr className="border-base-300" />
        {/* Rating */}
        <div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
