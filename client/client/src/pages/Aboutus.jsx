import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <section className="hero-section">
        <h2>About Us</h2>
      </section>
   
      <section className="new-section">
        <div className="box-container">
          <div className="box">
            
            <p>""Happiness starts with Gifify, choose a gift that captures the joy of the moment."</p>
          </div>
          <div className="box1">
            <h3>Who We Are:</h3>
            <p>"At Gifify, we believe that gifts are more than just items; they are moments worth celebrating. 
                As a specialized gift-selling platform, we strive to provide a unique shopping experience that blends creativity and emotion. We offer a diverse range of distinctive gifts that express your feelings and embody moments of joy. At Gifify, we understand the importance of gifts as a means of expressing emotions and strengthening connections between people. Choose a gift from Gifify and share the joy with your loved ones,
                 because we believe that the moments you share remain timeless in memory."</p>
          </div>
        </div>

        
      </section>
      <section className="image-section">
        <div className="image-box">
          <img src="https://img.freepik.com/premium-photo/many-gift-box-white-space-present-birthday-valentine-day-christmas-new-year-concept_41124-453.jpg" alt="Sample Image" ></img>
          <div className="image-text">
  <h3>About Our Product</h3>
  <p>Our products are designed with care to provide you with the best in skincare. We offer a range of high-quality skincare products tailored to your unique needs. Whether you need gentle cleansers, nourishing moisturizers, or age-defying treatments, we've got you covered.</p>
  <p>We believe that taking care of your skin should be enjoyable and rejuvenating. With our products, you'll not only look beautiful but also feel confident in your own skin.</p>

</div>
          </div>
  
      </section>
    </div>
    
  );

};
export default AboutUs;
