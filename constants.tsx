import { Project, Skill } from './types';
import { Mail, Phone, Code, Layout, Database, Server, Smartphone, Monitor, Github, Linkedin, Briefcase } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Thabang Frans Mojapelo",
  role: "Software Developer",
  email: "mojapelot2@gmail.com",
  phone: "0723481158",
  location: "South Africa",
  bio: "I am a passionate developer with a knack for building robust and creative web applications. With expertise in the full stack development lifecycle, I turn complex problems into elegant interface designs.",
  profileImage: "https://i.ibb.co/nMcK7zVr/IMG-20250920-153812.jpg", 
  certificateImage: "https://i.ibb.co/VYz1WK9s/9a9db522-37fe-4342-a3c7-13e6fbdb611d.png"
};

export const SOCIAL_LINKS = [
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/thabang-frans-mojapelo-5a9166370", 
    icon: "Linkedin" 
  },
  { 
    name: "GitHub", 
    url: "https://github.com/FrancoBeatz", 
    icon: "Github" 
  },
  { 
    name: "Upwork", 
    url: "https://www.upwork.com/freelancers/~01091ebb028d2da831?mp_source=share", 
    icon: "Briefcase" 
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Bio-Vault ATM",
    description: "A sophisticated banking simulation application focusing on rigorous user authentication and secure transaction management. This project demonstrates complex state management, PIN verification logic, and a dynamic dashboard for viewing account balances and transaction history in real-time.",
    image: "https://i.ibb.co/5gf5QVrK/bio-vault-atm-netlify-app.png",
    link: "https://bio-vault-atm.netlify.app/",
    tags: ["React", "Security", "Finance", "UI/UX", "State Management", "Authentication"]
  },
  {
    id: 2,
    title: "Nexus Chat",
    description: "An advanced real-time messaging platform powered by modern web technologies. Nexus Chat enables seamless communication with features like live typing indicators, online status updates, and persistent chat history, all wrapped in a responsive, glassmorphism-inspired interface.",
    image: "https://i.ibb.co/TMQPD3Hw/aistudio-google-com-apps-drive-1-K3-Ca-Cv-Hnj-7kp-Nhn-KGPRa-Noupt-ZV4pe-D-show-Preview-true-show-Ass.png",
    link: "https://nexus-chat-live.netlify.app/",
    tags: ["AI Integration", "Real-time", "Chat System", "Socket.io", "React", "Node.js"]
  },
  {
    id: 3,
    title: "Thabang BuyXSell Shop",
    description: "A full-featured e-commerce solution designed for buying and selling products. It features a dynamic shopping cart, product categorization, and a smooth checkout process. The application utilizes Redux for global state management and Stripe integration for secure payments.",
    image: "https://i.ibb.co/Zz7R4YdG/thabang-shop-netlify-app.png",
    link: "https://thabang-shop.netlify.app/",
    tags: ["E-commerce", "Redux Toolkit", "Stripe API", "Responsive Design", "Product Management"]
  },
  {
    id: 4,
    title: "Child Care Donation",
    description: "A compassionate charity platform designed to connect donors with child care centers in Africa. This project facilitates easy and transparent giving through secure payment gateways, detailed cause descriptions, and impact reporting, helping to bridge the gap for children in need.",
    image: "https://i.ibb.co/rGTqT4j2/child-care-africa-netlify-app.png",
    link: "https://child-care-africa.netlify.app/",
    tags: ["Non-profit", "React Forms", "Payment Gateway", "Social Impact", "Crowdfunding", "Web Design"]
  }
];

export const SKILLS: Skill[] = [
  { 
    name: "ReactJS", 
    level: 90, 
    icon: "Code",
    description: "Expertise in Hooks, Context API, Redux Toolkit, and Next.js for server-side rendering."
  },
  { 
    name: "TypeScript", 
    level: 85, 
    icon: "Code",
    description: "Strong command of static typing, interfaces, generics, and utility types for robust codebases."
  },
  { 
    name: "HTML5/CSS3", 
    level: 95, 
    icon: "Layout",
    description: "Mastery of semantic HTML, CSS Grid/Flexbox, animations, and preprocessors like SASS."
  },
  { 
    name: "Bootstrap & Tailwind", 
    level: 90, 
    icon: "Layout",
    description: "Rapid UI development using utility-first frameworks and customizable component libraries."
  },
  { 
    name: "jQuery", 
    level: 80, 
    icon: "Code",
    description: "Proficient in DOM manipulation, event handling, and AJAX for legacy application support."
  },
  { 
    name: "UI/UX Design", 
    level: 75, 
    icon: "Monitor",
    description: "Creating user-centric designs, wireframes, and high-fidelity prototypes using Figma."
  },
];