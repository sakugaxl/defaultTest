import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Service.scss";

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [services, setServices] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "services"]';
    const headersQuery = '*[_type == "headers"]';

    client.fetch(query).then((data) => {
      setServices(data);
    });

    client.fetch(headersQuery).then((data) => {
      setHeaders(data);
    });
  }, []);

  return (
    <>
      <h1>Our Services</h1>
      {services.length && (
        <>
          <div className="app__services-item app__flex">
            <img
              src={urlFor(services[currentIndex].imageurl)}
              alt={services[currentIndex].name}
            />
            <div className="app__services-content">
              <p className="p-text">{services[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{services[currentIndex].name}</h4>
                <h5 className="p-text">{services[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="services-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? services.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === services.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__services-headers app__flex">
        {headers.map((header) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={header._id}
          >
            <img src={urlFor(header.imgUrl)} alt={header.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Service, "app__services"),
  "service",
  "app__primarybg"
);
