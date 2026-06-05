import React, { createContext, useState, useEffect } from 'react';

export const PortfolioContext = createContext();

// ─────────────────────────────────────────────────────────────────────────────
// OWNER INFO
// Update this object to change name, bio, contact links, and core skills shown
// in the Hero and About sections.
// ─────────────────────────────────────────────────────────────────────────────
const PORTFOLIO_INFO = {
  name: "Alexandra Garcia",
  title: "Full Stack Developer",
  bio: "Building end-to-end web solutions with React, Node.js, and modern cloud technologies",
  shortBio:
    "I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. With expertise in React, Node.js, and modern web technologies, I transform ideas into elegant, high-performance applications.",
  additionalBio:
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  coreSkills: [
    "React",
    "Node.js",
    "TypeScript",
    "C#",
    "MSSQL",
    "AWS",
    "REST APIs",
    "Tailwind CSS",
  ],
  email: "alexgarcia1299@yahoo.com",
  socials: {
    github: "https://github.com/alexg1299/alexandragarcia.me",
    linkedin: "https://www.linkedin.com/in/alexandra-g1299/",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// Add a new object to this array to add a project card + detail page.
//
// Required fields:
//   id          — unique slug used in the URL  (/project/:id)
//   title       — display name of the project
//   description — short summary shown on the card
//   tech        — array of technology strings
//   gradient    — Tailwind gradient classes used when no cardImage is provided
//
// Optional fields:
//   fullDescription  — longer text shown at the top of the detail page
//   challenges       — paragraph describing technical challenges
//   results          — paragraph describing outcomes
//   cardImage        — path to an image shown on the project card
//   images           — array of { src, caption } shown in the detail carousel
//   videoTitle       — heading label for the videos section
//   videoDescription — text shown above the video list
//   videos           — array of { src, title } for embedded videos
//   github           — GitHub repo URL (null to hide)
//   live             — live site URL (null to hide)
// ─────────────────────────────────────────────────────────────────────────────
const PROJECTS = [
    {
      id: 'new-england-compass',
      title: 'New England Compass (Southwest Research Institute)',
      description: 'A production traffic management platform serving state transportation operators across Vermont, New Hampshire, and Maine with real-time monitoring and device control.',
      fullDescription: 'New England Compass is a full-stack Advanced Traffic Management System (ATMS) built for the transportation agencies of Vermont, New Hampshire, and Maine. The platform provides real-time monitoring of roadway devices, incident management, live map views, and operator tooling. I contributed to both the frontend React/TypeScript application and the C# backend services, and also recorded voiceover tutorials to help onboard operators and agency staff.',
      challenges: 'The system handles real-time data streams from hundreds of field devices across three states and must remain available 24/7. Key challenges included migrating a legacy monolithic Windows application to a dockerized microservices architecture while keeping production systems live, and ensuring the UI remained intuitive for non-technical traffic operators.',
      results: 'Successfully deployed across three state DOTs, the platform is actively used by traffic operations centers to monitor and respond to incidents in real time. The modernization effort reduced deployment complexity, improved system reliability, and the operator training videos reduced onboarding time significantly.',
      gradient: 'from-blue-600 to-indigo-700',
      cardImage: '/projects/new-england-compass/Map LogIn.png',
      tech: ['React', 'TypeScript', 'C#', 'Docker', 'REST APIs', 'OpenAPI3', 'NUnit', 'Microservices'],
      images: [
        { src: '/projects/new-england-compass/Map LogIn.png', caption: 'New England Compass Login' },
        { src: '/projects/new-england-compass/Map Layers Popup.png', caption: 'Map Layers, icons, and popup to view device details' },
        { src: '/projects/new-england-compass/Map Event Creation.png', caption: 'Create EM Events directly from the map with drawing widget' },
        { src: '/projects/new-england-compass/Connected Subsystems.png', caption: 'View the connection status for each subsystem' },
        { src: '/projects/new-england-compass/SAA Edit User.png', caption: 'Edit user details in the SAA Mange Users page; Assign exclusive group/subsytem permissions' },
        { src: '/projects/new-england-compass/CCTV Camera Wall.png', caption: 'CCTV Camera Wall view for monitoring multiple camera feeds' },
        { src: '/projects/new-england-compass/CCTV Status.png', caption: 'CCTV Camera Status view for monitoring individual camera feeds and control device operations' },
        { src: '/projects/new-england-compass/DMS device configuration.png', caption: 'DMS Device Configuration view for managing dynamic message signs' },
        { src: '/projects/new-england-compass/DMS Status.png', caption: 'DMS Status view for monitoring dynamic message signs and their statuses' },
        { src: '/projects/new-england-compass/DMS Edit message.png', caption: 'Edit messages on dynamic message signs' },
        { src: '/projects/new-england-compass/DMS Groups.png', caption: 'View DMS Groups, update device statuses or messages displayed' },
        { src: '/projects/new-england-compass/DSS Rule Manager.png', caption: 'Configure rules to automatically trigger device actions based on real-time data conditions' },
        { src: '/projects/new-england-compass/DSS Edit Rule Nodes.png', caption: 'Edit rules in the DSS Rule Manager' },
        { src: '/projects/new-england-compass/DSS Schedule rule.png', caption: 'Set up rules to activate during scheduled timeframe' },
        { src: '/projects/new-england-compass/EM Event Summary.png', caption: 'Overview of EM Events within the system' },
        { src: '/projects/new-england-compass/Em Event Creation.png', caption: 'Configure EM Events details, location information, associated cameras, users to notify, and more' },
      ],
      videoTitle: 'Training Videos (voiceover by me)',
      videoDescription: 'These are used to train operators and agency staff on how to use the New England Compass platform. Each walkthrough covers a different subsystem, demonstrating key features and workflows. These are 2 of the 27 videos created for the project; I created the script detailing each page and its functionality, recorded the voiceover, and edited these videos.',
      videos: [
        { src: '/projects/new-england-compass/RS-Overview.mp4', title: 'Reporting Subsystem Overview Pages' },
        { src: '/projects/new-england-compass/TTA-Overview.mp4', title: 'Travel Time Subsystem Overview Pages' },
      ],
      github: null,
      live: null,
    },
    {
      id: 'courtside',
      title: 'CourtSide - NBA Game Day Fan Hub',
      description: 'A modern NBA game day companion with live scores, game breakdowns, player search, standings, and resilient API fallbacks.',
      fullDescription: 'CourtSide is a Next.js 14 App Router application built as a complete NBA game day experience. It includes live and upcoming game views, detailed matchup pages, conference standings, and real-time player search. The app uses server-side route handlers to normalize BallDontLie API data, protects API access from the client, and supports full light/dark mode with a persistent theme toggle.',
      challenges: 'The biggest challenge was delivering a reliable real-time-like experience on a rate-limited free API tier. I designed server-side normalization and per-route revalidation, then added transparent mock-data fallbacks so users always get a valid response even when the API is unavailable or throttled.',
      results: 'The final app delivers a fast, responsive fan hub across desktop and mobile, with stable UX under API failures, a clear architecture for future expansion, and clean deployment on Vercel.',
      gradient: 'from-orange-500 to-amber-600',
      tech: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Route Handlers', 'ISR', 'BallDontLie API', 'Vercel'],
      github: 'https://github.com/alexg1299/nba-fan-hub',
      live: 'https://courtside-jade.vercel.app/',
      images: [
        { src: '/projects/courtside/Home.png', caption: 'Home page showing live/upcoming games, scores and standings' },
        { src: '/projects/courtside/HomeDarkMode.png', caption: 'Home page as Dark Mode' },
        { src: './projects/courtside/Standings.png', caption: 'Conference Standings page showing team rankings and records' },
        { src: './projects/courtside/Teams.png', caption: 'Teams page showing all NBA teams with search functionality' },
        { src: './projects/courtside/TeamSpurs.png', caption: 'Team page showing detailed information for the San Antonio Spurs' },
        { src: './projects/courtside/SpurPlayer.png', caption: 'Player page showing detailed information for a specific player, with search functionality' },
      ]
    },
    {
      id: 'flowstate',
      title: 'Flow State (Personal Project)',
      description: 'Coffee dosing app for brewing better coffee. Featuring a grind calculator, recipe library, and bean facts.',
      fullDescription: 'Flow State is a single page Angular application build for coffee hobbyist who want to brew with precision. Learning new skills can be very intimidating, this app help take away the guesswork and makes it easy to find the information you need to brew your best cup of coffee.',
      challenges: 'This was my first time building an Angular application, so I had to learn the framework as I went. I also wanted to implement a custom design system and reusable component library, which added some complexity to the project.',
      results: 'The app is live and available for anyone to use. It has a growing library of coffee recipes and bean facts, and I continue to add new features and content regularly.',
      gradient: 'from-stone-700 to-amber-200',
      cardImage: '/projects/flowstate/flowstateCalc.png',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Git'],
      live: 'https://flowstate.alexandragarcia.me/',
      github: 'https://github.com/alexg1299/FlowState',
      images: [
        { src: '/projects/flowstate/flowstateCalc.png', caption: 'Flow State Calculator' },
        { src: '/projects/flowstate/recipes.png', caption: 'Flow State Recipe Library' },
        { src: '/projects/flowstate/recipeCard.png', caption: 'View recipe details' },
        { src: '/projects/flowstate/facts.png', caption: 'Bean Facts Library' },
        { src: '/projects/flowstate/factsCard.png', caption: 'View bean fact details' },
      ],
    },
    {
      id: 'portfolio',
      cardImage: '/projects/portfolio.png',
      title: 'Personal Portfolio (This Site)',
      description: 'A responsive, component-driven portfolio built with React and Tailwind CSS, featuring project showcases, experience timelines, and a clean, modern design.',
      fullDescription: 'This portfolio site is a single-page React application that showcases my projects, experience, and skills. It is built with Vite for fast development and optimized production builds, styled entirely with Tailwind CSS, and organized around a central context layer that makes adding new content straightforward without touching component code.',
      challenges: 'Designing a system flexible enough to support varied project formats with customizations such as video walkthroughs, image carousels, or with neither; while keeping the component surface small and the data layer easy to maintain.',
      results: 'A fully responsive, accessible portfolio with smooth navigation, dynamic project and experience detail pages, and a data-driven architecture that lets me add new content by editing a single context file.',
      gradient: 'from-violet-500 to-purple-700',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Cloudflare Pages'],
      github: 'https://github.com/alexg1299/alexandragarcia.me',
      live: 'https://alexandragarcia.me/',
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE
// Add a new object to this array to add a role to the experience page.
// Roles are displayed in order — most recent first.
//
// Required fields:
//   id          — unique identifier
//   title       — job title
//   company     — company name
//   date        — display date range  (e.g. "Oct 2023 - Present")
//   description — short summary shown on the About preview card
//   tech        — array of technology strings
//
// Optional fields:
//   previousTitles   — array of { title, date } for earlier roles at the same company
//   fullDescription  — longer text shown on the Experience detail page
//   responsibilities — array of bullet strings
//   achievements     — array of bullet strings
// ─────────────────────────────────────────────────────────────────────────────
const EXPERIENCE = [
    {
      id: 'senior-swe',
      title: "Senior Software Engineer",
      previousTitles: [
        { title: "Software Engineer", date: "May 2021 - Oct 2023" },
        { title: "Software Engineer Intern", date: "May 2020 - May 2021" },
      ],
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
      tech: ["React", "TypeScript", "C#", "Docker", "REST APIs", "OpenAPI3", "NUnit", "Microservices", "Git", "Agile"],
      relatedProjects: [
        { id: 'new-england-compass', title: 'New England Compass' },
      ],
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// BLOG POSTS
// Add objects here when blog posts are ready. Each post will appear on the
// Blog listing page and have its own detail route (/blog/:id).
//
// Suggested fields: id, title, date, summary, content (markdown string)
// ─────────────────────────────────────────────────────────────────────────────
const BLOG_POSTS = [];

// ─────────────────────────────────────────────────────────────────────────────
// PROVIDER
// Wraps the app and exposes all portfolio data + the dark-mode toggle via
// React context. Consumers import `PortfolioContext` and call `useContext`.
// ─────────────────────────────────────────────────────────────────────────────
export const PortfolioProvider = ({ children }) => {
  // Persist dark-mode preference across sessions
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const value = {
    portfolioData: PORTFOLIO_INFO,
    projectsData: PROJECTS,
    experienceData: EXPERIENCE,
    blogPosts: BLOG_POSTS,
    darkMode,
    setDarkMode,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
