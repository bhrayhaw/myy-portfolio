import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    text: "Elijah is a talented developer with a keen eye for design. He's a pleasure to work with and always delivers on time.",
    name: "Roberta Mawunyo Akoto",
    position: "Women Techmakers Ambassador",
    image: "/images/robbie.png",
  },
  {
    text: "Elijah's web development skills are exceptional. He's a great team player and always brings fresh ideas to the table.",
    name: "Emmanuel Appiah",
    position: "Consultant and C.T.O. & Founder (aireceive LLC)",
    image: "/images/emma.png",
  },
  // {
  //   image: "path/to/image1.jpg",
  //   text: "Elijah transformed our website into a modern, user-friendly platform. Our user engagement has significantly increased!",
  //   name: "Mr. Francis",
  //   position: "CEO at SKTLive",
  // },
];

const Testimonials: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Client's Feedback About Me</h2>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="px-6">
                <div className="bg-gray-200 p-6 shadow-lg rounded-lg flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-700 mb-4 text-center italic">
                    "{testimonial.text}"
                  </p>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.position}</p>
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
