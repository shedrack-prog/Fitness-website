import React from "react";
import herobg from "../assets/herobg.jpg";

import { IoMdArrowDropright } from "react-icons/io";

const Banner = () => {
  return (
    <div
      className="bg-black pt-[5rem] h-[100vh] flex flex-col justify-around"
      id="home"
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className=" p-3  md:w-1/2">
          <h3
            className="bg-clip-text text-transparent bg-gradient-to-r
         from-[#d7fb00] to-[#d7fb00] font-bold text-lg mb-4"
          >
            WELCOME TO THE
          </h3>
          <h1 className="font-bold text-[2.2rem]  text-white leading-12 mb-5 lg:text-[2.7rem]">
            <span className="">MOST WANTED</span> <br /> ONLINE PERSONAL
            TRAINING{" "}
          </h1>
          <a
            href="#"
            className="px-6 py-3 flex w-[40%] items-centerfont-semibold bg-[#d7fb00] rounded-3xl items-center hover:font-bold"
          >
            <p>JOIN NOW</p> <IoMdArrowDropright size={20} />
          </a>
        </div>
        <div className="md:w-1/2">
          <img src={herobg} className="w-full h-full object-contain" alt="" />
        </div>
      </div>

      <div
        className="bg-[#d7fb00]  text-black flex gap-2  overflow-x-scroll scroll md:overscroll-none md:overflow-hidden
        "
        id="programs"
      >
        <h1 className="min-w-[50vw] md:min-w-[30vw] font-bold block ">
          NEW VIDEOS DAILY{" "}
        </h1>
        <h1 className="min-w-[50vw] md:min-w-[30vw] font-bold block ">
          BEGINNERS FRIENDLY
        </h1>
        <h1 className="min-w-[50vw] md:min-w-[30vw] font-bold block ">
          LIVE CONSULTACY{" "}
        </h1>
        <h1 className="min-w-[50vw] md:min-w-[30vw] font-bold block ">
          20+ TRAINERS
        </h1>
      </div>
    </div>
  );
};

export default Banner;
