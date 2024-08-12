import AboutUs from "./components/about/aboutUs";
import Events from "./components/events/events";
import Hero from "./components/hero/hero";
import NavigationCarousel from "./components/navigation/navigationCarousel";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <NavigationCarousel />
      <section id="who am i?">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects/>
      </section>
    </>
  );
}

export default App;
