import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    text: "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.",
    name: "Harriet Maxwell",
    position: "CEO at Google",
    image: "path/to/image1.jpg",
  },
  {
    text: "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.",
    name: "Carolyn Craig",
    position: "CEO at Facebook",
    image: "path/to/image2.jpg",
  },
  // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Client's Feedback About Me</h2>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="px-6">
                <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-700 mb-4">{testimonial.text}</p>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-purple-500 text-gray-700 hover:text-white rounded-full p-2 shadow-lg"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-purple-500 text-gray-700 hover:text-white rounded-full p-2 shadow-lg"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
