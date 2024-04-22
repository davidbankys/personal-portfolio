import "./headbar.scss";
//import { Person, Mail } from "@material-ui/icons";

function Headbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"headbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            DB
          </a>
          <div className="itemContainer">
            {/*  <Person className="icon" /> */}
            <span>+705111111</span>
          </div>
          <div className="itemContainer">
            {/*  <Mail className="icon" /> */}
            <span>db@davidbankole.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Headbar;
