export const Skill = ({ icon, name }) => {
  return (
    <div className="hover:scale-110 ease-out duration-150 z-10 flex flex-col self-center gap-3 text-center content-center justify-between justify-items-center items-center text-wrap align-middle">
      <img className="h-20 self-center items-center place-self-center" src={icon} alt="" />
      <span className="text-white text-lg font-regular">{name}</span>
    </div>
  );
};
