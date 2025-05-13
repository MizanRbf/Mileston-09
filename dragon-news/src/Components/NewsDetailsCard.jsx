import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div>
      <h2>Dragon News</h2>
      <div className="border border-base-300 p-4 mt-4">
        <img src={news.thumbnail_url} alt="" />
        <h1 className="my-4">{news.title}</h1>
        <p>{news.details}</p>
        <Link
          to={`/category/${news.category_id}`}
          className="btn btn-secondary mt-4"
        >
          All news in the category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
