import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  // Loading Data
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <section id="book-ride" className="mt-5 container">
      <h5 className="text-center fw-bolder">What We Do</h5>
      <h1 className="text-center fw-bolder">
        Our <span style={{ color: "#1eb0ba" }}>Services</span>
      </h1>
      <p className="text-center mb-4">
        To contribute to positive change and achieve our <br /> sustainability
        goals with many extraordinary
      </p>

      {/* render vehicles from server side */}
      <div className="row">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          ></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
