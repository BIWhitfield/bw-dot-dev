import { useState, useEffect } from "react";
import "./App.css";
import Router from "./bwDotDev/routing/Router";

import Graf01 from "./bwDotDev/assets/images/graf-01.png";
import Graf02 from "./bwDotDev/assets/images/graf-02.png";
import Prof1 from "./bwDotDev/assets/images/prof-01.png";
import Prof2 from "./bwDotDev/assets/images/prof-02.png";
import Prof3 from "./bwDotDev/assets/images/prof-03.png";
import img01 from "./bwDotDev/assets/images/IMG_0194.JPG";
import img02 from "./bwDotDev/assets/images/IMG_0198.JPG";
import img03 from "./bwDotDev/assets/images/IMG_0202.JPG";
import img04 from "./bwDotDev/assets/images/IMG_0208.JPG";
import img05 from "./bwDotDev/assets/images/IMG_0222.JPG";
import img06 from "./bwDotDev/assets/images/IMG_0224.JPG";
import img07 from "./bwDotDev/assets/images/IMG_0229.JPG";
import img08 from "./bwDotDev/assets/images/IMG_0230.JPG";
import img09 from "./bwDotDev/assets/images/IMG_0252.JPG";
import img10 from "./bwDotDev/assets/images/IMG_0255.JPG";
import img11 from "./bwDotDev/assets/images/IMG_0257.JPG";
import img12 from "./bwDotDev/assets/images/IMG_0260.JPG";

function App() {
  // every 5 seconds, change the background image
  // add a fade transition between images
  const [backgroundImage, setBackgroundImage] = useState(Prof3);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const images = [
      Graf01,
      Graf02,
      Prof1,
      Prof2,
      Prof3,
      img01,
      img02,
      img03,
      img04,
      img05,
      img06,
      img07,
      img08,
      img09,
      img10,
      img11,
      img12,
    ];
    let index = 0;

    const interval = setInterval(() => {
      // Start fade out
      setIsFadingOut(true);
      
      // After fade out completes, change image and fade in
      setTimeout(() => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * images.length);
        } while (newIndex === index);
        index = newIndex;

        setBackgroundImage(images[index]);
        setIsFadingOut(false);
      }, 1500); // Match the fadeOut animation duration
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <div className="background-container">
        <img
          key={backgroundImage}
          src={backgroundImage}
          alt="Background"
          className={`background-image ${isFadingOut ? 'fade-out' : 'fade-in'}`}
        />
      </div>

      <div className="tri2"></div>
      <div className="tri4"></div>
      <div className="tri3"></div>
      <div className="circle"></div>
      {/* <div className='tri1'></div> */}
      <Router />
    </div>
  );
}

export default App;
