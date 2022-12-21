import React from "react";
import { urlFor } from "../sanity";

const PartServiceCard = ({ title, description, image }) => {
  return (
    <div>
      <div className="lg:flex lg:flex-row sm:block  space-x-4 mt-16 p-4 px-10 border border-gray-100 shadow rounded-sm m-4">
        <div>
          <h2 className="font-bold text-xl mb-3">{title}</h2>
          <div>{description}</div>
        </div>
        <div>
          <img className="flex-1" src={urlFor(image).url()} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default PartServiceCard;
