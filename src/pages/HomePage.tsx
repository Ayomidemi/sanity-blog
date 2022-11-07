import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center h-screen">
        <h1 className="uppercase font-bold text-3xl tracking-wide mb-5 md:text-5xl lg:text-7xl">
          Pease's Blog
        </h1>
        <button>
          <Link
            to="/blog"
            className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
          >
            Read my blog posts
          </Link>
        </button>
      </section>
    </div>
  );
};

export default HomePage;
