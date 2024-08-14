
import frontend_icon from "../svg/frontend/frontend.svg";
import backend_icon from "../svg/backend/backend.svg";
import other_icon from "../svg/design/design.svg";
import { Category } from "./category";
import skillsArray from "./skillsArray";

export default function Skills() {

 
  return (
    <div className="flex flex-col gap-10 text-center justify-evenly align-middle min-h-[100vh]">
      <h1 className="font-bold text-wrap text-5xl text-light-pink">
        SKILLS & TECHNOLOGIES
      </h1>
      <div className="flex flex-row lg:flex-nowrap flex-wrap align-middle items-center mx-36 gap-7 justify-around">
        <Category name="Front-end" image={frontend_icon} skills={skillsArray.frontend} />
        <Category name="Back-end" image={backend_icon} skills={skillsArray.backend} />
        <Category name="Design" image={other_icon} skills={skillsArray.design} />
      </div>
    </div>
  );
}


