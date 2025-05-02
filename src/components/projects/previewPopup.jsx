import React, { useState } from "react";
import { Popup } from "react-popupify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomPopup = ({ info }) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const totalImages = info.previewImages.length;

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const allImagesLoaded = loadedCount === totalImages;

  return (
    <Popup
      popupId={info.name}
      animation="bounce"
      open={false}
      closeOnEscape={true}
      closeOnOutsideClick={true}
      closeButton={true}
      
    >
      {!allImagesLoaded && (
        <div className="flex justify-center items-center h-[300px]">
          <span className="text-lg text-white font-semibold m-10">Loading...</span>
        </div>
      )}

      {/* Preload images invisibly */}
      <div className="hidden">
        {info.previewImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onLoad={handleImageLoad}
            onError={handleImageLoad} // fallback in case of broken image
          />
        ))}
      </div>

      {allImagesLoaded && (
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
            <div key={index}>
              <img
                className="max-h-[90vh] max-w-[800px] object-contain"
                src={image}
                alt={`Preview ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      )}
    </Popup>
  );
};

export default CustomPopup;
