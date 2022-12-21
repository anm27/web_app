import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../sanity";
import ServiceCard from "./ServiceCard";

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
      .then((service) => {
        setServices(service);
      });
  }, []);

  // console.log(services);

  return (
    <div className="shadow">
      <div className="mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Services
        </h2>
        <div className="flex-row lg:flex md:block sm:block gap-x-6 space-y-0">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              id={service._id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
