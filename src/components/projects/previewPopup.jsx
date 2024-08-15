import React, { useEffect, useState } from "react";
import { Popup } from "react-popupify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const CustomPopup = ({ info }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Popup
      popupId={info.name}
      animation="bounce"
      open={false} 
      closeOnEscape={true}
      closeOnOutsideClick={true}
      closeButton={true}
    >
      {loading ? (
        <>loading...</>
      ) : (
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
                className="max-h-[90vh] max-w-[800px] object-contain "
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
