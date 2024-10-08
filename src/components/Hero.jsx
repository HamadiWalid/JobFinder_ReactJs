import React from "react";

const Hero = (props) => {
  return (
    <section className="bg-black py-8 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#00ae78] sm:text-5xl md:text-6xl">
            {props.title}
          </h1>
          <p className="my-4 text-xl text-white">{props.subtitle} </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
