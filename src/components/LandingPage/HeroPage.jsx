import React from "react";
import { Link } from "react-router-dom";

export default function HeroPage() {
  return (
    <>
      <section className=" mx-auto max-w-[80%] ">
        <div className="container mx-auto py-24">
          <div className="items-centers flex flex-col justify-center gap-8 md:flex-row">
            <div id="content" className=" p-4 md:max-w-[50%]">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Lorem, ipsum dolor.
              </h1>
              <p className="mb-6 text-lg md:max-w-[70%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                tempore, rerum aliquam culpa adipisci, error repudiandae
                expedita obcaecati dignissimos laboriosam quis! A quaerat ut
                quisquam fugiat, distinctio saepe voluptates vitae.
              </p>
              <div className="flex gap-4">
                <Link to="#">
                  <button
                    className="min-w-[120px] rounded border border-violet-600 bg-violet-600  px-6 py-2 text-center text-white
                 transition-all hover:scale-x-105 hover:bg-transparent hover:text-violet-600"
                  >
                    Start Journey
                  </button>
                </Link>
                <Link to="#">
                  <button
                    className="min-w-[120px] rounded border border-violet-600 px-6 py-2 text-center text-violet-600
                 transition-all hover:scale-105 hover:bg-violet-600 hover:text-white"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/src/assets/Images/Hero.svg"
                alt="hero image"
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
