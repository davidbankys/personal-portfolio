import "./headbar.scss";
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';




function Headbar({ menuOpen, setMenuOpen, darkMode, toggleDarkMode }) {
  return (
    <div className={"headbar " + (menuOpen && "active") + (darkMode ? " dark" : "")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            DB
          </a>
          <div className="itemContainer">
             <PersonIcon className="icon" /> 
            <span>+7052348965</span>
          </div>
          <div className="itemContainer">
              <MailIcon className="icon" /> 
            <span>db@davidbankole.com</span>
            <IconButton className="mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>
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
