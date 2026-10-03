// src/data/portfolioData.ts

import oc1 from '../assets/system-occusync/oc1.webp';
import oc2 from '../assets/system-occusync/oc2.webp';
import oc3 from '../assets/system-occusync/oc3.webp';
import oc4 from '../assets/system-occusync/oc4.webp';
import oc5 from '../assets/system-occusync/oc5.webp';

import cg1 from '../assets/system-circuitgo/cg1.webp';
import cg2 from '../assets/system-circuitgo/cg2.webp';
import cg3 from '../assets/system-circuitgo/cg3.webp';
import cg4 from '../assets/system-circuitgo/cg4.webp';
import cg5 from '../assets/system-circuitgo/cg5.webp';

import st1 from '../assets/system-studioPortfolio/st1.webp';
import st2 from '../assets/system-studioPortfolio/st2.webp';
import st3 from '../assets/system-studioPortfolio/st3.webp';
import st4 from '../assets/system-studioPortfolio/st4.webp';
import st5 from '../assets/system-studioPortfolio/st5.webp';

import el1 from '../assets/system-ecolegacy/el1.webp';
import el2 from '../assets/system-ecolegacy/el2.webp';
import el3 from '../assets/system-ecolegacy/el3.webp';
import el4 from '../assets/system-ecolegacy/el4.webp';
import el5 from '../assets/system-ecolegacy/el5.webp';

export const itProjects = [
  {
    id: "occusync",
    title: "OccuSync: Service Management and Marketplace",
    category: "SaaS Platform",
    description: "A full-stack SaaS platform connecting customers with service technicians to streamline service requests and scheduling. Implemented with role-based access control and JWT authentication.",
    techStack: ["React", "Vite", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    images: [oc1, oc2, oc3, oc4, oc5],
    link: "https://github.com/Zorbrist/OccuSync",
    linkType: "github"
  },
  {
    id: "circuitgo",
    title: "CircuitGo: Driving Game Simulator",
    category: "Game & Simulation",
    description: "A 3D driving game simulator designed for the 'Kurikulum Pendidikan Pemandu 02' driver education module, featuring realistic vehicle physics and environment modeling.",
    techStack: ["Unity", "C#", "Blender", "WebGL"],
    images: [cg1, cg2, cg3, cg4, cg5],
    link: "https://play.unity.com/en/games/7eb0fe61-50fa-43c5-b473-f5e17f439eaf/circuitgo",
    linkType: "unity"
  },
  {
    id: "azfar-arts",
    title: "Azfar Arts Studio Portfolio",
    category: "Web Development",
    description: "A responsive digital portfolio website developed to centralize brand presence and drive business inquiries for a commercial photography studio.",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    images: [st1, st2, st3, st4, st5],
    link: "https://siesta03.github.io/myProject2/AzfarArtsStudioWebsite/index.html",
    linkType: "website"
  },
  {
    id: "ecolegacy",
    title: "EcoLegacy: Cooling & Conservation",
    category: "Web Development",
    description: "An informative web platform focused on environmental conservation and cooling technologies, aimed at community education.",
    techStack: ["HTML", "CSS", "JavaScript"],
    images: [el1, el2, el3, el4, el5],
    link: "https://siesta03.github.io/ELWeb2/EcoLegacyFinalize/index.html",
    linkType: "website"
  },
  {
    id: "offline-pocket",
    title: "Offline Pocket (In-Game Store)",
    category: "E-Commerce",
    description: "A mock e-commerce system for in-game top-up purchases and services, featuring a fully responsive front-end interface and secure transaction simulation.",
    techStack: ["PHP", "SQL", "JavaScript", "CSS"],
    images: ["/images/offline-1.webp", "/images/offline-2.webp", "/images/offline-3.webp"],
    link: null, // No link for this project
    linkType: null
  }
];

// ... keep your photographyWork array here as well