import React from "react";

const freelance = [
  {
    name: "Quality control consulting",
    description:
      "I have a rewarding career in quality control consulting, With a strong background in ensuring adherence to stringent quality standards, I've contributed to the success of construction projects by enhancing quality, safety, and efficiency. ",
  },
  {
    name: "Project management",
    description:
      "My project management skills are a valuable asset, characterized by my proficiency in overseeing projects from inception to completion. I excel in strategic planning, resource allocation, risk mitigation, and team coordination to ensure successful, on-time, and within-budget project delivery.",
  },
  {
    name: "Projects budgets",
    description:
      "Extensive experience in crafting construction project budgets. My expertise includes meticulous cost analysis, accurate estimation, and effective financial planning, resulting in well-structured budgets that contribute to project success.",
  },
  {
    name: "Rockfill dam consulting",
    description:
      "With a decade of experience in rockfill dams, I have gained profound expertise in their design, construction, and maintenance. My knowledge and hands-on experience have contributed to the successful execution of numerous projects in this specialized field.",
  },
  {
    name: "Soil and concrete lab",
    description:
      "I have a strong background in the field of soil and concrete lab work. My expertise includes conducting precise testing and analysis to ensure the quality and integrity of construction materials, contributing to the success and durability of various projects.",
  },
  {
    name: "Project supervision",
    description:
      "As a project supervisor, I excel in overseeing construction projects from initiation to completion. My role involves meticulous planning, resource management, and team coordination to ensure projects meet quality, time, and budgetary requirements, resulting in successful outcomes.",
  },
];

function FreelanceSection() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Freelance
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          With a thriving career spanning fifteen years, I have excelled as a
          freelance professional in the construction industry. My experience
          encompasses a diverse range of construction-related projects,
          demonstrating my expertise and dedication in delivering high-quality,
          innovative solutions for clients.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {freelance.map((value) => (
          <div key={value.name}>
            <dt className="font-semibold text-gray-900">{value.name}</dt>
            <dd className="mt-1 text-gray-600">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default FreelanceSection;
