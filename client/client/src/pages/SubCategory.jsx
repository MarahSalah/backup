import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SubCategory = () => {
  const { subCategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${subCategory}`);
        const data = await response.json();
        if (data) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [subCategory]);

  return (
    <div>
      <h2>{subCategory} Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
