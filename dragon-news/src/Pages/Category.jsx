import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";
// import { SiGnome } from "react-icons/si";

const Category = () => {
  const { id } = useParams();
  const categoryData = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == 0) {
      setCategoryNews(categoryData);
      return;
    } else if (id == 1) {
      const breakingNews = categoryData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(breakingNews);
    } else {
      const filteredNews = categoryData.filter(
        (news) => news.category_id == id
      );
      setCategoryNews(filteredNews);
    }
  }, [categoryData, id]);

  return (
    <div>
      <h3 className="mb-4">Dragon News Home</h3>

      <div>
        {categoryNews.map((singleNews) => (
          <NewsCard singleNews={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
