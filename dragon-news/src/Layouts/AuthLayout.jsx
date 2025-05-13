import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto mt-4">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto py-8">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
