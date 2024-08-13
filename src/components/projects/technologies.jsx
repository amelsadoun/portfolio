const Technologies = ({ techs }) => {
  return (
    <div className="flex flex-row flex-wrap justify-around w-full">
      {techs.map((tech) => (
        <div className="flex flex-col justify-between align-middle items-center gap-2">
          <img src={tech.icon} alt="" className="w-8 h-8" />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
