import React from "react";
import { Link } from "react-router-dom";
const meals = [
  {
    id: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTLcfSKXY6zd9vz3N4liWdVYbj8fD-SiycCOBH98x8A&s",
    title: "Scrambled Eggs with Toast",
    description: "A classic and quick breakfast option.",
  },
  {
    id: 2,
    imageUrl:
      "https://www.eatingwell.com/thmb/O2PodkmzYvGXILwCL-ieZ7NdxNs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-TheBestChickenSaladForSandwiches-beauty-192-5d0e22a11be24615af4a09c31b5c4ff0.jpg",
    title: "Chicken Salad Sandwich",
    description: "A light and healthy lunch choice.",
  },
  {
    id: 3,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/58bf61ea3a041163d873b4e8/1582871615109-W4TN17L2TH8XYCW0GC00/bakedsalmonwithvegetables.jpeg?format=750w",
    title: "Salmon with Roasted Vegetables",
    description: "A delicious and nutritious dinner idea.",
  },
];

const MealCard = ({ meal }) => (
  <div className="mx-4 mb-8 overflow-hidden  rounded-lg bg-white shadow-md">
    <img
      src={meal.imageUrl}
      alt={meal.title}
      className="h-48 w-full object-cover"
    />
    <div className="p-4">
      <h2 className="mb-2 text-xl font-bold">{meal.title}</h2>
      <p className="mb-4 text-gray-700">{meal.description}</p>
      <Link
        to="#"
        className="inline-flex items-center rounded-lg bg-green-100 px-3 py-2 text-center text-sm font-medium text-green-500 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        See Recipe
        <svg
          className="ml-2 h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </Link>
    </div>
  </div>
);

export default function MealRecommendations() {
  return (
    <>
      <h2 className="text-2xl font-bold pl-4 my-2">Meal Recommendations</h2>
      <div className="meal-recommendations scrollbar-hide gap-4 flex-wrap flex w-full overflow-x-scroll">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </>
  );
}
