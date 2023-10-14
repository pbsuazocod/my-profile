import React from "react";
import profileImg from "../img/profile.png";
import { FaCopy } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

function MainCenter() {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0 bg-red-30 lg:max-w-none  lg:gap-x-16 lg:gap-y-6 xl:gap-x-8 flex">
      {/* <div className="max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 bg-gray-300"> */}
      <div className="lg:min-w-[50%]">
        <h1 className="leading-10 tracking-widest lg:text-4xl sm:text-xl text-gray-900 ">
          Hi ! I am
        </h1>
        <p className=" text-4vw tracking-[8.5px] leading-[110.5%] font-jost font-semibold w-8 mt-[10px] ">
          PEDRO SUAZO
        </p>
        <p className="text-xl font-semibold font-jost tracking-[2.5px] mt-[15px]">
          FULLSTACK DEVELOPER & CIVIL ENGINEER
        </p>
        <p className="mt-[30px] text-2xl font-jost tracking-[0.3px] text-[#929292]">
          I'm not your average Fullstack Developer—I'm also a Civil Engineer.
          Whether you need a stunning website or robust infrastructure, I've got
          you covered. Let's bring your vision to life together.
        </p>

        {/* Buttons  */}
        <div className="mt-10 flex items-center gap-x-8">
          <a
            href="#"
            className="font-jost rounded-full bg-transparent border-solid border-[#0f0f16] border-[1px] px-3.5 py-2.5 text-sm font-semibold text-[#0f0f16] shadow-sm hover:text-opacity-25 hover:border-opacity-25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-50"
          >
            <p className="flex text-base items-center gap-2">
              Download CV <FaCopy />
            </p>
          </a>
          <a
            href="#"
            className="rounded-full bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-opacity-75 hover:bg-opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-50"
          >
            <p className="font-jost flex text-base items-center gap-2">
              Check my projects <FaLaptopCode />
            </p>
          </a>
        </div>
      </div>
      <div className="">
        <img
          src={profileImg}
          alt=""
          className="aspect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:max-w-none"
        />
      </div>
    </div>
  );
}

export default MainCenter;
