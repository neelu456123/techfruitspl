import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
  {
    author: {
      fullName: "Saji Nair",
      picture: "https://techfruitspl.com/next-img/testimonial1.jpg",
      designation: "Head of IT / Rotomaker India Pvt. Ltd",
    },
    rating: 4.5,
    description: "Working with Techfruits has been an outstanding experience. Their team provided us with customized IT infrastructure solutions that perfectly met our needs, showcasing their expertise and professionalism every step of the way.Their exceptional customer service is second to none; they are always responsive and proactive in addressing our concerns. The reliability and performance of the solutions they provided have greatly enhanced our productivity.I highly recommend Techfruits for their top-notch IT infrastructure sales and services. Their commitment to quality and customer satisfaction is truly commendable.",
  },
  {
    author: {
      fullName: "Mr.Thirugnanam.S",
      picture: "https://techfruitspl.com/next-img/testimonial3.png",
      designation: "Managing Director/Digital Filmrestore",
    },
    rating: 4.5,
    description: "Techfruit Solutions has been the backbone of our enterprise IT Solutions support for 7+ years and still counting. They provide us end to end technology support with a wide range of hardware and software solutions. Be it centralized Storage, Software Purchase, Cyber security, Customized Workstation design, Techfruits have been out vendor over the years. They provide us industry best competitive pricing, extensive hardware support with quick turn around time during crisis management scenarios. We are very happy to be associated with Techfruits since they have got our backs round the clock all through the year",
  },
  {
    author: {
      fullName: "Bejoy Arputharaj",
      picture: "https://techfruitspl.com/next-img/testimonial2.png",
      designation: "Executive Assistant/PhantomFX ",
    },
    rating: 5,
    description: "As the CEO of PhantomFX, I can confidently attest to the exceptional services provided by TechFruit. Over the past 8+ years, their unwavering commitment to supplying top-notch hardware, software, servers, and hard drives has been instrumental in our operations. Their continuous, reliable support has been invaluable, ensuring seamless functionality without encountering any issues.TechFruit's dedication to providing the best prices, unparalleled support, and instant crisis management has surpassed our expectations. We are immensely pleased with our partnership and look forward to maintaining this fruitful association in the years to come.",
  },
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={classNames("mb-6", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating)) {
          content = <FontAwesomeIcon icon={faStar} className="text-yellow-500" />;
        } else if (rating > i && rating < index + 1) {
          content = <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />;
        } else {
          content = (
            <FontAwesomeIcon icon={faStar} className="text-yellow-200 dark:text-opacity-20" />
          );
        }
        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { author, description, rating } = testimonialList[index];

  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };

  return (
    <section className="ezy__testimonial15 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center text-center mb-6 lg:mb-12">
          <div className="max-w-lg">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
              Community Reviews
            </h2>
            <p>Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at qui.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-5xl">
            <div className="grid grid-cols-12 gap-y-6 md:gap-x-6 mt-12">
              <div className="col-span-12 md:col-span-5 lg:col-start-8 text-center lg:order-2">
                <div className="relative z-[1]">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-blue-500 to-blue-800 rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[200px] md:rounded-br-[200px] -z-[1]" />
                  <img
                    src={author.picture}
                    alt={author.fullName}
                    className="rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[200px] md:rounded-br-[200px] -translate-x-2 -translate-y-2 md:-translate-x-6 md:-translate-y-6 hover:translate-x-0 hover:translate-y-0 transition duration-300"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 ezy__testimonial15-content text-center md:text-start">
                <div className="flex flex-col justify-center h-full">
                  <Rating rating={rating} showLabel={false} />
                  <h4 className="text-2xl font-medium mb-1">{author.fullName}</h4>
                  <p className="mb-6">{author.designation}</p>
                  <p className="opacity-75 text-justify">{description}</p>

                  <div className="mt-12">
                    <button
                      className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
                      onClick={() => handleControl("prev")}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                      onClick={() => handleControl("next")}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
