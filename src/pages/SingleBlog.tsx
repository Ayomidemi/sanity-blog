/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import client from '../client';
import BlockContent from '@sanity/block-content-to-react';

const SingleBlog = () => {
  const [singlePost, setSinglePost] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == '${slug}'] {
    title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
   }`,
      )
      .then((data) => setSinglePost(data[0]));
    setLoading(false);
  }, [slug]);

  return (
    <div>
      {loading ? (
        <h1 className="uppercase font-bold text-3xl tracking-wide mb-5 md:text-5xl lg:text-7xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
          <h1 className="uppercase font-bold text-3xl tracking-wide mb-10 md:text-5xl lg:text-7xl text-center mt-5">
            {singlePost.title}
          </h1>

          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="blog__image rounded-t"
            />
          )}
          <p>By Pease baby</p>

          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="otddh5oh"
              dataset="production"
            />
          </div>

          <button className="mt-3">
            <Link
              to="/blog"
              className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
            >
              Read more articles
            </Link>
          </button>
        </section>
      )}
    </div>
  );
};

export default SingleBlog;
