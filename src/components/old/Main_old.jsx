import { useState } from "react";
import MainCenter from "../MainCenter_old";

import Navbar from "../Navbar";

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
        <div className="mx-auto px-6 py-32 lg:px-56 ">
          <MainCenter />
        </div>
      </div>
    </div>
  );
}
