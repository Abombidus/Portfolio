import "./data.css";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import EcommerceL from "../assets/EcommerceL.jpeg";
import Light from "../assets/Light.jpeg";
import Resto from "../assets/Resto.jpeg";
import NoteApp from "../assets/NoteApp.jpeg";
import WaClone from "../assets/WaClone.jpeg";
import A from "../assets/A.JPG";

import Moi from "../assets/Moi.jpg";
import Avatar01 from "../assets/Images/Avatar01.AVIF";
import Avatar02 from "../assets/Images/Avatar02.AVIF";
import Avatar03 from "../assets/Images/Avatar03.JPG";
import Book from "../assets/Book.WEBP";

import Girl00 from "../assets/Images/Girl00.JPG";
import Girl01 from "../assets/Images/Girl01.JPG";

import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

// Portfolio
export const data = [
  {
    id: 1,
    image: Resto,
    title: " React Restaurant Application",
    github: "https://github.com/abombidus/resto-App.git",
    dribbble: "https://dribbble.com/Alien_pixel",
  },
  {
    id: 2,
    image: Light,
    title: "Energie Management System",
    github: "https://github.com/abombidus/Mama_fanta-.git",
    dribbble: "https://dribbble.com/shots/16673715-Crypto",
  },
  {
    id: 3,
    image: A,
    title: "Durable Impact Portfolio",
    github: "https://github.com/Abombidus/durable-impact-portfolio.git",
    dribbble: "https://dribbble.com/shots/16673715-Crypto",
  },
  {
    id: 4,
    image: NoteApp,
    title: "React Note Application",
    github: "https://github.com/Abombidus/noteApp.git",
    dribbble: "https://dribbble.com/shots/16673715-Crypto",
  },
  {
    id: 5,
    image: EcommerceL,
    title: "E-commerce Application Logic",
    github: "https://github.com/Abombidus/ecommerce_js_fundamentals.git",
    dribbble: "https://dribbble.com/shots/16673715-Crypto",
  },
  {
    id: 6,
    image: WaClone,
    title: "WhatsApp Clone Application",
    github: "https://github.com/Abombidus/Whatsap.git",
    dribbble: "https://dribbble.com/shots/16673715-Crypto",
  },
];

// Contacts Utils
export const table = [
  {
    id: 0,
    logo: <IoIosMail className="contact-option-icon" id="email-logo" />,
    title: "E-mail",
    detail: "abombidus@gmail.com",
    link: "mailto:abombidus@gmail.com",
  },
  {
    id: 1,
    logo: <FaFacebook className="contact-option-icon" id="facebook-logo" />,
    title: "Facebook",
    detail: "abombidusPortfolio",
    link: "https://facebook.com/Mario.Abo.2025",
  },
  {
    id: 2,
    logo: <BsWhatsapp className="contact-option-icon" id="whatsapp-logo" />,
    title: "WhatsApp",
    detail: "+123456789",
    link: "https://wa.me/237695833316",
  },
];

// Testimonials info
export const info = [
  {
    id: 0,
    profile: Moi,
    userName: "Abo Mbidus",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
  },
  {
    id: 1,
    profile: Avatar01,
    userName: "Victor Edward",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
  },
  {
    id: 2,
    profile: Avatar02,
    userName: "Marco alphonse",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
  },
  {
    id: 3,
    profile: Avatar03,
    userName: "Daniel allison",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
  },
  {
    id: 4,
    profile: Girl01,
    userName: "Samantha James",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
  },
  {
    id: 5,
    profile: Book,
    userName: "Donald Duck",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
  },
  {
    id: 6,
    profile: Girl00,
    userName: "Ani antoinette",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
  },
];

// Experience Session Frontend & Backend
export const frontEndTable = [
  { id: 0, language: "Flutter", experience: "Experience" },
  { id: 1, language: "JavaScript", experience: "Experienced" },
  { id: 2, language: "React Native", experience: "Experienced" },
  { id: 3, language: "Tailwind", experience: "Intermediate" },
  { id: 4, language: "Material UI", experience: "Experienced" },
  { id: 5, language: "Angular", experience: "Experienced" },
];

export const backEndTable = [
  { id: 0, language: "Node Js", experience: "Experience" },
  { id: 1, language: "Express Js", experience: "Experienced" },
  { id: 3, language: "Nest Js", experience: "Experienced" },
  { id: 4, language: "SpringBoot", experience: "Beginner" },
  { id: 5, language: "Django", experience: "Intermediate" },
  { id: 6, language: "PostgreSQL", experience: "Intermediate" },
];

// About Items
export const items = [
  {
    id: 1,
    icon: <FaAward className="card-icon" />,
    h5: "Experience",
    small: "3+ Years Working",
  },
  {
    id: 2,
    icon: <FiUsers className="card-icon" />,
    h5: "Client",
    small: "20+ World Wide",
  },
  {
    id: 3,
    icon: <VscFolderLibrary className="card-icon" />,
    h5: "Projects",
    small: "15+ Completed",
  },
];

// About Paragraph
export const paragraph = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos
            modi aliquid esse necessitatibus amet hic maxime aut itaque pariatur
            fugiat adipisci dolores saepe incidunt tempore, voluptas explicabo
            minus ad!`;

// Services List
export const serviceList = [
  {
    id: 0,
    paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
  },
  {
    id: 1,
    paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
  },
  {
    id: 2,
    paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
  },
  {
    id: 3,
    paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
  },
  {
    id: 4,
    paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
  },
  {
    id: 5,
    paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
  },
];
