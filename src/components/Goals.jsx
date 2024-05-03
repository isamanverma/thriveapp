// water intake tracker
// recommended steps
// weight tracker
import React from "react";
import WaterTracker from "./UI/WaterTracker";
import StepTracker from "./UI/StepTracker";

export default function Goals() {
  return (
    <div className="h-screen">
      <h1 className="text-4xl font-bold">Goals</h1>
      <p>
        Welcome to Thrive! On this page, you can set and track your health and
        fitness goals to help you reach your full potential. Whether you're
        looking to improve your hydration, increase your physical activity, or
        achieve a healthier weight, we've got you covered.
      </p>
      <div className="flex flex-col gap-4 py-10 md:flex-row">
        <WaterTracker />
        <StepTracker />
      </div>
    </div>
  );
}
