import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import daveImage from '../../assets/Humaaan.png';


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 30,
      strings: ["Software Programmer...", "Mobile Game Designer...", "Embedded Engineer..."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <img src={daveImage} alt="dave" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey, I'm <span>David,</span></h2>
          <p>My dream is to build solutions for global problem...</p>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
