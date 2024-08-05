import "./intro.scss";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import daveImage from '../../assets/Humaaan.png';

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <img src={daveImage} alt="dave" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <p>Hi There, I'm David </p>
          <h3>
            <Typewriter
              options={{
                strings: ["Software Developer", "Designer", "Embedded System Engineer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <p>Building solutions to global problems...</p>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;