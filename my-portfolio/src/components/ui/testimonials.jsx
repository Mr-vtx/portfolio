import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { TestM1, TestM2, TestM3, TestM4 } from "../../assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    message:
      "This service exceeded my expectations! The attention to detail and quality were top-notch.",
    image: TestM1,
  },
  {
    name: "Mark Benneth",
    role: "Product Designer, Creatives Inc.",
    message:
      "Absolutely fantastic! I highly recommend it to anyone looking for quality work.",
    image: TestM2,
  },
  {
    name: "Jane Smith",
    role: "Software Engineer, DevWorks",
    message:
      "A seamless experience from start to finish. Will definitely use this service again!",
    image: TestM3,
  },
  {
    name: "David Johnson",
    role: "Software Engineer, DevWorks",
    message:
      "A seamless experience from start to finish. Will definitely use this service again!",
    image: TestM4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }, 
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }, 
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-accent mb-6">
        What People Say
      </h2>
      <Slider {...settings} className="px-2">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 bg-primary rounded-xl shadow-lg text-text mx-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                loading="lazy"
                className="w-20 h-20 rounded-full object-cover mb-4 transition-transform duration-300 hover:scale-105"
              />
              <p className="italic text-secondary mb-4">
                "{testimonial.message}"
              </p>
              <h3 className="font-semibold text-accent">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
