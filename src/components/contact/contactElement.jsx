export default function ContactElement({ info }) {
  return (
    <a href={info.link} className="flex flex-row gap-5 justify-between align-middle items-center hover:scale-110 ease-in-out duration-150 text-white hover:text-light-pink">
      <img src={info.icon} className="w-10 h-10" alt="" />
      <p className="text-xl font-semibold ">{info.name}</p>
    </a>
  );
}
