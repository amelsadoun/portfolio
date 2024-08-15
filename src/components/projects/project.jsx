import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useState } from "react";
import { Details } from "./details";

const Project = ({ info }) => {
  const [detailsShown, setDetailsShown] = useState(false);
  const projectRef = useRef(null);
  const buttonRef = useRef(null);
  const descriptionRef = useRef(null);
  const nameRef = useRef(null);
  const infoRef = useRef(null);
  const imageRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //deal with window dimensions changes
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener("resize", handleResize);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  


  //verify if the project image is dark to make styles coherent
  const darkBackground = info.name === "HackFlow";

  // Function to center the expanded project category on the screen
  const scrollToCenter = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Handle showing details and scroll to center
  const handleShowDetails = () => {
    setDetailsShown(true);
    gsap.to(projectRef.current, {
      width: "85%",
      height: windowWidth > 1000 ? "500px" : "800px",
      duration: 0,
      ease: "power2.out",
      display: "flex",
      flexDirection: windowWidth > 900 ? "row" : "column",
      border: "1px solid white",
      onComplete: () => scrollToCenter(),
    });
    gsap.to(infoRef.current, {
      position: "relative",
      display: "flex",
      color: "white",
      // padding: "20 20 0 0",
    });
    gsap.to(imageRef.current, { margin: 30, borderRadius: 10 });
    gsap.to(nameRef.current, { color: "white" });
  };

  const handleHideDetails = () => {
    setDetailsShown(false);
    gsap.to(infoRef.current, {
      position: "absolute",
      display: "none",
      duration: 0,
      color: "initial",
    });
    gsap.to(projectRef.current, {
      width: "450px",
      height: "auto",
      display: "block",
      duration: 0,
      flexDirection: "column",
      border: "none",
      onComplete: () => scrollToCenter(),
    });

    gsap.to(imageRef.current, { margin: 0, borderRadius: 0 });
    gsap.to(nameRef.current, { color: darkBackground ? "white" : "#3f3cbb" });
  };

  useEffect(() => {
    const projectElem = projectRef.current;
    const infoElem = infoRef.current;

    const handleMouseEnter = () => {
      gsap.to(infoElem, {
        display: "flex",
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(infoElem, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(infoElem, { display: "none" });
        },
      });
    };

    if (!detailsShown) {
      projectElem.addEventListener("mouseenter", handleMouseEnter);
      projectElem.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        projectElem.removeEventListener("mouseenter", handleMouseEnter);
        projectElem.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [detailsShown]);

  return (
    <div
      ref={projectRef}
      className="shadow-xl drop-shadow-xl relative rounded-xl overflow-hidden w-[450px] "
    >
      <img
        ref={imageRef}
        src={info.image}
        className={`max-w-full ${!detailsShown ? "h-80" : ""}`}
        alt=""
      />
      <div
        ref={infoRef}
        className="absolute top-0 w-full h-full backdrop-blur-[8px] flex-col justify-evenly items-center self-center align-middle"
        style={{ display: "none", opacity: 0 }}
      >
        <h1
          ref={nameRef}
          className={`font-bold text-4xl ${
            darkBackground ? "text-white" : "text-purple"
          }`}
        >
          {info.name}
        </h1>
        <p
          ref={descriptionRef}
          className={`text-md font-medium mx-6 text-left indent-10 ${
            darkBackground ? "text-white" : ""
          }`}
        >
          {detailsShown
            ? info.description
            : info.description.split(" ").slice(0, 20).join(" ") +
              (info.description.split(" ").length > 20 ? "..." : "")}
        </p>
        {detailsShown && <Details info={info} />}
        <button
          ref={buttonRef}
          onClick={detailsShown ? handleHideDetails : handleShowDetails}
          className={`flex flex-row justify-center items-center gap-5 text-center font-medium text-xl self-center w-[90%] py-3 bg-purple  text-white rounded-md hover:gap-10 duration-100 ease-in`}
        >
          {detailsShown ? "Hide p" : "P"}roject details{" "}
          <span>{detailsShown ? "←" : "→"}</span>
        </button>
      </div>
    </div>
  );
};

export default Project;
