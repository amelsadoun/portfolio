import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Skill } from "./skill";

export const Category = ({ skills, name, image }) => {
  const categoryRef = useRef(null);
  const skillsRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const categoryElement = categoryRef.current;
    const skillsElement = skillsRef.current;

    const handleCategoryClick = () => {
      if (open) {
        handleClose();
      } else {
        handleOpen();
      }
    };

    const handleOpen = () => {
      setOpen(true);
      gsap.fromTo(
        skillsElement,
        { width: 0 },
        {
          width: 500,
          display: "flex",
          opacity: 1,
          duration: 0.2,
        }
      );
    };

    const handleClose = () => {
      setOpen(false);
      gsap.to(skillsElement, {
        width: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.set(skillsElement, { display: "none" });
        },
      });
    };

    categoryElement.addEventListener("click", handleCategoryClick);
    categoryElement.addEventListener("mouseleave", handleClose);

    return () => {
      categoryElement.removeEventListener("click", handleCategoryClick);
      categoryElement.removeEventListener("mouseleave", handleClose);
    };
  }, [open]);

  return (
    <div
      ref={categoryRef}
      className="flex cursor-pointer flex-row justify-between align-middle z-10 group border-[1px] border-white py-5 px-10 rounded-[40px] h-96 gap-10"
    >
      <div className="flex gap-12 flex-col justify-center items-center align-middle text-center p-5">
        <img src={image} className="h-52 w-60" alt="" />
        <h1 className="text-white font-medium text-2xl self-center">{name}</h1>
      </div>
      <div
        ref={skillsRef}
        className="hidden overflow-hidden flex-shrink flex-row flex-wrap justify-around align-middle gap-10 opacity-0"
      >
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
};
