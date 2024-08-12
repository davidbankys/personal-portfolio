import React from 'react';
import './contact.scss';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import contactImage from '../../assets/Humaaan.png';


function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
     <div className='contact-container'>
      <div className="left">
        <form className="contact-form">
          <h2>Send a message!</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
      <div className="right">
        <div className="imgContainer">
        <img src={contactImage} alt="dave" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;