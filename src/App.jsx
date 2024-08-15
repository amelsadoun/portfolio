import AboutUs from "./components/about/aboutUs";
import Contact from "./components/contact/contact";
import Events from "./components/events/events";
import Hero from "./components/hero/hero";
import NavigationCarousel from "./components/navigation/navigationCarousel";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="flex flex-col align-middle lg:items-center w-fit">
      <NavigationCarousel />
      <section id="who am i?">
        <Hero />
      </section>
      <section id="skills" className="flex flex-col align-middle items-center">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
