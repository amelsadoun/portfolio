
import frontend_icon from "../svg/frontend/frontend.svg";
import backend_icon from "../svg/backend/backend.svg";
import other_icon from "../svg/design/design.svg";
import { Category } from "./category";
import skillsArray from "./skillsArray";

export default function Skills() {

 
  return (
    <div className="flex flex-col gap-10 text-center max-w-[fit] mt-16 justify-evenly align-middle min-h-[100vh]">
      <h1 className="font-bold text-wrap text-4xl lg:text-6xl w-min self-center text-light-pink">
        SKILLS & TECHNOLOGIES
      </h1>
      <div className="flex lg:flex-row flex-col lg:flex-nowrap flex-wrap lg:mx-10 gap-7 justify-between">
        <Category name="Front-end/mobile" image={frontend_icon} skills={skillsArray.frontend} />
        <Category name="Back-end" image={backend_icon} skills={skillsArray.backend} />
        <Category name="Design" image={other_icon} skills={skillsArray.design} />
      </div>
    </div>
  );
}


