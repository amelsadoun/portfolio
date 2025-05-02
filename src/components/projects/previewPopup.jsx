import React, { useState } from "react";
import { Popup } from "react-popupify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomPopup = ({ info }) => {
  const [imageLoaded, setImageLoaded] = useState(
    Array(info.previewImages.length).fill(false)
  );

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <Popup
      popupId={info.name}
      animation="bounce"
      open={false}
      closeOnEscape={true}
      closeOnOutsideClick={true}
      closeButton={true}
    >
      <Carousel
        className="custom-carousel max-w-[900px]"
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        dynamicHeight={true}
        showArrows={true}
      >
        {info.previewImages.map((image, index) => (
          <div key={index} className="relative">
            {!imageLoaded[index] && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
                <span className="text-lg text-white font-semibold">
                  Loading...
                </span>
              </div>
            )}
            <img
              className={`max-h-[90vh] max-w-[800px] object-contain ${
                imageLoaded[index] ? "" : "invisible"
              }`}
              src={image}
              alt={`Preview ${index + 1}`}
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageLoad(index)} // fallback in case of error
            />
          </div>
        ))}
      </Carousel>
    </Popup>
  );
};

export default CustomPopup;
