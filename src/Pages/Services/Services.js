import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="font-semibold text-3xl text-center text-orange-600">
          {" "}
          Services
        </h2>
        <h1 className=" text-center text-5xl font-bold"> Our Services Area </h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          reprehenderit
          <br></br> quam, nobis quia ad eligendi porro nulla rem recusandae
          possimus veniam similique aliquid <br></br> voluptatibus nam mollitia
          repudiandae fuga! Ab, accusamus.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3  ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
