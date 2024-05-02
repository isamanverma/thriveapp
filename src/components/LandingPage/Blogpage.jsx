import React from "react";
import Blog from "./Blog";

export default function Blogpage() {
  return (
    <div className=" mx-auto  grid max-w-[80%] grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-4">
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
}
