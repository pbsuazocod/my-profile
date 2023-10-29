import React from "react";
import civImga2 from "../img/civImg2.jpg";
import civImga3 from "../img/civImg3.jpg";
import civImga7 from "../img/civImg7.jpg";
import civImg8 from "../img/civImg11.jpg";
import profile from "../img/profile 2.jpg";

function MainCenter() {
  return (
    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
      <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl font-jost">
        <h1 className="text-4xl tracking-[2.5px] text-gray-900 sm:text-4xl">
          Hi ! I am
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          PEDRO SUAZO
        </h1>
        <h1 className="font-semibold tracking-[2px] text-gray-900 sm:text-xl">
          FULLSTACK DEVELOPER & CIVIL ENGINEER
        </h1>
        <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
          I'm not your average Fullstack Developer—I'm also a Civil Engineer.
          Whether you need a stunning website or robust infrastructure, I've got
          you covered. Let's bring your vision to life together.
        </p>
      </div>

      <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
        <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
          <div className="relative">
            <img
              // src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              src={profile}
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
          <div className="relative">
            <img
              // src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              src={civImga3}
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              // src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
              src={civImga7}
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
          <div className="relative">
            <img
              // src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
              src={civImg8}
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              // src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              src={civImga2}
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCenter;
