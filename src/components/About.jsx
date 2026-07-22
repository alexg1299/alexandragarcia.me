import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PortfolioContext } from '../context/PortfolioContext';
import TechBadge from './ui/TechBadge';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  const { portfolioData, experienceData } = useContext(PortfolioContext);
  const navigate = useNavigate();
  const currentExperience = experienceData[0];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl w-full">
        {/* Section title — uses shared SectionHeading component */}
        <SectionHeading>About Me</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {portfolioData.shortBio}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {portfolioData.additionalBio}
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Core Skills</h3>
              {/* Core skill pills */}
              <div className="flex flex-wrap gap-2">
                {portfolioData.coreSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white">Bachelor of Science, Computer Science</h4>
                  <p className="text-purple-600 dark:text-purple-400">The University of Texas at San Antonio</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2018 - May 2021</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Summa Cum Laude &middot; Concentration in Software Engineering</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white">SCRUM Master Certification</h4>
                  <p className="text-purple-600 dark:text-purple-400">Scrum Alliance</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sept 2021 - Oct 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          {/* Experience preview heading */}
          <SectionHeading className="text-3xl! md:text-4xl! mb-8!">Current Experience</SectionHeading>
          <div
            onClick={() => navigate('/experience')}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-purple-600 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentExperience.title}
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  {currentExperience.companyLogo && (
                    <img
                      src={currentExperience.companyLogo}
                      alt={`${currentExperience.company} logo`}
                      className="w-10 h-10 rounded-md object-contain bg-white p-1 border border-gray-200 dark:border-gray-700"
                      loading="lazy"
                    />
                  )}
                  <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">
                    {currentExperience.company}
                  </p>
                </div>
              </div>
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold">
                {currentExperience.date}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              {currentExperience.description}
            </p>

            <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mb-6 space-y-2">
              {currentExperience.previousTitles?.map((prev) => (
                <div key={prev.title} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{prev.title}</span>
                  <span className="text-gray-400 dark:text-gray-500">{prev.date}</span>
                </div>
              ))}
              {experienceData.slice(1).map((role) => (
                <div key={role.id} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{role.title}</span>
                  <span className="text-gray-400 dark:text-gray-500">{role.date}</span>
                </div>
              ))}
            </div>

            <p className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
              Click to read more →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
