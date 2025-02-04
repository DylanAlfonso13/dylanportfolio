import React from "react";

const ProjectCard = ({ title, description, techStack, link, image }) => {
  return (
    <div className="relative group w-full max-w-md p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-xl">
       {/* Project Image */}
       <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Project Title */}
      <h2 className="text-2xl font-bold text-primary-light dark:text-primary-dark">{title}</h2>

      {/* Description */}
      <p className="text-secondary-light dark:text-secondary-dark mt-2 text-sm">{description}</p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-white/20 text-secondary-light dark:text-secondary-dark rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* View Project Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 rounded-md"
      >
        View Project →
      </a>

      {/* Subtle Animated Background Glow */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-50 blur-2xl rounded-lg"></div>
    </div>
  );
};

export default ProjectCard;
