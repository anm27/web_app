import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../sanity";
import { urlFor } from "../sanity";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type=="blog"]{
            ...,
            
          }
        `
      )
      .then((data) => [setBlog(data)]);
  }, []);

  return (
    <div className="">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-12">
          <h2 className="text-2xl font-bold text-gray-900 pl-2">Blogs</h2>

          <div className="mt-6 ml-2 mr-2 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {blog.map((blog) => (
              <div
                key={blog._id}
                className="group relative p-4 border border-gray-200 shadow mb-2 bg-white"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={urlFor(blog.image).url()}
                    alt="Blog 1"
                    className="h-full w-full object-cover object-center"
                  />
                  {/* <Image
                    source={{ uri: urlFor(blog.image).url() }}
                    className="h-full w-full object-cover object-center"
                  /> */}
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  <Link to="#">
                    <span className="absolute inset-0" />
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-base text-gray-500">{blog.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
