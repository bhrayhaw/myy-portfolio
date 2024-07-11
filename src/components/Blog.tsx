// src/components/Blog.tsx
import React from "react";

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Latest Posts From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img
              src="path/to/blog-image.jpg"
              alt="Blog Post 1"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">Blog Post 1</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img
              src="path/to/blog-image.jpg"
              alt="Blog Post 2"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">Blog Post 2</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img
              src="path/to/blog-image.jpg"
              alt="Blog Post 3"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">Blog Post 3</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
