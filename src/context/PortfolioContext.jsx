import React, { createContext, useState, useEffect } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    const initialValue = saved ? JSON.parse(saved) : false;
    console.log('Initializing darkMode from localStorage:', { saved, initialValue });
    return initialValue;
  });

  useEffect(() => {
    console.log('Saving darkMode to localStorage:', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const projectsData = [];

  const experienceData = [
    {
      id: 'senior-swe',
      title: "Senior Software Engineer",
      previousTitle: "Software Engineer",
      previousDate: "May 2021 - Oct 2023",
      company: "Southwest Research Institute",
      date: "Oct 2023 - Present",
      description: "Architecting full-stack traffic management solutions for New England Compass, serving traffic operators across Vermont, New Hampshire, and Maine with real-time monitoring and device control.",
      fullDescription: "As a Senior Software Engineer at Southwest Research Institute, I lead full-stack development on New England Compass, a traffic management platform serving state transportation clients across Vermont, New Hampshire, and Maine. I drive modernization efforts, establish engineering best practices, and mentor a team of software engineers while maintaining production systems with 24/7 on-call support.",
      responsibilities: [
        "Architecting full-stack traffic management platform with real-time monitoring and device control using React, TypeScript, C#, and RESTful APIs",
        "Spearheading modernization initiative migrating monolithic Windows application to dockerized microservices architecture",
        "Upgrading API documentation from Swagger to OpenAPI3 and modernizing legacy C# codebase",
        "Transitioning team from waterfall to agile development methodologies",
        "Establishing comprehensive testing framework by implementing NUnit across all division ATMS applications",
        "Leading technical mentorship for 3 software engineers and conducting behavioral and technical interviews",
        "Reviewing 100+ pull requests to maintain code quality standards",
        "Providing 24/7 on-call support for traffic monitoring systems, consistently meeting SLA requirements"
      ],
      achievements: [
        "Built and architected New England Compass, a production traffic management platform serving operators across three states",
        "Led monolith-to-microservices migration, modernizing a legacy Windows application into a dockerized architecture",
        "Implemented NUnit testing framework across all division ATMS applications, ensuring code quality for production deployments",
        "Mentored 3 software engineers and maintained high code quality standards through 100+ pull request reviews",
        "Ensured continuous uptime for state transportation clients through reliable 24/7 on-call support"
      ],
      tech: ["React", "TypeScript", "C#", "Docker", "REST APIs", "OpenAPI3", "NUnit", "Microservices", "Git", "Agile"]
    },
    {
      id: 'swe-intern',
      title: "Software Engineer Intern",
      company: "Southwest Research Institute",
      date: "May 2020 - May 2021",
      description: "Developed modular React components and C# backend services for traffic management applications, contributing to the foundation of the New England Compass project.",
      fullDescription: "As a Software Engineer Intern at Southwest Research Institute, I contributed to real production systems from day one, developing frontend components and backend services for traffic management applications. I participated in agile ceremonies and built a strong foundation in the team's full-stack toolset.",
      responsibilities: [
        "Developing modular React components and C# backend services for traffic management applications",
        "Contributing to the foundation of the New England Compass project",
        "Supporting agile transformation by participating in sprint planning, daily standups, and iterative development cycles"
      ],
      achievements: [
        "Contributed to the early foundation of the New England Compass platform",
        "Supported agile adoption through active participation in iterative delivery cycles",
        "Converted internship into a full-time Software Engineer role"
      ],
      tech: ["React", "TypeScript", "C#", "REST APIs", "Git", "Agile"]
    }
  ];

  const blogPosts = [];

  const portfolioData = {
    name: "Alexandra Garcia",
    title: "Full Stack Developer",
    bio: "Building end-to-end web solutions with React, Node.js, and modern cloud technologies",
    shortBio: "I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. With expertise in React, Node.js, and modern web technologies, I transform ideas into elegant, high-performance applications.",
    additionalBio: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
    coreSkills: ["React", "Node.js", "TypeScript", "C#", "MSSQL", "AWS", "REST APIs", "Tailwind CSS"],
    email: "alexgarcia1299@yahoo.com",
    github: "https://github.com/alexg1299/alexandragarcia.me",
    linkedin: "https://www.linkedin.com/in/alexandra-g1299/",
    socials: {
      github: "https://github.com/alexg1299/alexandragarcia.me",
      linkedin: "https://www.linkedin.com/in/alexandra-g1299/",
      email: "mailto:alexgarcia1299@yahoo.com"
    }
  };

  const value = {
    portfolioData,
    projectsData,
    experienceData,
    blogPosts,
    darkMode,
    setDarkMode
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
