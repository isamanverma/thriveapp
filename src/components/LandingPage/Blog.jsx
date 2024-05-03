import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, excerpt, imageUrl }) => (
  <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-md">
    <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p className="mb-4 text-gray-700">{excerpt}</p>
      <Link
        to="#"
        className="inline-flex items-center rounded-lg bg-green-100 px-3 py-2 text-center text-sm font-medium text-green-500 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Read More
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

export default BlogCard;
