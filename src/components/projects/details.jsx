import React, { useState } from "react";
import { showPopup } from "react-popupify";
import github_icon from "../svg/other/github.svg";
import preview_icon from "../svg/other/preview.svg";
import Technologies from "./technologies";
import PreviewPopup from "./previewPopup";
import "react-popupify/dist/bundle.css";

export const Details = ({ info }) => {
  const [previewImages, setPreviewImages] = useState([]);

  const showPreviewImages = (images) => {
    setPreviewImages(images);  // Update state with the correct images
    showPopup("previewPopupId", { open: true });
  };
  return (
    <div className="flex flex-col flex-wrap justify-between align-middle items-center gap-6 w-full">
      <Technologies techs={info.technologies} />
      <div className="flex flex-row justify-around w-full">
        {" "}
        {info.github && (
          <a
            className="flex flex-row justify-between align-middle items-center gap-3 hover:scale-110 ease-in duration-150 font-semibold hover:underline"
            href={info.github}
          >
            <img src={github_icon} className="w-7 h-7 " alt="" />
            <p>Github repository</p>
          </a>
        )}
        {info.previewImages && info.previewImages.length > 0 && (
          <div
            className="cursor-pointer flex flex-row justify-between align-middle items-center gap-3 hover:scale-110 ease-in duration-150 font-semibold hover:underline"
            onClick={showPreviewImages}
          >
            <img src={preview_icon} className="w-7 h-7 " alt="" />
            <p>Preview images</p>
          </div>
        )}
      </div>
      <PreviewPopup images={info.previewImages} />
    </div>
  );
};
