import Header from "./header/header";
import KnowMoreButton from "./knowMoreButton";
import Lineshero from "../svg/lines-hero";
import TypeWriterText from "./typeWriterText";

export default function Hero() {
  return (
    <div className="md:min-h-[110vh]">
      <Lineshero />
      <Header />
      <div className="lg:ml-[25vw] mt-[10vh] lg:m-20 m-10 flex flex-col justify-around gap-16">
        <TypeWriterText />
        <p className="sm:text-3xl text-white font-light lg:mr-10">
          I'm a 3rd year computer science student at ESI Algiers, particularly
          interested in designing and developing functioning & optimized web applications
        </p>
        <KnowMoreButton />
      </div>
    </div>
  );
}
