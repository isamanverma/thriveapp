import React from "react";

const KeyFeatures = () => {
  return (
    <section className="key-features bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Thrive: Your Key to a Healthier You
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="feature-card overflow-hidden rounded-lg shadow-md">
            <img
              src="/public/Images/Mealplanning.jpg"
              alt="Meal plan"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">
                Personalized Meal Plans
              </h3>
              <p className="text-gray-700">
                Get a customized meal plan based on your goals, preferences, and
                dietary needs. Focus on weight management, balanced nutrition,
                or specific dietary restrictions.
              </p>
            </div>
          </div>
          <div className="feature-card overflow-hidden rounded-lg shadow-md">
            <img
              src="/public/Images/grocerylist.jpg"
              alt="Grocery list"
              className="h-48 w-full object-top object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Smart Grocery List</h3>
              <p className="text-gray-700">
                Build your shopping list directly from your meal plan and
                eliminate unnecessary purchases. Track inventory and receive
                reminders to ensure you have what you need.
              </p>
            </div>
          </div>
          <div className="feature-card overflow-hidden rounded-lg shadow-md md:mt-10">
            <img
              src="/public/Images/workout.jpg"
              alt="Workout"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Guided Workouts</h3>
              <p className="text-gray-700">
                Find a variety of workouts tailored to your fitness level and
                goals. From beginner to advanced, strength training to yoga, we
                have something for everyone.
              </p>
            </div>
          </div>
          <div className="feature-card overflow-hidden rounded-lg shadow-md md:mt-10">
            <img
              src="public/Images/progresstracking.jpg"
              alt="Progress tracking"
              className="h-48 object-top w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Progress Tracking</h3>
              <p className="text-gray-700">
                Monitor your progress towards your health goals with easy-to-use
                tracking tools. Stay motivated by seeing your improvements in
                weight, activity levels, and overall well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
