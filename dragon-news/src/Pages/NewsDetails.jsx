import React, { useEffect, useState } from "react";
import AsideRight from "../Components/AsideRight";
import Header from "../Components/Header";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../Components/NewsDetailsCard";

const NewsDetails = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const [news, setNews] = useState({});

  useEffect(() => {
    const singleNews = newsData.find((singleNews) => singleNews.id == id);
    setNews(singleNews);
  }, [newsData, id]);

  return (
    <div>
      <header className="w-11/12 mx-auto mt-4">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto py-8 grid grid-cols-12 gap-10">
        <section className="col-span-9">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <section className="col-span-3">
          <AsideRight></AsideRight>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
