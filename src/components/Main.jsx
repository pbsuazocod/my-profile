import { useState } from "react";
import profileImg from "../img/profile.png";

import Navbar from "./Navbar";

const navigation = [
  { name: "ABOUT ME", href: "#", current: true },
  { name: "PROJECTS", href: "#", current: false },
  { name: "FREENLANCE", href: "#", current: false },
  { name: "CONTACT ME", href: "#", current: false },
  { name: "DOWNLOAD CV", href: "#", current: false },
];

export default function Main() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-1">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto px-6 py-32 sm:py-40 lg:px-56 ">
          <div className="mx-auto max-w-2xl lg:mx-0 bg-red-30 lg:max-w-none  lg:gap-x-16 lg:gap-y-6 xl:gap-x-8 flex">
            {/* <div className="max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 bg-gray-300"> */}
            <div className=" bg-gray-300">
              <h1 className="text-4xl font-bold font-jost text-gray-900 sm:text-6xl">
                Hi ! I am
              </h1>
              <p className=" text-9xl text-black font">PEDRO</p>
              <p className=" text-9xl text-black font">SUAZO</p>
              <p className=" text-2xl font-semibold text-black font">
                FULLSTACK DEVELOPER
              </p>
              <p className="text-2xl font-semibold text-black font">&</p>
              <p className="text-2xl font-semibold text-black font">
                CIVIL ENGINEER
              </p>
              <p>
                My mission is to help you build your projects with my
                versatility and my ability to adapt to different situations.
                Together, let's turn your ideas into great projects!
              </p>

              {/* Buttons  */}
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div>
              <img
                src={profileImg}
                alt=""
                className="aspect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:max-w-none"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
