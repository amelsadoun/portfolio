export default function ContactElement({ info }) {
  const IconComponent = info.icon;

  return (
    <div className="flex items-center gap-3">
      <IconComponent className="text-white w-6 h-6" />
      {info.link ? (
        <a
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg hover:text-light-pink hover:underline"
        >
          {info.name}
        </a>
      ) : (
        <span className="text-white">{info.text}</span>
      )}
    </div>
  );
}
