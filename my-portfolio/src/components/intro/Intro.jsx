import "./intro.scss";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import daveImage from '../../assets/Standing.png';
import resume from '../../assets/David_Abel_Resume.pdf';

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <img src={daveImage} alt="dave" />
        </div>
      </div>
      <div className="right">
        <div className="right-wrapper">
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
          <a href={resume} download="David_Abel_Resume.pdf">
          <button>Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;