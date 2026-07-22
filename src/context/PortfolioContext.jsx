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
    "Next.js",
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
      id: 'txdot-its-site',
      title: 'TxDOT ITS Site',
      description: 'A modernized, map-first traffic operations platform that unifies statewide and district ITS monitoring with real-time data and legacy route compatibility.',
      fullDescription: 'The TxDOT ITS Site is a production transportation operations platform built to give operators a unified, real-time view of statewide and district Intelligent Transportation Systems data. It consolidates roadway assets and events such as cameras, dynamic message signs, incidents, lane closures, and flood stations into a single map-first experience. The platform combines an ASP.NET Core backend with a React single-page frontend, injecting runtime configuration for district or statewide scope and preserving critical legacy workflows during modernization.',
      challenges: 'A key challenge was modernizing a legacy district-focused experience without disrupting active operations. The system needed to support legacy URLs and route patterns while transitioning users to a React SPA model, and also maintain responsive behavior under high-frequency real-time updates. Additional complexity came from sharing one codebase across district and statewide modes, each with different filtering semantics and default behaviors.',
      results: 'The final platform delivers a unified operational view across district and statewide contexts, with improved maintainability and reliability through modern client/server architecture. Legacy compatibility paths reduced rollout risk, while real-time updates and filter-driven map workflows improved speed-to-information for operators handling active roadway events.',
      gradient: 'from-cyan-600 to-blue-700',
      tech: ['ASP.NET Core', '.NET 8', 'React 18', 'Redux Toolkit', 'RTK Query', 'SignalR', 'Leaflet', 'Webpack'],
      github: null,
      live: 'https://its.txdot.gov/',
      cardImage: '/projects/txdot-its-site/statewide.png',
      images: [
        { src: '/projects/txdot-its-site/statewide.png', caption: 'ITS Site Home page showing statewide devices' },
        { src: '/projects/txdot-its-site/statewide-cameras.png', caption: 'Filter site to display statewide cameras by roadway' },
        { src: '/projects/txdot-its-site/statewide-dms.png', caption: 'Filter site to display statewide dynamic message signs by roadway' },
        { src: '/projects/txdot-its-site/map-popup-laneClosure.png', caption: 'Map navigation and select an icon to display device information' },
      ]
    },
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
      title: 'CourtSide (Personal Project)',
      description: 'A modern NBA game day fan hub with live scores, game breakdowns, player search, standings, and resilient API fallbacks.',
      fullDescription: 'CourtSide is a Next.js 14 App Router application built as a complete NBA game day experience. It includes live and upcoming game views, detailed matchup pages, conference standings, and real-time player search. The app uses server-side route handlers to normalize BallDontLie API data, protects API access from the client, and supports full light/dark mode with a persistent theme toggle.',
      challenges: 'The biggest challenge was delivering a reliable real-time-like experience on a rate-limited free API tier. I designed server-side normalization and per-route revalidation, then added transparent mock-data fallbacks so users always get a valid response even when the API is unavailable or throttled.',
      results: 'The final app delivers a fast, responsive fan hub across desktop and mobile, with stable UX under API failures, a clear architecture for future expansion, and clean deployment on Vercel.',
      gradient: 'from-orange-500 to-amber-600',
      tech: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Route Handlers', 'ISR', 'BallDontLie API', 'Vercel'],
      github: 'https://github.com/alexg1299/nba-fan-hub',
      live: 'https://courtside-jade.vercel.app/',
      cardImage: '/projects/courtside/Home.png',
      images: [
        { src: '/projects/courtside/Home.png', caption: 'Home page showing live/upcoming games, scores and standings' },
        { src: '/projects/courtside/HomeDarkMode.png', caption: 'Home page as Dark Mode' },
        { src: '/projects/courtside/Standings.png', caption: 'Conference Standings page showing team rankings and records' },
        { src: '/projects/courtside/Teams.png', caption: 'Teams page showing all NBA teams with search functionality' },
        { src: '/projects/courtside/TeamSpur.png', caption: 'Team page showing detailed information for the San Antonio Spurs' },
        { src: '/projects/courtside/SpurPlayer.png', caption: 'Player page showing detailed information for a specific player, with search functionality' },
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
//   companyLogo      — path to company logo shown on experience cards
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
      companyLogo: '/projects/swri-logo.png',
      date: "Oct 2023 - Present",
      description: "Leading full-stack transportation platform delivery across TxDOT ITS Site and New England Compass, modernizing systems with React 18, TypeScript, and ASP.NET Core 8 while supporting real-time operations for statewide and multi-state DOT teams.",
      fullDescription: "As a Senior Software Engineer at Southwest Research Institute, I lead full-stack engineering and modernization across two production traffic management initiatives: TxDOT ITS Site and New England Compass. On TxDOT ITS Site, I am helping migrate and scale the platform with React 18, TypeScript, and ASP.NET Core 8 ahead of the 2026 World Cup, delivering shared architecture for one statewide deployment and 25 district sites from a single codebase. On New England Compass, I deliver real-time monitoring and device-control capabilities for transportation operators in Vermont, New Hampshire, and Maine. Across both efforts, I design shared API and data-access patterns, build SignalR-powered real-time infrastructure, run client demos and acceptance testing, and provide production support for mission-critical systems.",
      responsibilities: [
        "Leading TxDOT's ITS platform modernization to React 18, TypeScript, and ASP.NET Core 8 for a statewide site and 25 district sites ahead of the 2026 World Cup",
        "Consolidating district data access into a shared RTK Query and typed configuration architecture spanning 6 asset domains and 13+ UI modules",
        "Architecting real-time SignalR infrastructure with 60+ WebSocket hubs streaming live traffic, weather, and event data to transportation operators",
        "Building C#/.NET integrations for external systems including wrong-way vehicle detection alerts and camera-status event streaming",
        "Delivering end-to-end features for multi-state traffic management platforms in React, TypeScript, and C#/.NET for state DOT operators",
        "Spearheading migration from a monolithic Windows application to dockerized microservices while helping transition the team from waterfall to agile",
        "Establishing NUnit and Jest testing standards across ATMS applications to improve production reliability",
        "Leading client demos and acceptance test procedures, mentoring junior engineers, and providing 24/7 on-call support for critical production systems"
      ],
      achievements: [
        "Built and architected New England Compass, a production traffic management platform serving operators across three states",
        "Led monolith-to-microservices migration, modernizing a legacy Windows application into a dockerized architecture",
        "Delivered a configurable ITS platform architecture that powers one statewide TxDOT site and 25 district sites from a shared codebase",
        "Reduced endpoint surface area by 25% by consolidating district data access into shared RTK Query services and typed configuration",
        "Built real-time SignalR infrastructure with 60+ hubs to stream operational traffic, weather, and event data",
        "Implemented secure external integrations for Avigilon wrong-way detection and Claris camera event streaming, cutting device-to-device communication time by about 80%",
        "Established division-wide NUnit and Jest testing standards while supporting production systems with fast bug resolution and SLA-backed on-call coverage"
      ],
      tech: ["React 18", "TypeScript", "ASP.NET Core 8", "C#/.NET", "RTK Query", "SignalR", "WebSockets", "Docker", "REST APIs", "OpenAPI", "NUnit", "Jest", "Microservices", "Agile"],
      relatedProjects: [
        { id: 'txdot-its-site', title: 'TxDOT ITS Site' },
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
