import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  // const closeModal = () => {
  //   setOpen(!open);
  // };

  return (
    <div
      className="h-[80px] w-screen p-3 flex items-center justify-center  z-20
     bg-black fixed top-0 right-0 left-0 "
    >
      <div className="flex items-center justify-between px-2 flex-1">
        <div className="logo text-white">
          <a href="#home">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv04_Q-dbbQ5dQBZsnsBujos_yA4vVhzntKcsbmPT7ApolcpjaBJlfRWSnwFePHZOosbA&usqp=CAU"
              alt=""
              className="w-[100px] object-cover cursor-pointer"
            />
          </a>
        </div>
        <div className="hidden md:flex gap-3">
          <ul className="flex items-center jusify-center gap-6 uppercase">
            <a href="#programs">
              <li
                className="text-[#808080] hover:text-[#cfcbcb] hover:border-b-2
              hover:border-[#d7fb00] transition-all duration-200"
              >
                prorams
              </li>
            </a>
            <a href="#testimonials ">
              <li
                className="text-[#808080] hover:text-[#cfcbcb] hover:border-b-2
              hover:border-[#d7fb00] transition-all duration-200"
              >
                testimonials
              </li>
            </a>
            <a
              href="#membership
            "
            >
              <li
                className="text-[#808080] hover:text-[#cfcbcb] hover:border-b-2
              hover:border-[#d7fb00] transition-all duration-200"
              >
                Membership
              </li>
            </a>
          </ul>
          <a href="#">SIGN IN FOR MEMBERS</a>
        </div>

        {/* for mobile responsiveness */}

        <div className="md:hidden ">
          <FaBars
            size={25}
            className="text-white cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* mobile uls */}
        <div
          className={`absolute ${
            open
              ? "h-[20rem] opacity-1 transition-all duration-300"
              : "h-0 opacity-0 transition-none"
          } w-full right-0 left-0 top-0 bg-black
        flex items-center justify-center rounded-bl-xl z-50 rounded-br-xl `}
        >
          <FaTimes
            size={26}
            className="text-white absolute top-5 right-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <div className=" md:hidden mt-4 flex flex-col items-center justify-center w-full ">
            <ul className="text-md uppercase flex flex-col items-center justify-center">
              <a href="#programs">
                <li
                  className="text-[#808080] p-3 text-lg cursor-pointer hover:text-[whitesmoke] "
                  onClick={() => setOpen(!open)}
                >
                  prorams
                </li>
              </a>
              <a href="#testimonials">
                <li
                  className="text-[#808080] p-3 text-lg cursor-pointer hover:text-[whitesmoke] "
                  onClick={() => setOpen(!open)}
                >
                  testimonials
                </li>
              </a>

              <a href="#memberships">
                <li
                  className="text-[#808080] p-3 text-lg cursor-pointer hover:text-[whitesmoke] "
                  onClick={() => setOpen(!open)}
                >
                  memberships
                </li>
              </a>
            </ul>
            <a
              href="#membership"
              className="px-8 py-4 rounded-xl bg-transparent
              border-2 border-[#d7fb00] text-white hover:border-white "
            >
              SIGN IN FOR MEMBERS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
