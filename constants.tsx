import { Project, Skill } from './types';
import { Mail, Phone, Code, Layout, Database, Server, Smartphone, Monitor } from 'lucide-react';

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

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Bio-Vault ATM",
    description: "A secure and intuitive banking simulation application focusing on user authentication and transaction management.",
    image: "https://i.ibb.co/5gf5QVrK/bio-vault-atm-netlify-app.png",
    link: "https://bio-vault-atm.netlify.app/",
    tags: ["React", "Security", "Finance", "UI/UX"]
  },
  {
    id: 2,
    title: "Nexus Chat",
    description: "A real-time messaging platform powered by modern web technologies, enabling seamless communication.",
    image: "https://i.ibb.co/TMQPD3Hw/aistudio-google-com-apps-drive-1-K3-Ca-Cv-Hnj-7kp-Nhn-KGPRa-Noupt-ZV4pe-D-show-Preview-true-show-Ass.png",
    link: "https://nexus-chat-live.netlify.app/",
    tags: ["AI", "Real-time", "Chat", "Socket.io"]
  },
  {
    id: 3,
    title: "Thabang BuyXSell Shop",
    description: "An e-commerce solution for buying and selling products, featuring a dynamic cart and product management system.",
    image: "https://i.ibb.co/Zz7R4YdG/thabang-shop-netlify-app.png",
    link: "https://thabang-shop.netlify.app/",
    tags: ["E-commerce", "Redux", "Stripe", "Responsive"]
  },
  {
    id: 4,
    title: "Child Care Donation",
    description: "A charity platform connecting donors with child care centers in Africa to facilitate easy and transparent giving.",
    image: "https://i.ibb.co/rGTqT4j2/child-care-africa-netlify-app.png",
    link: "https://child-care-africa.netlify.app/",
    tags: ["Non-profit", "Forms", "Payment Gateway", "Social Impact"]
  }
];

export const SKILLS: Skill[] = [
  { name: "ReactJS", level: 90, icon: "Code" },
  { name: "TypeScript", level: 85, icon: "Code" },
  { name: "HTML5/CSS3", level: 95, icon: "Layout" },
  { name: "Bootstrap & Tailwind", level: 90, icon: "Layout" },
  { name: "jQuery", level: 80, icon: "Code" },
  { name: "UI/UX Design", level: 75, icon: "Monitor" },
];