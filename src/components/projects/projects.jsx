import Project from "./project";
import { projectsArray } from "./projectsArray";
const Projects = () => {
  return (
    <div className="flex flex-col text-center justify-evenly gap-20 pt-16 align-middle">
      <h1 className="font-bold text-5xl text-light-pink">PROJECTS</h1>
      <div className="flex flex-wrap justify-center mx-10 gap-10">
        {projectsArray.map((project) => (
          <Project info={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
