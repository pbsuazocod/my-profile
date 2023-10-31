import React from "react";

const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];

function ContentSeccion() {
  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Proyects
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-600">
              I'm a civil engineer with over a decade of experience, and I'm
              also a full stack developer. My dual expertise allows me to bridge
              the gap between the physical and digital worlds, ensuring
              efficient infrastructure projects and innovative software
              solutions.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
              <p>
                I've played a key part in designing and building various
                infrastructure projects, always prioritizing the safety and
                functionality of critical structures. At the same time, my role
                as a full stack developer has enabled me to utilize my technical
                skills to craft inventive software solutions, streamlining
                processes, enhancing project management, and boosting
                efficiency.
              </p>
              <p className="mt-10">
                Over the past decade, my extensive experience and dedication to
                excellence have shaped me into a versatile professional,
                well-prepared to address intricate challenges in both the
                physical and digital domains.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSeccion;
