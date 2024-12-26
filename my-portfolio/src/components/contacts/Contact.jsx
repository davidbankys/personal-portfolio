// import React from 'react';
// import './contact.scss';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// import contactImage from '../../assets/Humaaan.png';


// function Contact() {
//   return (
//     <div className="contact" id="contact">
//       <h1>Contact</h1>
//      <div className='contact-container'>
//       <div className="left">
//         <form className="contact-form">
//           <h2>Send a message!</h2>
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" name="name" required />

//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" required />

//           <label htmlFor="message">Message</label>
//           <textarea id="message" name="message" rows="5" required></textarea>

//           <button type="submit">Send</button>
//         </form>
//       </div>
//       <div className="right">
//         <div className="imgContainer">
//         <img src={contactImage} alt="dave" />
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React, { useState } from 'react';
import './contact.scss';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import contactImage from '../../assets/Humaaan.png';

function Contact() {

const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

const [status, setStatus] = useState('');

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Sending...');
  
  try {
    const response = await fetch('http://localhost:5003/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); 
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  } catch (error) {
    setStatus('An error occurred. Please try again.');
  }
};

return (
  <div className="contact" id="contact">
    <h1>Contact</h1>
    <div className="contact-container">
      <div className="left">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a message!</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
        {status && <p>{status}</p>}
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src={contactImage} alt="contact" />
        </div>
      </div>
    </div>
  </div>
);
}

export default Contact;
