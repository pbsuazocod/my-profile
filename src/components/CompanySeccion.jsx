import React from "react";
import Odebrech from "../img/Company logos/odebrech.png";
import Barrick from "../img/Company logos/BarrikGold.png";
import Bernard from "../img/Company logos/BernardGruppe.png";
import Stucky from "../img/Company logos/stuky.png";
import Sococo from "../img/Company logos/sococo.jpeg";

const logo = [
  {
    name: "odebrech",
    value: Odebrech,
    description: "odebrech logo image",
  },
  {
    name: "barrick",
    value: Barrick,
    description: "barrick logo image",
  },
  {
    name: "bernard",
    value: Bernard,
    description: "bernard logo image",
  },
  {
    name: "stucky",
    value: Stucky,
    description: "stucky logo image",
  },
  {
    name: "sococo",
    value: Sococo,
    description: "sococo logo image",
  },
];

function CompanySeccion() {
  return (
    <div className="relative isolate -z-10 mt-32 sm:mt-48">
      <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
        <svg
          className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
              width={200}
              height={200}
              x="50%"
              y="50%"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(-100 0)"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
            <path
              d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
          />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative Construccion Companys
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logo.map((logo) => (
            <div key={logo.label}>
              <img
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                // src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                src={logo.value}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanySeccion;
