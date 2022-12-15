import React, { useState, useEffect } from "react";
//@import "~react-image-gallery/styles/css/image-gallery.css";
//import ImageGallery from "react-image-gallery";
import one from "./Img/Car/1.jpg";
import two from "./Img/Car/2.jpg";
import three from "./Img/Car/3.jpg";
import four from "./Img/Car/4.jpg";
import five from "./Img/Car/5.jpg";

// const styles = {
//   "container": {
//     "display": "flex",
//     "flexWrap": "nowrap",
//     "overflow": "hidden",
//   },
//   "item": {
//     "display": "flex",
//     "alignItem": "center",
//     "justifyContent": "center",
//     "transition": "1s cubic-bezier(0.39, 0.575, 0.565, 1)",
//     "transform": "translate",
//   },
// };

export default function Gallery() {
  const data = [one, two, three, four, five];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      scroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  const scroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="Gallery-Full">
      <div className="Gallery-container">
        {data.map((item, index) => {
          return (
            <img
              src={item}
              className="Gallery-item"
              alt={index}
              key={index}
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
            />
          );
        })}
      </div>
    </div>
  );
}
