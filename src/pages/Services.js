// const services = [
//   {
//     id: 1,
//     name: "Blog Writing Services",
//     href: "#",
//     imageSrc: "https://cdn-icons-png.flaticon.com/512/2274/2274298.png",
//     imageAlt: "Front of men's Basic Tee in black.",
//     quote: "Get Quote",
//     color: "Black",
//   },
//   // More services...
// ];

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../sanity";
import { urlFor } from "../sanity";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type=="service"]{
  
      ...,
      
    }
    `
      )
      .then((service) => [setServices(service)]);
  }, []);

  // console.log(services);

  return (
    <div className="shadow">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Services
        </h2>

        <Link
          to="/service"
          className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {services.map((service) => (
            <div
              key={service._id}
              className="group relative border border-gray-100 p-2 shadow bg-white w-96"
            >
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={urlFor(service.image).url()}
                  alt={service.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex-row justify-between">
                <div className="mb-2">
                  <h2 className="pb-2 font-bold text-xl">{service.title}</h2>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {service.description}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{service.color}</p> */}
                </div>
                <button className="text-sm px-4 py-2 mt-2 border border-gray-300 bg-blue-500 font-medium text-white">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
}
