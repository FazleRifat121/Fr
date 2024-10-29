import React from "react";
import img from "../../assets/my photo.png";
const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-sm md:max-w-xl rounded-lg " />
        <div>
          <h1 className="text-5xl font-bold">Hi, I am Fazle Rifat</h1>
          <p className="py-6 container">
            Frontend Web Developer Crafting seamless and engaging web
            experiences with a passion for design and innovation. Turning ideas
            into interactive realities through clean code and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
