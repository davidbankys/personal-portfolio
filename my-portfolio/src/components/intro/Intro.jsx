import "./intro.scss";
import Typewriter from "typewriter-effect";
import daveImage from '../../assets/Standing.png';
import resume from '../../assets/David_Abel_Resume.pdf';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

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
          <div className="button-container">
            <a href={resume} download="David_Abel_Resume.pdf">
              <button>
                Download Resume <SaveAltIcon />
              </button>
            </a>
            <button onClick={() => window.location.href = '#contact'}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;