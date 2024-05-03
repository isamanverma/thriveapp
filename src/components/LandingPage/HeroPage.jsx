import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-400 py-20">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 lg:flex-row">
        <div className="mb-8 text-center lg:mb-0 lg:w-1/2 lg:text-left">
          <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl">
            Thrive: Fuel Your Health & Reach Your Full Potential
          </h1>
          <p className="mb-6 text-lg text-white">
            A personalized health and wellness app that empowers you to eat
            well, move more, and feel your best.
          </p>
          <Link
            to="/signup"
            className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-green-500 transition duration-300 hover:bg-green-600 hover:text-white"
          >
            Start Journey
          </Link>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/Images/HeroImage.svg"
            alt="hero image"
            className="w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
