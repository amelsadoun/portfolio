import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AboutUsLogo from "../svg/about-us-logo";
import image from "../../assets/image.jpg";

export default function AboutUsCard() {
  const boxRef = useRef(null);
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const detailedTextRef = useRef(null);
  const nonDetailedTextRef = useRef(null);
  const [detailsShown, setDetailsShown] = useState(false);

  //all the animation for the elements that will DISAPPEAR once the user clicks "read more"
  const showMoreInfo = async () => {
    await gsap
      .fromTo(
        logoRef.current,
        { scale: 1 },
        { scale: 0, rotation: 180, opacity: 0, duration: 0.2 }
      )
      .then();

    await gsap
      .to(nonDetailedTextRef.current, { opacity: 0, x: -50, duration: 0.1 })
      .then();

    await gsap
      .fromTo(
        containerRef.current,
        { flexDirection: "column" },
        { flexDirection: "row", duration: 0.2 }
      )
      .then();

    setDetailsShown(true);
  }; //now everything has disappeared hehe

  //now the animation for things that will SHOW
  useEffect(() => {
    if (detailsShown) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0, x: 100 },
        { scale: 1, x: 0, ease: "elastic.out(0.5, 0.2)", duration: 1 }
      );

      gsap.fromTo(
        detailedTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, x: 0, duration: 0.1 }
      );
    } else {
      gsap.fromTo(
        nonDetailedTextRef.current,
        { x: -50, opacity: 0 },
        { opacity: 1, x: 0, duration: 0.1 }
      );
      gsap.fromTo(
        containerRef.current,
        { flexDirection: "row" },
        { flexDirection: "column" }
      );
      gsap.fromTo(
        logoRef.current,
        { scale:0, rotation:90 },
        { scale:1, rotation:0, ease: "elastic.out(0.3, 0.2)" }
      );
    }
  }, [detailsShown]); //everything has now magically appeared

  useEffect(() => {
    // Floating animation for the entire card
    gsap.to(boxRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const logoElement = logoRef.current;

    // Rotation animation on hover for the logo
    boxRef.current.addEventListener("mouseenter", () => {
      gsap.fromTo(
        logoElement,
        { rotation: 0 },
        {
          rotation: 20,
          duration: 3.5,
          ease: "elastic.out(1, 0.2)",
        }
      );
    });

    boxRef.current.addEventListener("mouseleave", () => {
      gsap.fromTo(
        logoElement,
        { rotation: 20 },
        {
          rotation: 0,
          duration: 3.5,
          ease: "elastic.out(1, 0.2)",
        }
      );
    });
  }, []);

  //animation for the rotation when logo is clicked
  const animateLogoRef = () => {
    gsap.to(logoRef.current, {
      rotation: 360,
      ease: "elastic.out(1, 0.2)",
      duration: 4,
    });
  };

  const onBackButtonClicked = async () => {
    setDetailsShown(false);
  };

  return (
    <div
      ref={boxRef}
      className="h-fit self-center flex-1 border-solid p-[6px] border-white relative group drop-shadow-lg"
    >
      <div
        ref={containerRef}
        className="h-fit flex flex-col flex-1 border-white border-[1px] border-solid rounded-[50px] align-middle justify-around p-10 gap-10 drop-shadow-lg shadow-lg"
      >
        {detailsShown ? (
          <span
            ref={detailedTextRef}
            className="rounded-md px-5 drop-shadow-lg text-white text-2xl leading-10"
          >
            <button className="text-4xl px-5" onClick={onBackButtonClicked}>
              {"<"}
            </button>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </span>
        ) : (
          <span
            ref={nonDetailedTextRef}
            className="rounded-md bg-slate-900 px-5 drop-shadow-lg text-3xl text-white "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...{" "}
            <a
              className="font-medium underline cursor-pointer"
              onClick={showMoreInfo}
            >
              read more →
            </a>
          </span>
        )}
        {!detailsShown ? (
          <div className="self-center" onClick={animateLogoRef} ref={logoRef}>
            <AboutUsLogo isColorPink={true} />
          </div>
        ) : (
          <img
            ref={imageRef}
            className="w-[30vw] self-center hover:scale-110 rounded-xl"
            src={image}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
