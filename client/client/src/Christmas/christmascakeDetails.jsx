import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const christmascakeDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/getdetails/${id}`);
        console.log(response.data)
        setProduct(response.data.product);
        setComments(response.data.reactions); 
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [id]);
  const addToCart = async () => {
    const productData = {
      product_id: product.id,
      product_count: product.product_count,
      price: product.price,
    };

    try {
      const response = await axios.post(`http://localhost:8080/addToCart`, {
        productData: productData,
      });
  
      console.log("Product added to cart:", response.data);
    } catch (error) {
      console.error("Error adding product to cart: ", error);
    }
  };


  const addToWishlist = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/addToWishlist/${id}`);
      console.log("Product added to Wishlist:", response.data);
    } catch (error) {
      console.error("Error adding product to Wishlist: ", error);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/updateReaction/${id}`, {
        comment: comment,
        rating: rating,
      });

      // const commentsResponse = await axios.get(`https://fakestoreapi.com/products/${id}/comments`);
      // setComments(commentsResponse.data);

      setComment('');
      setRating(0);
    } catch (error) {
      console.error('Error submitting data: ', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.img_url}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                 onClick={() => { addToCart() }} 
                 >

                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                                 onClick={() => { addToWishlist() }} 
                                 >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.product_name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Price: {product.price}
              </span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">/
                {/* Rating: {product.rating.rate}  */}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-12">
            Comments and Ratings
          </h3>
          {comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            <ul>
              {comments.map((comment, index) => (
                <li key={index} className="mb-2">
                  <strong>{comment.user}:</strong> {comment.comment} (Rating: {comment.rating})
                </li>
              ))}
            </ul>
          )}

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-12">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="comment">
                Comment:
              </label>
              <textarea
                id="comment"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="form-input mt-1 block w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="rating">
                Rating:
              </label>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-2xl cursor-pointer ${
                      star <= rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default christmascakeDetails;




















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Cookies from 'js-cookie';

// export const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState([]);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       console.log("id", id);
//       try {
//         const response = await axios.get(`http://localhost:3001/products_details/${id}`);
//         setProduct(response.data[0]);
//         console.log("Data", response.data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const user_id = Cookies.get("user_id");

//   const addToCart = () => {
//     // Create an object with the product data
//     const productData = {
//       "product_id": product.product_id,
//       "product_name": product.product_name,
//       "price": product.price,
//       "description": product.description,
//       "user_id": user_id,
//       // Add other properties as needed
//     };

//     const token = Cookies.get("token");

//     axios
//       .post("http://localhost:3001/add-to-cart", productData, {
//         headers: {
//           Authorization: user_id ? `Bearer ${user_id}` : '',
//         },
//       })
//       .then((response) => {
//         console.log("Product added to cart:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error adding product to cart: ", error);
//       });
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div className="bg-gray-100 dark:bg-gray-800 py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row -mx-4">
//             <div className="md:flex-1 px-4">
//               <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
//                 {/* <img
//                   className="w-full h-full object-cover"
//                   src={product.image}
//                   alt="Product Image"
//                 /> */}
//               </div>
//               <div className="flex -mx-2 mb-4">
//                 <div className="w-1/2 px-2">
//                   <button
//                     className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover-bg-gray-700"
//                     onClick={() => { addToCart() }}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="md:flex-1 px-4">
//               <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
//                 {product.product_name}
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
//                 {product.product_name}
//               </p>
//               <div className="flex mb-4">
//                 <div className="mr-4">
//                   <span className="font-bold text-gray-700 dark:text-gray-300">
//                     Price: {product.price}
//                   </span>
//                 </div>
               
//               </div>
//               <div>
//                 <span className="font-bold text-gray-700 dark:text-gray-300">
//                   Product Description: {product.description}
//                 </span>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm mt-2"></p>
//               </div>
//               <div>
//                 <span className="font-bold text-gray-700 dark:text-gray-300">
//                   Price {product.price}
//                 </span>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm mt-2"></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProductDetails;