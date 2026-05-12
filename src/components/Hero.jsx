import React, { useContext } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function Hero() {
  const { portfolioData } = useContext(PortfolioContext);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Alexandra Garcia-Resume2026.pdf';
    link.download = 'Alexandra Garcia-Resume2026.pdf';
    link.click();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              {portfolioData.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {portfolioData.bio}
          </p>
          <div className="flex gap-4 justify-center pt-4 flex-wrap">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
              View My Work
            </button>
            <button onClick={handleResumeDownload} className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2 mx-auto lg:mx-0">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            {/* <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
              Get In Touch
            </button> */}
          </div>
          <div className="flex gap-6 justify-center pt-8">
            <a href={portfolioData.socials.github} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={portfolioData.socials.linkedin} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${portfolioData.email}`} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
