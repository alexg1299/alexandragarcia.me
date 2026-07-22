import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FolderOpen } from 'lucide-react';
import { PortfolioContext } from '../context/PortfolioContext';
import BackButton from '../components/ui/BackButton';
import TechBadge from '../components/ui/TechBadge';

export default function ExperienceDetail() {
  const { experienceData } = useContext(PortfolioContext);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      {/* Back navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-4">
        <BackButton />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
            {experienceData[0].company}
          </h1>
          {/* {experienceData[0].companyLogo && (
            <img
              src={experienceData[0].companyLogo}
              alt={`${experienceData[0].company} logo`}
              className="w-10 h-10 rounded-md object-contain bg-white p-1 border border-gray-200 dark:border-gray-700 shrink-0"
              loading="lazy"
            />
          )} */}
        </div>
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
                {role.previousTitles?.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">Previous Roles</p>
                    {role.previousTitles.map((prev) => (
                      <div key={prev.title} className="flex items-baseline justify-between gap-4">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{prev.title}</span>
                        <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1 shrink-0 text-sm">
                          <Calendar className="w-4 h-4" />
                          {prev.date}
                        </span>
                      </div>
                    ))}
                  </div>
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

                {role.relatedProjects?.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Related Projects</h3>
                    <div className="flex flex-wrap gap-3">
                      {role.relatedProjects.map((proj) => (
                        <Link
                          key={proj.id}
                          to={`/project/${proj.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-sm font-medium"
                        >
                          <FolderOpen className="w-4 h-4" />
                          {proj.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                  {/* Tech stack pills — gradient variant */}
                <div className="flex flex-wrap gap-2">
                    {role.tech.map((tech, i) => (
                      <TechBadge key={i} label={tech} variant="gradient" />
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
