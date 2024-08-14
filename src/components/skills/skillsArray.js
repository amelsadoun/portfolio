import vite_icon from "../svg/frontend/vite.svg";
import tailwind_icon from "../svg/frontend/tailwind.svg";
import express_icon from "../svg/backend/express.svg";
import nodejs_icon from "../svg/backend/nodejs.svg";
import react_icon from "../svg/frontend/react.svg";
import reactnative_icon from "../svg/frontend/react-native.svg";
import gsap_icon from "../svg/frontend/gsap.svg";
import illustrator_icon from "../svg/design/illustrator.svg";
import figma_icon from "../svg/design/figma.svg";

const skillsArray = {
  frontend: [
    { name: "React js", icon: react_icon },
    { name: "React Native", icon: reactnative_icon },
    { name: "Tailwind", icon: tailwind_icon },
    { name: "Vite", icon: vite_icon },
    { name: "GSAP", icon: gsap_icon },
  ],

  backend: [
    { name: "Express js", icon: express_icon },
    { name: "Node js", icon: nodejs_icon },
  ],

  design: [
    {
      name: "Adobe Illustrator",
      icon: illustrator_icon,
    },
    {
      name: "Figma",
      icon: figma_icon,
    },
  ],
};

export default skillsArray;
