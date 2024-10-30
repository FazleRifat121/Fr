import img from "../../assets/my photo.png";
const Banner = () => {
  return (
    <div className="md:hero">
      <div className="max-w-[1280px] flex items-center justify-center flex-col lg:flex-row-reverse ">
        <img src={img} className="max-w-sm md:max-w-xl rounded-lg " />
        <div>
          <h1 className="text-5xl font-bold">Fazle Rifat</h1>
          <h2 className="text-3xl font-bold pt-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
            Front-End Developer
          </h2>
          <p className="py-6  ">
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
