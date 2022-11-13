import React from "react";
import { CgGym } from "react-icons/cg";
import { membershipData } from "../data";

const Membership = () => {
  return (
    <div
      className="
       bg-black p-3 px-4 pt-10 "
      id="memberships"
    >
      <div className="flex flex-col  items-center justify-between lg:max-w-[70vw] lg:mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            {/* icon here */}
            <div>
              <CgGym size={26} className="text-gray-300" />
            </div>
            <h1 className="text-white text-2xl xl:text-[2rem]">MEMBERSHIP</h1>
          </div>
          <p className=" text-[#808080] w-[90%] mt-2">
            Gain up your routine with our growing library of workouts led by our
            world-class trainers
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-3 w-full">
          {membershipData.map((item) => (
            <div
              className="h-[340px] md:h-[380px] bg-black w-full flex flex-col  sm:max-w-[350px] md:max-w-[300px]
            justify-between border hover:scale-105 transition-all duration-300 pb-2"
            >
              {item.recommended ? (
                <p
                  className="h-[20px] bg-[#d7fb00] text-black 
              font-semibold w-full text-center"
                >
                  RECOMMENDED BY USERS
                </p>
              ) : (
                <p
                  className="h-[20px] bg-[#d7fb00] text-black 
              font-semibold w-full text-center"
                >
                  GOOD FOR PRACTICALS
                </p>
              )}
              <div className="w-full flex items-center justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv04_Q-dbbQ5dQBZsnsBujos_yA4vVhzntKcsbmPT7ApolcpjaBJlfRWSnwFePHZOosbA&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="">
                <div className="bg-black flex flex-col items-start  justify-between ">
                  <div className="flex flex-col  ">
                    <h1 className="font-bold text-3xl text-[#d7fb00]">
                      {item.title}
                    </h1>
                    <p className="text-[#808080]">PRICE STARTS FROM </p>
                    <p className="text-white p-2 hover:bg-[#d7fb00] hover:text-black">
                      $ {item.price}.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-white px-1  py-1 rounded-3xl border-[#d7fb00] border-2"
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
