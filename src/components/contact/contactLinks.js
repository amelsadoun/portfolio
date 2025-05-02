import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaBehance, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactLinks = [
  {
    name: "Location",
    icon: FaMapMarkerAlt,
    text: "Algiers, Algeria",
    link: null,
  },
  {
    name: "Email",
    icon: FaEnvelope,
    text: "amelsadoun.b@gmail.com",
    link: "mailto:amelsadoun.b@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/sadoun-amel/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/amelsadoun",
  },
  {
    name: "Behance",
    icon: FaBehance,
    link: "https://www.behance.net/amelsadoun",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/amel.sadoun.50/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/hopingwme/",
  },
];

export default contactLinks;
