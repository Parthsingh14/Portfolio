import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";


import CodeRev from "../assets/CodeRev.png";
import Mindscribe from "../assets/Mindscribe.png";
import QuickShop from "../assets/QuickShop.png";
import TexttoEmoji from "../assets/TexttoEmoji.png";
import Quiz from "../assets/Quiz.png"


export const LINKS = [
  { id: "home", name: "home" },
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "JAVA,React,Node,MongoDB,Express,Redux,Tailwind,Postman,Framer-Motion,SQL,";

export const PROJECTS = [
  {
    id: 1,
    title: "MindScribe",
    description:
      "Building a ride-booking platform with the MERN stack, integrating real-time location tracking, fare calculation, and user authentication.",
    imgSrc: Mindscribe,
    link: "https://mindscribe-blogify.vercel.app/",
  },
  {
    id: 2,
    title: "AI-Code Rev",
    description:
      "AI CodeRev is an AI-powered code review tool that analyzes and provides insights on code quality, best practices, and optimizations.",
    imgSrc: CodeRev,
    link: "https://ai-code-reviewer-frontend.onrender.com/",
  },
  {
    id: 4,
    title: "Quick-Shop",
    description:
      "It's a dynamic e-commerce platform featuring advanced product search, filtering, and seamless user experience.",
    imgSrc: QuickShop,
    link: "https://quickk-shop.netlify.app/",
  },
  {
    id: 5,
    title: "Message-Encryption-Decryption",
    description:
      "It's a secure tool that converts text into emojis for encryption and decrypts them back to text using ASCII values.",
    imgSrc: TexttoEmoji,
    link: "https://parthsingh14.github.io/Text-to-Emoji/",
  },
  {
    id: 6,
    title: "Quiz-game",
    description: "it's a fun and interactive web app that tests users' knowledge with multiple-choice questions and real-time score tracking.",
    imgSrc: Quiz,
    link: "https://parthsingh14.github.io/Quiz-game.github.io/",
  },
];

export const ABOUT =
  "I am an AI-driven Full Stack Developer with a strong focus on building scalable, efficient, and user-friendly web applications. Skilled in both frontend and backend development, I work extensively with technologies like React, Next.js, Node.js, and Express, along with databases such as MongoDB, PostgreSQL, and MySQL. With hands-on experience in AI integrations and modern tools like Docker, Redis, and FastAPI, I bring innovation and adaptability to every project. Passionate about continuous growth, I thrive on learning emerging technologies and applying them to craft impactful digital solutions.";


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/parth.noir?igsh=bWs4bHNjNTNpdnBw",
    icon: <FaInstagram size={26} className="transition duration-300 hover:text-lime-300 hover:opacity-80" />,
  },
  {
    href: "https://github.com/Parthsingh14",
    icon: <FaGithub size={26} className="transition duration-300 hover:text-lime-300 hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/parth-singh-5797a424a",
    icon: <FaLinkedin size={26} className="transition duration-300 hover:text-lime-300 hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "parthsingh503@gmail.com",
  phone: "+91-6394057423",
};
