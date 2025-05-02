import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import AsideLeft from "../Components/AsideLeft";
import AsideRight from "../Components/AsideRight";

const Root = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto mt-4">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-12 w-11/12 mx-auto mt-10 gap-5">
        {/* Left Aside Section */}
        <aside className="col-span-3">
          <AsideLeft></AsideLeft>
        </aside>

        {/* Main Section*/}
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>

        {/* Right Aside Section*/}
        <aside className="col-span-3">
          <AsideRight></AsideRight>
        </aside>
      </main>
    </div>
  );
};

export default Root;
