import fieldOps from "../../assets/fieldOps.png";
export default function Projects() {
  const projects = [
    {
      name: "FieldOps",
      description: "lorem ipsum sumn",
      image: fieldOps,
      previewImages: [],
      github: "link",
      technologies: [{ name: "React native", icon: "" }],
    },
    {
      name: "FieldOps",
      description: "lorem ipsum sumn",
      image: fieldOps,
      previewImages: [],
      github: "link",
      technologies: [{ name: "React native", icon: "" }],
    },
    {
      name: "FieldOps",
      description: "lorem ipsum sumn",
      image: fieldOps,
      previewImages: [],
      github: "link",
      technologies: [{ name: "React native", icon: "" }],
    },
  ];
  return (
    <div className="flex flex-col text-center justify-evenly align-middle h-[100vh]">
      <h1 className="font-bold text-5xl text-light-pink">Projects</h1>
      <div className="flex flex-wrap justify-around mx-10">
        {projects.map((project) => (
          <Project info={project} />
        ))}
      </div>
    </div>
  );
}

const Project = ({ info }) => {
  return (
    <div className="relative group">
      <img src={info.image} className="w-96" alt="" />
      <div className="hidden group-hover:flex absolute justify-around align-middle items-center top-0 w-full h-full backdrop-blur-sm"><h1 >{info.name}</h1></div>
    </div>
  );
};
