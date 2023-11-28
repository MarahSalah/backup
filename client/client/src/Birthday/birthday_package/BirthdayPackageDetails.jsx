import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const BirthdayPackgeDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/birthday/${id}`);
        console.log('Product Details Response:', response.data);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ display: 'flex', maxWidth: '800px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <img
            style={{ width: '100%', borderRadius: '8px' }}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div style={{ flex: 1, backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px' }}>
          <h2 style={{ fontSize: '2rem', color: '#27283d', marginBottom: '10px' }}>{product.title}</h2>
          <p style={{ fontSize: '1.2rem', color: '#27283d', marginBottom: '15px' }}>{product.description}</p>
          <p style={{ fontSize: '1rem', color: '#27283d', marginBottom: '5px' }}>Rating: {product.rating}</p>

          <p style={{ fontSize: '1.2rem', color: '#e74c3c', marginBottom: '10px' }}>Price: 19.99</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button style={{ padding: '10px', fontSize: '1rem', backgroundColor: '#3498db', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
              Buy Now
            </button>
            <button style={{ padding: '10px', fontSize: '1rem', backgroundColor: '#2ecc71', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>

          <Link to="/birthday-gifts" style={{ fontSize: '1rem', color: '#3498db', textDecoration: 'none', marginTop: '10px', display: 'block' }}>
            Back to Birthday Gifts
          </Link>
        </div>
      </div>
    </div>
  );
};


export default BirthdayPackgeDetails