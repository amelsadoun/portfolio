import github_icon from "../svg/github.svg";
import preview_icon from "../svg/preview.svg";
import Technologies from "./technologies";

export const Details = ({ info }) => {

  const showPreviewImages = () => {};

  return (
    <div className="flex flex-row flex-wrap justify-around gap-10 w-full">
      <Technologies techs={info.technologies} />
      {info.github && (
        <a
          className="flex flex-row justify-between align-middle items-center gap-3 hover:scale-110 ease-in duration-150 font-semibold hover:underline"
          href={info.github}
        >
          <img src={github_icon} className="w-7 h-7 " alt="" />
          <p>Github repository</p>
        </a>
      )}
      {info.previewImages && (
        <a
          className="flex flex-row justify-between align-middle items-center gap-3 hover:scale-110 ease-in duration-150 font-semibold hover:underline"
          onClick={showPreviewImages}
        >
          <img src={preview_icon} className="w-7 h-7 " alt="" />
          <p>Preview images</p>
        </a>
      )}
    </div>
  );
};


