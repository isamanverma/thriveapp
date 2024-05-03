import React from "react";
import { IoMdTrophy } from "react-icons/io";

const Benefits = () => {
  return (
    <section className="benefits py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Thrive: Your Journey to a Healthier You
        </h2>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
          <div className="benefit-step flex flex-col items-start justify-center">
            <span className="arrow-right mr-4  text-5xl text-green-500 md:text-6xl">
              ➜
            </span>
            <h3 className="mb-2 text-2xl font-bold">Eat Healthier</h3>
            <p className="text-gray-700">
              Discover delicious recipes, explore nutritious options, and make
              informed choices about the food you eat. Learn healthy habits that
              empower you to fuel your body with goodness.
            </p>
          </div>
          <div className="benefit-step items-left flex flex-col justify-center">
            <span className="arrow-right mr-4  text-5xl text-green-500 md:text-6xl">
              ➜
            </span>
            <h3 className="mb-2 text-2xl font-bold">Move More</h3>
            <p className="text-gray-700">
              Find workouts you enjoy, stay motivated with personalized plans,
              and reach your fitness goals. Feel the energizing power of
              movement and celebrate your progress.
            </p>
          </div>
          <div className="benefit-step flex flex-col items-start justify-center">
            <span className="arrow-right mr-4  text-5xl text-green-500 md:text-6xl">
              <IoMdTrophy />
            </span>

            <h3 className="mb-2 text-2xl font-bold">Feel Your Best</h3>
            <p className="text-gray-700">
              Experience increased energy, improved sleep, and a healthier, more
              vibrant you. Thrive empowers you to take control of your
              well-being and unlock your full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
