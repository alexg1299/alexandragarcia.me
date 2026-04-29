import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function ExperienceDetail() {
  const { experienceData } = useContext(PortfolioContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold  text-purple-600 dark:text-purple-400 mb-2">
          Southwest Research Institute
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">Full employment history</p>

        <div className="space-y-16">
          {experienceData.map((role, index) => (
            <div key={role.id} className="relative">
              {index < experienceData.length - 1 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-purple-200 dark:bg-purple-800 -ml-6 hidden md:block" />
              )}
              <div className="mb-6">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {role.title}
                  </h2>
                  <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1 shrink-0 text-sm">
                    <Calendar className="w-4 h-4" />
                    {role.date}
                  </span>
                </div>
                {role.previousTitle && (
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Previous Roles: {role.previousTitle} &middot; {role.previousDate}
                  </p>
                )}
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">About the Role</h3>
                  <p>{role.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {role.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {role.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {role.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {index < experienceData.length - 1 && (
                <hr className="mt-16 border-gray-200 dark:border-gray-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
