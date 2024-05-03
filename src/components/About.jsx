import React from "react";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";

function About() {
  return (
    <section className="bg-white">
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 px-8 py-20 md:px-0 lg:flex-row">
        <div className="mt-12 w-full lg:mt-0 lg:w-1/2">
          <img
            src="/public/Images/team.jpg"
            alt="Thrive team working on innovative solutions"
            className="h-auto w-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="mb-8 text-4xl font-bold">Who We Are and What We Do</h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-700 lg:text-xl">
            At Thrive, our mission is to empower individuals to lead healthier
            and happier lives through innovative health and wellness solutions.
            We believe in transparency, collaboration, and relentless
            innovation, and we're dedicated to revolutionizing the health and
            wellness industry.
          </p>
          <ul className="mb-8 list-disc space-y-2 pl-4">
            <li className="text-lg lg:text-xl">
              Revolutionize the way you approach health and wellness.
            </li>
            <li className="text-lg lg:text-xl">
              Break down barriers to achieving optimal well-being for everyone.
            </li>
            <li className="text-lg lg:text-xl">
              Make our products and services accessible and intuitive for all.
            </li>
          </ul>
          <a
            href="#"
            className="inline-block rounded-lg bg-green-500 px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-green-600"
          >
            Join the Movement
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default About;
