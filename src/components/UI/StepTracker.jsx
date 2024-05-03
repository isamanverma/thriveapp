import React, { useState } from "react";

function StepsTracker() {
  const [steps, setSteps] = useState(0); // State to store current steps
  const [stepHistory, setStepHistory] = useState([]); // State to store history
  const [customStep, setCustomStep] = useState(0); // State for custom step input

  const handleStepAdd = () => {
    if (customStep > 0) {
      setSteps(steps + Number(customStep)); // Update steps by customStep value
      setStepHistory([...stepHistory, new Date().toLocaleTimeString()]); // Add timestamp to history
      setCustomStep(0); // Reset custom step input
    } else {
      alert("Please enter a valid number of steps.");
    }
  };

  const handleStepReset = () => {
    setSteps(0);
    setStepHistory([]);
  };

  const handleCustomStepChange = (event) => {
    const newStepValue = event.target.value;
    // Validate input to be a non-negative number
    if (!isNaN(newStepValue) && newStepValue >= 0) {
      setCustomStep(Number(newStepValue));
    }
  };

  return (
    <div className="steps-tracker container w-full rounded-md p-8 shadow-md md:w-2/3">
      <h2 className="mb-4 text-xl font-bold">Steps Tracker</h2>
      <p className="my-8">
        Monitor your daily physical activity and strive towards your step count
        goal with our Steps Tracker. Keep track of the number of steps you take
        each day and view your step history to track your progress over time.
      </p>
      <div className="mb-8 flex items-center justify-between">
        <div className="text-3xl font-bold">{steps}</div>
        <div className="flex items-center">
          <input
            type="number"
            placeholder="Enter Steps"
            className="mr-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            value={customStep}
            onChange={handleCustomStepChange}
          />
          <button
            className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={handleStepAdd}
          >
            Add Steps
          </button>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-bold">Step History</h3>
        <ul className=" space-y-2">
          {stepHistory.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
      <button
        className="rounded-lg bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        onClick={handleStepReset}
      >
        Reset Steps
      </button>
    </div>
  );
}

export default StepsTracker;
