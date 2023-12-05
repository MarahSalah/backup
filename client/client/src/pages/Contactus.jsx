import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    f_contactname: '',
    l_contactname: '',
    contact_email: '',
    phone_number:'',
    contact_message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8080/addComment', formData);

      
      console.log('send', response.data);
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <div>
      <section className="hero-section-contact">
        <h2>Contact Us</h2>
      </section>

      <div className="page-container">
        <section className="contact-form">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form">
                <label htmlFor="f_contactname">Fisrt Name:</label>
                <input
                  type="text"
                  id="f_contactname"
                  name="f_contactname"
                  placeholder="Your name"
                  value={formData.f_contactname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form">
                <label htmlFor="l_contactname">Last Name:</label>
                <input
                  type="text"
                  id="l_contactname"
                  name="l_contactname"
                  placeholder="last name"
                  value={formData.l_contactname}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form">
                <label htmlFor="phone_number">Phone number:</label>
                <input
                  type="phone_number"
                  id="phone_number"
                  name="phone_number"
                  placeholder="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </section>

        <div className='text'>
          Contact Us
          <p>"+96278999899"</p>
          <p>Email: <a href="mailto:giftify@gmail.com">giftify@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
