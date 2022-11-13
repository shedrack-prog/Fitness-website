import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

import mobility from "../assets/mobility.jpg";
import morefit from "../assets/morefit.jpg";
import pushup from "../assets/pushup.jpg";

const Community = () => {
  return (
    <div className="flex  flex-col bg-black pt-14" id="community">
      <div className="flex flex-col px-2">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center mb-6 ml-2">
            <h1 className="text-white">
              <CgGym size={26} className="text-gray-300" />
            </h1>
            <h1 className="text-2xl text-white">SUPPORTIVE COMMUNITY</h1>
          </div>
          <div className="flex flex-col mb-6 px-2">
            <p className="text-gray-500 text-md px-2 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              amet quasi culpa odio veniam s
            </p>
            <a
              href=""
              className="p-3 bg-[#d7fb00] text-black rounded-md text-center font-semibold"
            >
              JOIN NOW--
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={mobility}
            alt=""
            className="object-cover w-[130px] h-[130px] rounded-full border-2 border[#d7fb00]"
          />
          <img
            src={morefit}
            alt=""
            className="object-cover w-[130px] h-[130px] rounded-full border-2 border[#d7fb00] ml-[-25px]"
          />
          <img
            src={pushup}
            alt=""
            className="object-cover w-[130px] h-[130px] rounded-full border-2 border[#d7fb00] ml-[-25px]"
          />
        </div>
      </div>

      {/* instagram section */}
      <div className="flex items-center flex-col   px-3 mt-8">
        <div className="flex flex-col">
          <div className="flex flex-col ml-2">
            <div className="flex gap-2 items-center mb-4 ">
              <h1 className="text-gray-400">
                <CgGym size={26} className="text-gray-300" />
              </h1>
              <h1 className="text-white text-2xl font-bold">ON INSTAGRAM</h1>
            </div>
            <div>
              <p className="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                amet quasi culpa odio veniam s
              </p>
            </div>
          </div>
          <div className="text-[#d7fb00] text-3xl font-semibold mt-3 mb-3">
            #JOINRAYCLUB
          </div>
        </div>
        <div className=" max-w-[90vw] px-3 flex gap-5 overflow-x-scroll scroll mt-4">
          <img
            src={mobility}
            alt=""
            className="w-[200px] h-[230px] object-cover rounded-tr-lg"
          />
          <img
            src={morefit}
            alt=""
            className="w-[200px] h-[230px] object-cover rounded-tr-lg"
          />
          <img
            src={mobility}
            alt=""
            className="w-[200px] h-[230px] object-cover rounded-tr-lg"
          />
          <img
            src={pushup}
            alt=""
            className="w-[200px] h-[230px] object-cover rounded-tr-lg"
          />
          <img
            src={morefit}
            alt=""
            className="w-[200px] h-[230px] object-cover rounded-tr-lg"
          />
        </div>
      </div>
      <div className="h-[2px] w-full bg-gray-500 mt-6"></div>

      {/* useful links */}
      <div className="flex justify-between gap-3 flex-col px-4 mt-5">
        <div className="flex justify-between ">
          <div className="text-white">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv04_Q-dbbQ5dQBZsnsBujos_yA4vVhzntKcsbmPT7ApolcpjaBJlfRWSnwFePHZOosbA&usqp=CAU"
              alt=""
              className="w-[200px] object-cover ml-0 "
            />
          </div>
          <ul className="flex flex-col gap-2 text-gray-400 mr-4">
            <li>Program</li>
            <li>Membership</li>
            <li>Testimonials</li>
            <li>Community</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Store</li>
          </ul>
        </div>
        <div>
          <div className="h-[2px] w-full bg-gray-500 mt-6"></div>

          <div className="flex flex-col gap-3 mt-5">
            <h1 className="text-3xl text-white font-bold">
              GAIN YOUR CHANGE NOW
            </h1>
            <p className="text-gray-400 text-md w-[80%]">
              stay motivated and engaged with a little help from a supportive
              community of other members
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-14">
        <div className="flex flex-col text-[#808080] w-full">
          <p className="text-center text-sm">
            COPYRIGHT @ 2022 RAYCLUB. ALL RIGHTS RESERVED.
          </p>
          <p className="text-center text-sm">TERMS OF USE PRIVACY POLICY</p>
        </div>

        <div className="text-gray-400 flex gap-5 text-lg mb-1 mt-2">
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Community;
