import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../sanity";

const ServiceCard = ({ id, title, description, image }) => {
  const services = {
    id,
    title,
    description,
    image,
  };
  //   console.log(services);
  return (
    <div>
      <Link
        to="/service"
        className="mt-6 ml-2 mr-2 space-y-12 "
        state={services}
        // onClick={}
      >
        <div className="group relative border border-gray-100 p-2 shadow bg-white">
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
              src={urlFor(image).url()}
              alt={title}
              className="w-full h-72 object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex-row justify-between">
            <div className="mb-2">
              <h2 className="pb-2 font-bold text-xl">{title}</h2>
              <h3 className="text-sm text-gray-700">
                <p>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {description}
                </p>
              </h3>
              {/* <p className="mt-1 text-sm text-gray-500">{service.color}</p> */}
            </div>
            <button className="text-sm px-4 py-2 mt-2 border border-gray-300 bg-blue-500 font-medium text-white">
              Get Quote
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
