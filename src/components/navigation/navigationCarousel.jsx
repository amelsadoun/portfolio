import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function NavigationCarousel() {
  const [activeSection, setActiveSection] = useState("Who am I?"); // Default active section
  const carouselRef = useRef(null);

  const items = ["Who am I?", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      items.forEach((item, index) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop - windowHeight / 2 &&
            scrollPosition < offsetTop + offsetHeight - windowHeight / 2
          ) {
            setActiveSection(item);
         
          }
        }
      });
    };

    gsap.to(carouselRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div
      ref={carouselRef}
      className={`fixed flex flex-col items-start z-10 h-16 bottom-32 right-6`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveSection(item)}
          className="flex justify-center items-center h-screen transition-opacity duration-500"
          style={{
            opacity: 1 - Math.abs(items.indexOf(activeSection)  - index) * 0.4,
          }}
        >
          <div
            className={`h-10 self-end w-[2px] -mr-[6px] ${
              index === 0
                ? "bg-gradient-to-b from-transparent to-white"
                : index === items.length - 1
                ? "bg-gradient-to-b from-white to-transparent"
                : "bg-white"
            }`}
          ></div>
          <CarouselItem label={item} isActive={activeSection === item} />
        </div>
      ))}
    </div>
  );
}

function CarouselItem({ label, isActive }) {
  return (
    <a
      href={"#" + label.toLowerCase()}
      className={`flex justify-between gap-2 items-center text-white text-xl ${
        isActive ? "font-medium" : ""
      }`}
    >
      <p>●</p>
      {label}
    </a>
  );
}
