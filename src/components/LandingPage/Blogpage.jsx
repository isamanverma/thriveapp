import React from "react";
import BlogCard from "./Blog"; // Assuming blogs.jsx is in the same directory

const Blogs = ({ blogs }) => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Our Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
