import css_icon from "../svg/css.svg";
import vite_icon from "../svg/vite.svg";
import tailwind_icon from "../svg/tailwind.svg";
import express_icon from "../svg/express.svg";
import nodejs_icon from "../svg/nodejs.svg";
import frontend_icon from "../svg/frontend.svg";
import backend_icon from "../svg/backend.svg";
import other_icon from "../svg/other.svg";
import { Category } from "./category";

export default function Skills() {
  const frontend = [
    { name: "css", icon: css_icon },
    { name: "tailwind", icon: tailwind_icon },
    { name: "vite", icon: vite_icon },
    { name: "css", icon: css_icon },
    { name: "tailwind", icon: tailwind_icon },
    { name: "vite", icon: vite_icon },
  ];

  const backend = [
    { name: "express", icon: express_icon },
    { name: "nodejs", icon: nodejs_icon },
  ];

  const other = [];

  return (
    <div className="flex flex-col gap-10 text-center justify-evenly align-middle min-h-[100vh]">
      <h1 className="font-bold text-5xl text-light-pink">
        SKILLS & TECHNOLOGIES
      </h1>
      <div className="flex flex-row align-middle items-center mx-36 gap-5 justify-around">
        <Category name="Front-end" image={frontend_icon} skills={frontend} />
        <Category name="Back-end" image={backend_icon} skills={backend} />
        <Category name="Design" image={other_icon} skills={backend} />
      </div>
    </div>
  );
}


