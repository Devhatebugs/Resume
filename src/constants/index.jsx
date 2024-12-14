import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { GrAnnounce } from "react-icons/gr";
import { FaCameraRetro } from "react-icons/fa6";
import { MdVideoCameraFront } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { BiVideoPlus } from "react-icons/bi";
import { MdOutlineImportantDevices } from "react-icons/md";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "AYUSH SHARMA",
  greet: "Hello there!",
  description:
    "Marketing professional with 2 years of agency experience in videography, content creation, and client management. Skilled in crafting engaging content and delivering impactful campaigns to boost brand visibility and drive results.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Hospitality",
    description:
      "A video created by me, showcasing the vibrant Rajasthani culture, traditional flavors, and lively performances of Sayaji's unforgettable food fest, Rangilo Rajasthan.",
    image: projectImage1,
    instagramLink: "https://www.instagram.com/reel/C79VksHtzfz/",
  },
  {
    id: 2,
    name: "Hospitality",
    description:
      "A video created by me, capturing the vibrant essence of Sayaji's food fest, 'Mango Madness,' celebrating the king of fruits with delicious mango-themed dishes and cheerful vibes.",
    image: projectImage2,
    instagramLink: "https://www.instagram.com/reel/C6_NAy1vu7x/",
  },
  {
    id: 3,
    name: "Hospitality",
    description:
      "A video crafted by me, highlighting Sayaji's heartfelt appreciation for the strength, resilience, and contributions of men on international men's day",
    image: projectImage3,
    instagramLink: "https://www.instagram.com/reel/Cz0S5efrY5P/",
  },
  {
    id: 4,
    name: "Gymnasium",
    description:
      "A Trending video created by me, capturing the energy and spirit of BodSquad, designed to engage and inspire their Instagram audience with trending content.",
    image: projectImage4,
    instagramLink: "https://www.instagram.com/reel/DDhKTBaylxs/",
  },
  {
    id: 5,
    name: "Automobiles",
    description:
      "A video showcasing the latest offerings and vibrant atmosphere of Sparsh Automobiles, designed to engage and connect with their Instagram audience.",
    image: projectImage5,
    instagramLink: "https://www.instagram.com/reel/CxVk567tAfo/",
  },
  {
    id: 6,
    name: "Restaurants",
    description:
      "A video highlighting the delicious offerings and inviting ambiance of Shikhar Restaurant, crafted to captivate and engage their Instagram audience.",
    image: projectImage6,
    instagramLink: "https://www.instagram.com/reel/C60mdziSOsK/",
  },
  {
    id: 7,
    name: "Cafe & Bar",
    description:
      "A fun and quirky meme video created for Elude, designed to entertain and engage their Instagram audience with a touch of humor.",
    image: projectImage1,
    instagramLink: "https://www.instagram.com/reel/C_vGPUbPo6H/",
  },
  {
    id: 8,
    name: "Cafe & Bar",
    description:
      "A high-energy video capturing the vibrant atmosphere of Elude's techno party, crafted to showcase the excitement and rhythm, engaging their Instagram audience.",
    image: projectImage2,
    instagramLink: "https://www.instagram.com/reel/C_dAPlVvgXk/",
  },
  {
    id: 9,
    name: "Restaurants",
    description:
      "A video highlighting Desi Thaat Veg's CSR activity, showcasing their commitment to the community and creating a positive impact, crafted to inspire and engage their Instagram audience.",
    image: projectImage3,
    instagramLink: "https://www.instagram.com/reel/C_XP6ixyQLk/",
  },
  {
    id: 10,
    name: "Education",
    description:
      "A video summarizing the highlights of an event at Anjaneya University, capturing key moments and engaging the audience with a dynamic recap for their Instagram page.",
    image: projectImage4,
    instagramLink: "https://www.instagram.com/reel/DCKK4qjSOGS/",
  },
  {
    id: 11,
    name: "Personal Blog",
    description:
      "A captivating video showcasing the vibrant sights and sounds of Mumbai, created for my Instagram page to share the city's energy and charm with my audience.",
    image: projectImage5,
    instagramLink: "https://www.instagram.com/reel/DAcR9xCIKnw/",
  },
  {
    id: 12,
    name: "Personal Blog",
    description:
      "A creative video made for my Instagram page, showcasing my unique style and personality, designed to engage and connect with my audience.",
    image: projectImage6,
    instagramLink: "https://www.instagram.com/reel/DDjkIDdNrPG/",
  },
];

export const BIO = [
  "I completed my schooling at Kendriya Vidyalaya in 2022, where I cultivated a strong interest in videography and storytelling.",
  "In 2023, I joined Creative Nest, a thriving platform where I developed my skills in videography, video editing, content writing, and client management.",
  "With two years of experience at Creative Nest, I specialize in creating engaging multimedia content and managing client relationships to execute successful marketing campaigns.",
  "I combine creative vision with strategic thinking to enhance brand visibility and deliver measurable results. My commitment lies in crafting impactful visuals and narratives while ensuring seamless communication and exceptional client satisfaction.",
];

export const SKILLS = [
  {
    icon: <GrAnnounce  className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Social Media Marketing",
    experience: "2+ years",
  },
  {
    icon: <FaCameraRetro className="text-4xl text-white lg:text-5xl" />,
    name: "Event Photography",
    experience: "2+ years",
  },
  {
    icon: <MdVideoCameraFront className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Event Videography",
    experience: "2+ years",
  },
  {
    icon: <TbTargetArrow className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Marketing",
    experience: "2+ years",
  },
  {
    icon: <BiVideoPlus className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Video Editing",
    experience: "2+ years",
  },
  {
    icon: <MdOutlineImportantDevices className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Digital Marketing",
    experience: "2+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Content Curator",
    company: "Creative Nest Media Solutions",
    duration: "July 2023 - Present",
    description:
      "As part of the Creative Nest team, I specialize in managing shoots, editing high-quality videos and visuals, and providing top-notch client servicing to ensure every project meets our clients' needs and expectations.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Arts",
    institution: "Govt. J. Yoganandam Chhattisgarh College ",
    duration: "September 2022 - June 2025",
    description:
      "I have completed my Bachelor's in Arts from Govt. J. Yoganandam Chhattisgarh College, building a solid foundation in Videography and Content Creation.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/Ayush.2603",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/ayxsh._.17/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ayush-sharma-bb292b250/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
