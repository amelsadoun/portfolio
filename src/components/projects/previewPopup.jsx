import React, { useEffect } from "react";
import { Popup } from "react-popupify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const CustomPopup = ({ images }) => {
 
  return (
    <Popup
      popupId="previewPopupId"
      animation="bounce"
      open={false} // Popup is initially closed
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
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="max-h-[90vh] max-w-[800px] object-contain "
              src={image}
              alt={`Preview ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </Popup>
  );
};

export default CustomPopup;
