import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import AsideLeft from "../Components/AsideLeft";
import AsideRight from "../Components/AsideRight";
import Loader from "../Components/Loader";

const Root = () => {
  const { state } = useNavigation();
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
        <aside className="col-span-3 sticky top-0 h-fit">
          <AsideLeft></AsideLeft>
        </aside>

        {/* Main Section*/}
        <section className="col-span-6">
          {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
        </section>

        {/* Right Aside Section*/}
        <aside className="col-span-3 sticky top-0 h-fit">
          <AsideRight></AsideRight>
        </aside>
      </main>
    </div>
  );
};

export default Root;
