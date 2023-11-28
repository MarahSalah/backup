import React from 'react';

const GiftSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-8">
        
      <p className="text-lg text-white mt-4 flex-grow font-sans">    We believe that flowers are the universal language of love and emotions. <br />Our handpicked collection of exquisite blooms is<br /> thoughtfully curated to help you convey your feelings on any occasion. <br />Whether it's a romantic gesture, a heartfelt apology, or a simple "thinking of you" message,<br /> our flowers speak the language of the heart.
  </p>
  <div className="w-64 h-64 rounded-full overflow-hidden ml-4 mt-4">
    <img
      src="https://images.pexels.com/photos/15961685/pexels-photo-15961685/free-photo-of-tic-tac-toe-with-hearts-on-cake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      alt="Gift 1"
      className="w-full h-full object-cover"
    />
  </div>
</div>
      <br />

      <div className="flex items-center mb-8">
        <div className="w-64 h-64 rounded-full overflow-hidden mr-4">
          <img
            src="https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gift 2"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-lg text-white mt-4 flex-grow">
          Our sweets and cakes are handcrafted with love and attention to detail, <br />
          making them the perfect treat for celebrations, gifting, or simply to sweeten your day. <br />
          With flavors that range from classic to innovative, <br />
          you're sure to find something that tantalizes your taste buds.
        </p>
      </div>
      <br />

      <div className="flex items-center mb-8">
        <p className="text-lg text-white mt-4 flex-grow">
          Designed with artistic flair and attention to detail, <br />our cards convey your sentiments with elegance and style. <br />From beautifully crafted birthday cards to heartwarming sympathy notes,<br /> our range covers a spectrum of emotions and occasions.
        </p>
        <div className="w-64 h-64 rounded-full overflow-hidden ml-4">
          <img
            src="https://images.pexels.com/photos/1775115/pexels-photo-1775115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gift 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftSection;
