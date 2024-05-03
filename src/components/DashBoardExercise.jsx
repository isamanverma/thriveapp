import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => (
  <div className="mx-4 mb-8 overflow-hidden rounded-lg bg-white shadow-md">
    <img
      src={exercise.imageUrl}
      alt={exercise.title}
      className="h-48 w-full object-cover"
    />
    <div className="p-4">
      <h2 className="mb-2 text-xl font-bold">{exercise.title}</h2>
      <p className="mb-4 text-gray-700">{exercise.description}</p>
      <Link
        to="#"
        className="inline-flex items-center rounded-lg bg-blue-100 px-3 py-2 text-center text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        View Exercise
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

export default function ExerciseRecommendations() {
  const exercises = [
    {
      id: 1,
      imageUrl:
        "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAwOTM5MTA3NTY2NzU3MjUw/what-happens-to-your-body-if-you-do-10-pushups-every-day.jpg",
      title: "Push-ups",
      description: "A classic strength-building exercise.",
    },
    {
      id: 2,
      imageUrl:
        "https://media.foodspring.com/magazine/public/uploads/2020/11/Air-Squats-%C2%A9PeopleImages.jpg",
      title: "Squats",
      description: "A compound exercise that targets the lower body.",
    },
    {
      id: 3,
      imageUrl:
        "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2017/04/burpee-1109.jpg?w=1300&h=731&crop=1&quality=86&strip=all",
      title: "Burpees",
      description: "A full-body exercise that combines multiple movements.",
    },
  ];

  return (
    <>
      <h2 className="my-2 pl-4 text-2xl font-bold">Exercise Recommendations</h2>
      <div className="exercise-recommendations scrollbar-hide flex gap-4 overflow-x-scroll">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </>
  );
}
