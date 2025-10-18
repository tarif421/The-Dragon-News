import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <section className="left-nav"></section>
        <section className="main-nav">
          <Outlet></Outlet>
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
