// FieldOps Images
import fieldOpsLogin from "../../assets/preview-images/fieldops/login.png";
import fieldOpsProfile from "../../assets/preview-images/fieldops/profile.png";
import fieldOpsStart from "../../assets/preview-images/fieldops/start.png";
import fieldOpsTasks from "../../assets/preview-images/fieldops/tasks.png";
import fieldOpsTasks2 from "../../assets/preview-images/fieldops/tasks2.png";
import fieldOpsWelcome from "../../assets/preview-images/fieldops/welcome.png";

// Hackflow Images
import hackflowHome from "../../assets/preview-images/hackflow/home.png";
import hackflowTeams from "../../assets/preview-images/hackflow/teams.png";

// Smartoi Images
import smartoiPreview1 from "../../assets/preview-images/smartoi/preview1.jpg";
import smartoiPreview2 from "../../assets/preview-images/smartoi/preview2.jpg";
import smartoiPreview3 from "../../assets/preview-images/smartoi/preview3.jpg";
import smartoiWelcome from "../../assets/preview-images/smartoi/welcome.jpg";

// Smartoi Dark Mode Images
import smartoiDarkAbout from "../../assets/preview-images/smartoi/darkmode/about.jpg";
import smartoiDarkAddDevice from "../../assets/preview-images/smartoi/darkmode/add device.jpg";
import smartoiDarkDeviceInfo from "../../assets/preview-images/smartoi/darkmode/deviceinfo.jpg";
import smartoiDarkHome from "../../assets/preview-images/smartoi/darkmode/home.jpg";
import smartoiDarkSettings from "../../assets/preview-images/smartoi/darkmode/settings.jpg";

// Smartoi Light Mode Images
import smartoiLightAbout from "../../assets/preview-images/smartoi/lightmode/about.jpg";
import smartoiLightAddDevice from "../../assets/preview-images/smartoi/lightmode/add device.jpg";
import smartoiLightAddDevice2 from "../../assets/preview-images/smartoi/lightmode/add device2.jpg";
import smartoiLightDeviceInfo from "../../assets/preview-images/smartoi/lightmode/deviceinfo.jpg";
import smartoiLightDeviceInfo2 from "../../assets/preview-images/smartoi/lightmode/deviceinfo2.jpg";
import smartoiLightHome from "../../assets/preview-images/smartoi/lightmode/home.jpg";
import smartoiLightHome2 from "../../assets/preview-images/smartoi/lightmode/home2.jpg";
import smartoiLightSettings from "../../assets/preview-images/smartoi/lightmode/settings.jpg";

//Project cover images
import fieldOps from "../../assets/project-images/fieldOps.png";
import hackflow from "../../assets/project-images/hackflow.png";
import smartoi from "../../assets/project-images/smartoi.png";
import eventech from "../../assets/project-images/eventech.png";

export const projectsArray = [
  {
    name: "FieldOps",
    description:
      "FieldOps is a mobile app for on-field task management, developed during a hackathon. It allows companies to track their workers and enables workers to check their tasks, mark them as complete, and manage their workload. I contributed to the front-end development and designed the logo.",
    image: fieldOps,
    previewImages: [
      fieldOpsLogin,
      fieldOpsProfile,
      fieldOpsStart,
      fieldOpsTasks,
      fieldOpsTasks2,
      fieldOpsWelcome,
    ],
    github: "https://github.com/066516/micro-hack-2.git",
    technologies: [
      { category: "Front-end", used: "React Native" },
      { category: "Logo", used: "Illustrator" },
    ],
  },
  {
    name: "HackFlow",
    description: "HackFlow is a hackathon management app that supports everything from team building to project submissions. It helps participants stay on track with the event schedule, allows organizers to make announcements, and enables judges to evaluate projects.",
    image: hackflow,
    previewImages: [hackflowHome, hackflowTeams],
    github: "https://github.com/imadfen/GDG_Hack_OR-BIT_Team.git",
    technologies: [
      { category: "Front-end", used: "React.js, Tailwind" },
      { category: "Logo", used: "Illustrator" },
    ],
  },
  {
    name: "SmarToI",
    description: "SmarTOI is a smart switch mobile application that enables users to control their home devices through IoT. I was responsible for the entire mobile app development, as well as the design of the visual identity and logo.",
    image: smartoi,
    previewImages: [
      smartoiPreview1,
      smartoiPreview2,
      smartoiPreview3,
      smartoiWelcome,
      smartoiDarkAbout,
      smartoiDarkAddDevice,
      smartoiDarkDeviceInfo,
      smartoiDarkHome,
      smartoiDarkSettings,
      smartoiLightAbout,
      smartoiLightAddDevice,
      smartoiLightAddDevice2,
      smartoiLightDeviceInfo,
      smartoiLightDeviceInfo2,
      smartoiLightHome,
      smartoiLightHome2,
      smartoiLightSettings,
    ],
    github: "https://github.com/amelsadoun/SmarTOI.git",
    technologies: [
      { category: "Front-end", used: "React native" },
      { category: "Visual ID", used: "Illustrator" },
    ],
  },
  {
    name: "(E)venTech",
    description: "Eventech is a web application designed browse club events. It allows users to browse events, filter by category, and access registration links. I developed it using the MERN stack, with features such as user-friendly filters & search functionality.",
    image: eventech,
    previewImages: [],
    github: "https://github.com/amelsadoun/MERN-app",
    technologies: [
      { category: "Back-end", used: "Express.js, MongoDB" },
      { category: "Front-end", used: "React.js" },
      { category: "UI-UX", used: "Figma" },
    ],
  },
];
