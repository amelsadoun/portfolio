const Technologies = ({ techs }) => {
  return (
    <div className="flex flex-row flex-wrap justify-around w-full font-semibold text-md lg:text-lg text-center">
      {techs.map((tech, index) => (
        <>
          {index !== 0 && " - "}{" "}
          <p>
            {tech.category+": "} <span className="font-normal ml-1">{tech.used}</span>
          </p>
        </>
      ))}
    </div>
  );
};

export default Technologies;
