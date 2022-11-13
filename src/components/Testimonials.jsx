import React from "react";
import { CgGym } from "react-icons/cg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonialData } from "../data";

const Testimonials = () => {
  const slideLeft = () => {
    const Lists = document.getElementById("Lists");

    Lists.scrollLeft = Lists.scrollLeft - 200;
  };

  const slideRight = () => {
    const Lists = document.getElementById("Lists");

    Lists.scrollLeft = Lists.scrollLeft + 200;
  };

  return (
    <div className="flex items-center flex-col p-4 " id="testimonials">
      <div className=" flex flex-col md:max-w-[70vw] border-[2px]">
        <div>
          <div className="flex gap-2 items-center">
            {/* icon here */}
            <div>
              <CgGym size={26} className="text-gray-700" />
            </div>
            <h1 className="text-black text-3xl font-bold mb-1">
              WHAT THEY SAY
            </h1>
          </div>
          <p className="text-gray-600 text-center">
            This is what our clients says about us... <br /> our Problem is that
            we are too Good.
          </p>
        </div>
        <div className="  flex overflow-x-scroll scroll mt-4 gap-3" id="Lists">
          {/**/}
          {testimonialData.map((item) => (
            <div className="min-w-[90%] sm:min-w-[60%] lg:min-w-[50%] px-4 bg-[#d7fb00] rounded-tl-2xl rounded-br-2xl">
              <div>
                <span className="text-md ">
                  <CgGym size={26} className="text-gray-700" />
                </span>
                <div className="font-semibold text-xl mb-3">{item.text}</div>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-[90px] h-[90px] rounded-full oject-cover"
                />
                <div className="flex items-center flex-col">
                  <p className="font-semibold text-md">{item.name}</p>
                  <p className="text-sm ">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex item-center justify-between mt-4 px-2">
          <p
            className="p-4 rounded-full bg-gray-300 hover:bg-[#d7fb00]"
            id="arrowLeft"
            onClick={slideLeft}
          >
            <FaArrowLeft size={26} />
          </p>
          <p
            className="p-4 rounded-full bg-gray-300 hover:bg-[#d7fb00]"
            id="arrowRight"
            onClick={slideRight}
          >
            <FaArrowRight size={26} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
