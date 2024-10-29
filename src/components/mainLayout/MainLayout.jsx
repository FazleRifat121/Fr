import React from "react";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 w-screen h-screen"></div>
      <div className=" absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  "></div>
      <div className="container mx-auto px-8 my-5">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default MainLayout;
