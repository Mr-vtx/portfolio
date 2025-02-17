import { useState } from "react";
import { motion } from "framer-motion"; // For animations
import { blg1, blg3, blg4 } from "../../assets/images";

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      excerpt:
        "JavaScript closures are one of the most powerful features of the language...",
      date: "Feb 16, 2025",
      image: blg3, // Add image URL
    },
    {
      id: 2,
      title: "React vs Vue: A Comprehensive Comparison",
      excerpt:
        "React and Vue are two of the most popular front-end frameworks...",
      date: "Feb 10, 2025",
      image: blg1, // Add image URL
    },
    {
      id: 3,
      title: "Tips for Building Scalable Web Apps",
      excerpt:
        "Building scalable web apps requires considering performance, code organization...",
      date: "Feb 5, 2025",
      image: blg4, // Add image URL
    },
    // Add more posts as needed
  ]);

  return (
    <section className="blog-section py-24 px-8 bg-primary-color text-text-color">
      <h2 className="text-4xl text-center mb-12 text-accent-color">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="post-card bg-secondary-color p-6 rounded-lg shadow-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4">{post.title}</h3>
            <p className="text-lg mt-4">{post.excerpt}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-400">{post.date}</span>
              <a
                href={`/blog/${post.id}`}
                className="text-accent-color hover:underline"
              >
                Read more
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination or Load More */}
      <div className="flex justify-center mt-8">
        <button className="bg-accent-color text-primary-color py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all">
          Load More
        </button>
      </div>
    </section>
  );
};

export default Blog;
