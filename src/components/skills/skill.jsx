export const Skill = ({ icon, name }) => {
  return (
    <div className=" z-10 flex-col text-center gap-3 justify-between align-middle">
      <img className="h-20" src={icon} alt="" />
      <span className="text-white text-lg font-regular">{name}</span>
    </div>
  );
};
