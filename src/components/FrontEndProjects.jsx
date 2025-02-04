import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SummarizePro",
    description: "An AI-powered text summarization tool that condenses articles intelligently.",
    techStack: ["React", "GPT API", "Tailwind CSS", "Firebase"],
    link: "https://yourprojectlink.com",
  },
  {
    title: "Campus Creamery Rewards App",
    description: "A cross-platform mobile app for an ice cream store's rewards program.",
    techStack: ["React Native", "Firebase", "Express", "Expo"],
    link: "https://yourprojectlink.com",
  },
  {
    title: "Siempre Hemos Estado Aquí",
    description: "An interactive digital archive of Mexican-American history in St. Louis.",
    techStack: ["Jekyll", "Bootstrap", "Mapbox API"],
    link: "https://mexstl.org",
  },
];

const FrontEndProjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default FrontEndProjects;
