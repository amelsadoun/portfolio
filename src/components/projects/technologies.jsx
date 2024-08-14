const Technologies = ({ techs }) => {
  return (
    <div className="flex flex-row flex-wrap justify-around w-full text-lg font-semibold text-center">
      {techs.map((tech, index) => (
        <>
          {index !== 0 && " - "} <p>{tech.name}</p>
        </>
      ))}
    </div>
  );
};

export default Technologies;
