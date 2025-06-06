import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
//import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
//import project9 from "../assets/project9.webp";

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
    title: "Uber-Clone",
    description:
      "Building a ride-booking platform with the MERN stack, integrating real-time location tracking, fare calculation, and user authentication.",
    imgSrc: project1,
    link: "https://github.com/Parthsingh14/UBER-Clone.git",
  },
  {
    id: 2,
    title: "AI-Code Rev",
    description:
      "AI CodeRev is an AI-powered code review tool that analyzes and provides insights on code quality, best practices, and optimizations.",
    imgSrc: project2,
    link: "https://ai-code-reviewer-frontend.onrender.com/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://parthcodes.netlify.app",
  },
  {
    id: 4,
    title: "Quick-Shop",
    description:
      "It's a dynamic e-commerce platform featuring advanced product search, filtering, and seamless user experience.",
    imgSrc: project4,
    link: "https://quickk-shop.netlify.app/",
  },
  // {
  //   id: 5,
  //   title: "Password-Manager",
  //   description: "A task management tool to organize and prioritize work.",
  //   imgSrc: project5,
  //   link: "https://example.com/task-management-tool",
  // },
  {
    id: 6,
    title: "Message-Encryption-Decryption",
    description:
      "It's a secure tool that converts text into emojis for encryption and decrypts them back to text using ASCII values.",
    imgSrc: project6,
    link: "https://parthsingh14.github.io/Text-to-Emoji/",
  },
  {
    id: 7,
    title: "Drum-kit-website",
    description: "It's an interactive web app that lets users play drum sounds using keyboard keys or mouse clicks.",
    imgSrc: project7,
    link: "https://parthsingh14.github.io/Drum-kit-website/",
  },
  {
    id: 8,
    title: "Quiz-game",
    description: "it's a fun and interactive web app that tests users' knowledge with multiple-choice questions and real-time score tracking.",
    imgSrc: project8,
    link: "https://parthsingh14.github.io/Quiz-game.github.io/",
  },
];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "Google",
    role: "Software Engineer",
    year: "12/2023 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  {
    company: "Facebook",
    role: "Frontend Developer",
    year: "01/2021 - 11/2023",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/_.parth._19?igsh=MXJmMWZ6ZXEwcWZ1Mw==",
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
