/* eslint-disable @typescript-eslint/no-explicit-any */
import groq from 'groq';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../client';

const BlogPage = () => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    client
      .fetch(
        groq`*[_type == 'category' ] {
      title,
      "posts": *[_type == 'post' && references(^._id)] {
        title,
      slug,
      body,
        mainImage {
          asset -> {
            id,
          url
        },
        alt
        }
      }
    }`,
      )
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);

  const imgs = posts[1]?.posts;
  const imgss = posts[0]?.posts;

  return (
    <div>
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-3xl mt-5 mb-10 tracking-widest text-center md:text-5xl lg:text-7xl">
          Blog page
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {imgs?.map((post: any) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4 className="text-xl mt-2">{post.title}</h4>
              <button className="mt-5 mb-10">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                >
                  Read Full Article{' '}
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-3xl mt-5 mb-10 tracking-widest text-center md:text-5xl lg:text-7xl">
          Podcast page
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {imgss?.map((post: any) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4 className="text-xl mt-2">{post.title}</h4>
              <button className="mt-5 mb-10">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                >
                  Read Full Article{' '}
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
