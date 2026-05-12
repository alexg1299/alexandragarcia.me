import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code } from 'lucide-react';
import { PortfolioContext } from '../context/PortfolioContext';
import TechBadge from './ui/TechBadge';
import SectionHeading from './ui/SectionHeading';
import ProjectLinks from './ui/ProjectLinks';

export default function Projects() {
  const { projectsData } = useContext(PortfolioContext);
  const navigate = useNavigate();

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Section title — uses shared SectionHeading component */}
        <SectionHeading>Featured Projects</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
              <p className="text-2xl font-semibold text-gray-400 dark:text-gray-500">Coming soon</p>
            </div>
          ) : (
            projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              {project.cardImage ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.cardImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <Code className="w-16 h-16 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <TechBadge key={i} label={tech} />
                  ))}
                </div>
                <div className="flex items-center justify-between pt-1">
                  <p className="text-purple-600 dark:text-purple-400 font-semibold group-hover:underline">
                    View details →
                  </p>
                  <ProjectLinks github={project.github} live={project.live} />
                </div>
              </div>
            </div>
          ))
          )}
        </div>
      </div>
    </section>
  );
}
