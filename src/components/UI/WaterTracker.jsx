import React, { useState } from "react";

const WaterTracker = () => {
  const [amount, setAmount] = useState(0);
  const [goal, setGoal] = useState(8); // Daily goal in cups

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleReset = () => {
    setAmount(0);
  };

  return (
    <div className="w-full rounded-md bg-gray-100 p-4 shadow-md md:w-1/3">
      <h2 className="mb-2 text-xl font-semibold">Water Tracker</h2>
      <p className="my-8">
        Stay hydrated and track your daily water intake with our Water Tracker.
        Log the number of cups or bottles of water you consume throughout the
        day and see your progress towards your daily hydration goal.
      </p>
      <div className="flex items-center gap-4">
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
          onClick={handleDecrement}
        >
          -
        </button>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{amount}</span>
          <span>Cups</span>
        </div>
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-500">Daily Goal:</span>
        <span className="text-lg font-semibold">{goal} Cups</span>
      </div>
      <button
        className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default WaterTracker;
