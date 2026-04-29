import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Code, Github, ExternalLink } from 'lucide-react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const { projectsData } = useContext(PortfolioContext);
  const navigate = useNavigate();

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className={`h-64 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-8`}>
          <Code className="w-24 h-24 text-white opacity-50" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold">
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
            <p>{project.fullDescription}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Challenges</h2>
            <p>{project.challenges}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Results & Impact</h2>
            <p>{project.results}</p>
          </div>

          <div className="flex gap-4 pt-4">
            <a href={project.github} className="flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-800 transition-all">
              <Github className="w-5 h-5" /> View Code
            </a>
            <a href={project.live} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              <ExternalLink className="w-5 h-5" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
