import React from "react";
import { useLocation } from "react-router-dom";
import { urlFor } from "../sanity";

const ParticularBlog = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <div className="mt-6">
          <div>
            <img
              className="w-full h-96 object-cover object-center"
              src={urlFor(location.state.image).url()}
              alt={location.state.title}
            />
          </div>
          <div className="my-8 mx-10">
            <h2 className="font-bold text-xl mb-3">{location.state.title}</h2>
            <div>{location.state.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticularBlog;
