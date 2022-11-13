import React from "react";
import { CgGym } from "react-icons/cg";
import { programsData } from "../data";

const Programs = () => {
  return (
    <div className="flex items-center justify-center flex-wrap bg-black px-2">
      <div className="xl:max-w-[70vw] ">
        <div className="p-3">
          <div className="flex gap-2 items-center">
            {/* icon here */}
            <div>
              <CgGym size={26} className="text-gray-300" />
            </div>
            <h1 className="text-white text-2xl xl:text-[2rem]">OUR PROGRAMS</h1>
          </div>
          <p className="text-[#808080] w-[92%] mt-2">
            Gain up your routine with our growing library of workouts led by our
            world-class trainers
          </p>
        </div>
        <div className="flex flex-wrap gap-6 px-3 md:items-center md:justify-center">
          {programsData.map((item) => (
            <div className="flex flex-col items-center justify-center">
              <img
                src={item.img}
                alt=""
                className="h-[30rem]  w-full object-cover md:max-w-[300px] md:max-h-[400px] "
              />
              <h1 className="text-[#d7fb00]  font-semibold text-3xl text-center mt-2">
                {item.title}
              </h1>
              <p className="text-[#808080] text-center px-2 w-[90%] flex items-center justify-center ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <hr className="w-full h-[2px] bg-gray-400" />
      </div>
    </div>
  );
};

export default Programs;
