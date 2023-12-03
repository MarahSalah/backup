import React, { useEffect, useState } from 'react'
import logo4 from '../../Image/logo4-transformed.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditPopupUserData from './EditPopupUserData';
import EditPopupDriverData from './EditPopupDriverData';
import EditPopupProductData from './EditPopupProductData';
import EditPopupSolutionsData from './EditPopupSolutionsData';
// import EditPopupcontactusData from './EditPopupcontactusData';
// import AddOrderForm from './AddOrderForm';
import AddAdminForm from './AddAdminForm';
// import AddUserForm from './AddUserForm';
import AddDriverForm from './AddDriverForm';
import AddProductForm from './AddProductForm';
import AddSolutionsForm from './AddSolutionsForm';
// import AddcontactusForm from './AddcontactusForm';
const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [clicked, setClicked] = useState(false);

  const [editUser, setEditUser] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const [editDriver, setEditDriver] = useState(null);
  const [isEditDriverPopupOpen, setIsEditDriverPopupOpen] = useState(false);

  const [editProduct, setEditProduct] = useState(null);
  const [isEditProductPopupOpen, setIsEditProductPopupOpen] = useState(false);

  const [editSolutions, setEditSolutions] = useState(null);
  const [isEditSolutionsPopupOpen, setIsEditSolutionsPopupOpen] = useState(false);

  const [editcontactus, setEditcontactus] = useState(null);
  const [isEditcontactusPopupOpen, setIsEditcontactusPopupOpen] = useState(false);

  const fetchData = async () => {
    try {
      let response;
      switch (selectedTab) {
        case 'dashboard':
          response = await axios.get('http://localhost:3001/order');
          break;

        case 'users':
          response = await axios.get('http://localhost:3001/allusers');
          break;
        case 'drivers':
          response = await axios.get('http://localhost:3001/driver');
          break;
        case 'Product':
          response = await axios.get('http://localhost:3001/Product');
          break;
        case 'solutions':
          response = await axios.get('http://localhost:3001/solutions');
          break;
        case 'contactus':
          response = await axios.get('http://localhost:3001/contactus');
          break;

        default:
          break;
      }

      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedTab]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setClicked(true);
  };

  const handleSignOut = () => {
    console.log('Signing out...');
  };

//   const handlePrevClick = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNextClick = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };
// };


  

//  const handlePrevClick = () => {
//     setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
//   };

//   const handleNextClick = () => {
//     setCurrentPage(prevPage => prevPage + 1);
//   };

  /////////////////////////////////////   EDIT  ///////////////////////////////////////////////////////

  //edit handle for users data**********************************************************************************************
  const handleEditClick = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3001/allusers/${userId}`); // Replace with your API endpoint
      setEditUser(response.data);
     
      setIsEditPopupOpen(true);
    } catch (error) {
      console.error('Error fetching order data:', error);
    }
  };

  // const handleEditSubmit = async (editedUserData) => {
  //   try {
  //     // Make a PUT request to update the order data
  //     await axios.put(`http://localhost:3001/register/${editUser.id}`, editedUserData); // Replace with your API endpoint
  //     // Close the edit popup and fetch the updated data
  //     setIsEditPopupOpen(false);
  //     fetchData(); // Implement a function to fetch data from your API
  //   } catch (error) {
  //     console.error('Error updating order data:', error);
  //   }
  // };

  //edit handle for driver data **********************************************************************************************
  const handleDriverEditClick = async (driverId) => {
    try {
      const response = await axios.get(`http://localhost:3001/driver/${driverId}`); // Replace with your API endpoint
      setEditDriver(response.data);
      setIsEditDriverPopupOpen(true);
    } catch (error) {
      console.error('Error fetching driver data:', error);
    }
  };

  const handleDriverEditSubmit = async (editedDriverData) => {
    try {
      // Make a PUT request to update the driver data
      await axios.put(`http://localhost:3001/driver/${editDriver.id}`, editedDriverData); // Replace with your API endpoint
      // Close the edit popup and fetch the updated data
      setIsEditDriverPopupOpen(false);
      fetchData(); // Implement a function to fetch data from your API
    } catch (error) {
      console.error('Error updating driver data:', error);
    }
  };
  
   //edit handle for Product data**********************************************************************************************
   const handleProductEditClick = async (ProductId) => {
    try {
      const response = await axios.get(`http://localhost:3001/Product/`); // Replace with your API endpoint
      setEditProduct(response.data);
      setIsEditProductPopupOpen(true);
    } catch (error) {
      console.error('Error fetching Product data:', error);
    }
  };

  const handleProductEditSubmit  = async (editedProductData) => {
    try {
      // Make a PUT request to update the order data
      await axios.put(`http://localhost:3001/updateProduct/${editProduct.id}`, editedProductData); // Replace with your API endpoint
      // Close the edit popup and fetch the updated data
      setIsEditProductPopupOpen(false);
      fetchData(); // Implement a function to fetch data from your API
    } catch (error) {
      console.error('Error updating Product data:', error);
    }
  };
   //edit handle for Product data**********************************************************************************************
  //  const handleSolutionsEditClick = async (solutionsId) => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/solutions/${solutionsId}`); // Replace with your API endpoint
  //     setEditSolutions(response.data);
  //     setIsEditSolutionsPopupOpen(true);
  //   } catch (error) {
  //     console.error('Error fetching solutions data:', error);
  //   }
  // };

  // const handleSolutionsEditSubmit  = async (editedSolutionsData) => {
  //   try {
  //     // Make a PUT request to update the order data
  //     await axios.put(`http://localhost:3001/solutions/${editSolutions.id}`, editedSolutionsData); // Replace with your API endpoint
  //     // Close the edit popup and fetch the updated data
  //     setIsEditSolutionsPopupOpen(false);
  //     fetchData(); // Implement a function to fetch data from your API
  //   } catch (error) {
  //     console.error('Error updating solutions data:', error);
  //   }
  // };
   //edit handle for Product data**********************************************************************************************

   const handlecontactusEditClick = async (contactusId) => { //contact
    try {
      const response = await axios.get(`http://localhost:3001/contactus/${contactusId}`); // Replace with your API endpoint
      setEditcontactus(response.data);
      setIsEditcontactusPopupOpen(true);
    } catch (error) {
      console.error('Error fetching order data:', error);
    }
  };

 

    /////////////////////////////////////   DELETE  ///////////////////////////////////////////////////////

  //handle soft delete for users  **********************************************************************************************
  const handleSoftDeleteUser = async (userId) => {
    try {
      // Send a PATCH request to update the status for soft delete
      await axios.patch(`http://localhost:3001/deleteuser/${userId}`, { isDeleted: 'true' });
  
      // Refresh the data or handle the removal of the soft-deleted user from your local state
      fetchData();
      setIsEditPopupOpen(false); // Close the edit popup
    } catch (error) {
      console.error('Error soft deleting user:', error);
    }
  };
  //handle soft delete for drivers  **********************************************************************************************
  
  // Soft delete function for driver data
  const handleSoftDeleteDriver = async (driverId) => {
    try {
      // Send a PATCH request to update the status for soft delete
      await axios.patch(`http://localhost:3001/driver/${driverId}`, { isDeleted: 'true' });
  
      // Refresh the data or handle the removal of the soft-deleted driver from your local state
      fetchData();
      setIsEditDriverPopupOpen(false); // Close the edit popup
    } catch (error) {
      console.error('Error soft deleting driver:', error);
    }
  };
  //handle soft delete for drivers  **********************************************************************************************
  
  // Soft delete function for driver data
  const handleSoftDeleteProduct = async (ProductId) => {
    try {
      // Send a PATCH request to update the status for soft delete
      await axios.patch(`http://localhost:3001/deleteProduct/${ProductId}`, { isDeleted: 'true' });
  
      // Refresh the data or handle the removal of the soft-deleted driver from your local state
      fetchData();
      setIsEditProductPopupOpen(false); // Close the edit popup
    } catch (error) {
      console.error('Error soft deleting Product:', error);
    }
  };
  //handle soft delete for drivers  **********************************************************************************************
 
  
  // const handleSoftDeletecontactus = async (contactusId) => {
  //   try {
  //     // Send a PATCH request to update the status for soft delete
  //     await axios.patch(`http://localhost:3001/contactus/${contactusId}`, { isDeleted: 'true' });//contactus
  
  //     // Refresh the data or handle the removal of the soft-deleted driver from your local state
  //     fetchData();
  //     setIsEditcontactusPopupOpen(false); // Close the edit popup
  //   } catch (error) {
  //     console.error('Error soft deleting contactus:', error);
  //   }
  // };
 
  /////////////////////////////////////   ADD  //////////////////////////////////////////////

//handle Add order   **********************************************************************************************
const [showAddOrderPopup, setShowAddOrderPopup] = useState(false);

const openAddOrderPopup = () => {
  setShowAddOrderPopup(true);
};

const closeAddOrderPopup = () => {
  setShowAddOrderPopup(false);
};

const handleAddOrderSubmit = async (newOrder) => {
  try {
    // Make a POST request to add a new order
    await axios.post('http://localhost:3001/order', newOrder);
    // Close the popup and fetch the updated data
    closeAddOrderPopup();
    fetchData(); // Assuming fetchData is a function that fetches the updated order data
  } catch (error) {
    console.error('Error adding new order:', error);
  }
};
//handle Add admin   **********************************************************************************************
const [showAddAdminPopup, setShowAddAdminPopup] = useState(false);

const openAddAdminPopup = () => {
  setShowAddAdminPopup(true);
};

const closeAddAdminPopup = () => {
  setShowAddAdminPopup(false);
};

const handleAddAdminSubmit = async (newAdmin) => {
  try {
    // Make a POST request to add a new order
    await axios.post('http://localhost:3001/register', newAdmin);
    // Close the popup and fetch the updated data
    closeAddAdminPopup();
    fetchData(); // Assuming fetchData is a function that fetches the updated order data
  } catch (error) {
    console.error('Error adding new admin:', error);
  }
};
//handle Add User   **********************************************************************************************
const [showAddUserPopup, setShowAddUserPopup] = useState(false);

const openAddUserPopup = () => {
  setShowAddUserPopup(true);
};

const closeAddUserPopup = () => {
  setShowAddUserPopup(false);
};

const handleAddUserSubmit = async (newUser) => {
  try {
    // Make a POST request to add a new order
    await axios.post('http://localhost:3001/register', newUser);
    // Close the popup and fetch the updated data
    closeAddUserPopup();
    fetchData(); // Assuming fetchData is a function that fetches the updated order data
  } catch (error) {
    console.error('Error adding new user:', error);
  }
};
//handle Add Driver   **********************************************************************************************
const [showAddDriverPopup, setShowAddDriverPopup] = useState(false);

const openAddDriverPopup = () => {
  setShowAddDriverPopup(true);
};

const closeAddDriverPopup = () => {
  setShowAddDriverPopup(false);
};

const handleAddDriverSubmit = async (newDriver) => {
  try {
    // Make a POST request to add a new order
    await axios.post('http://localhost:3001/driver', newDriver);
    // Close the popup and fetch the updated data
    closeAddDriverPopup();
    fetchData(); // Assuming fetchData is a function that fetches the updated order data
  } catch (error) {
    console.error('Error adding new Driver:', error);
  }
};
//handle Add Product   **********************************************************************************************
const [showAddProductPopup, setShowAddProductPopup] = useState(false);

const openAddProductPopup = () => {
  setShowAddProductPopup(true);
};

const closeAddProductPopup = () => {
  setShowAddProductPopup(false);
};

const handleAddProductSubmit = async (newProduct) => {
  try {
    // Make a POST request to add a new order
    await axios.post('http://localhost:3001/Product', newProduct);
    // Close the popup and fetch the updated data
    closeAddProductPopup();
    fetchData(); // Assuming fetchData is a function that fetches the updated order data
  } catch (error) {
    console.error('Error adding new Product:', error);
  }
};
//handle Add Solutions   **********************************************************************************************
const [showAddSolutionsPopup, setShowAddSolutionsPopup] = useState(false);

const openAddSolutionsPopup = () => {
  setShowAddSolutionsPopup(true);
};

const closeAddSolutionsPopup = () => {
  setShowAddSolutionsPopup(false);
};

const handleAddSolutionsSubmit = async (newSolutions) => {
  try {
    // Make a POST request to add a new order
    await axios.post('http://localhost:3001/solutions', newSolutions);
    // Close the popup and fetch the updated data
    closeAddSolutionsPopup();
    fetchData(); // Assuming fetchData is a function that fetches the updated order data
  } catch (error) {
    console.error('Error adding new Solutions:', error);
  }
};
//handle Add contactus   **********************************************************************************************
const [showAddcontactusPopup, setShowAddcontactusPopup] = useState(false);

const openAddcontactusPopup = () => {
  setShowAddcontactusPopup(true);
};

const closeAddcontactusPopup = () => {
  setShowAddcontactusPopup(false);
};

const handleAddcontactusSubmit = async (newcontactus) => {
  try {
    // Make a POST request to add a new order
    await axios.post('http://localhost:3001/contactus', newcontactus);
    // Close the popup and fetch the updated data
    closeAddcontactusPopup();
    fetchData(); // Assuming fetchData is a function that fetches the updated order data
  } catch (error) {
    console.error('Error adding new contactus:', error);
  }
};

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleOpenSideClick = () => {
    setIsSideBarOpen(true);
  };

  const handleCloseSideClick = () => {
    setIsSideBarOpen(false);
  };

  return (
    <>
    {/* component */}
    <div className="min-h-screen bg-gray-50/50">

    <aside className={`${isSideBarOpen ? 'translate-x-0 ' : ''}  bg-blue-900  -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}>
        <div className="relative border-b border-white/20">
          <a className="flex items-center gap-4 py-6 px-8" href="#/">
            <h3 className="block antialiased tracking-normal font-sans text-3xl text-center font-semibold leading-relaxed text-white">
         Giftify
            </h3>
          </a>
          <button
            className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            type="button"
            onClick={handleCloseSideClick}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
             
            </span>
          </button>
        </div>
        <div className="m-4">
          <ul className="mb-4 flex flex-col gap-1">
          <li>
              <a aria-current="page" className="active" href="#">
                <button
                  className={`middle none font-sans font-bold center text-blue-900 transition-all disabled:opacity-50 text-blue-900  hover:bg-white disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr text-black shadow-md active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize ${
                    selectedTab === 'dashboard' ? 'bg-white' : ''
                    }  ${selectedTab !== 'dashboard'  ? 'bg-white' : ''}`}
                  type="button"
                  onClick={() => handleTabClick('dashboard')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 text-inherit"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    dashboard
                  </p>
                </button>
              </a>
            </li>

            <li>
              <a className="" href="#">
              <button
                    className={`middle none font-sans font-bold center  text-blue-900 transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr hover:bg-white text-black shadow-md active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize ${
                      selectedTab === 'profile' ? 'bg-white' : ''
                    }  ${selectedTab !== 'profile'  ? 'bg-white' : ''}`}
                    type="button"
                    onClick={() => handleTabClick('profile')}
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 text-inherit"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    profile
                  </p>
                </button>
              </a>
            </li>
            <li>
              <a className="" href="#">
              <button
                  className={`middle none font-sans font-bold center  text-blue-900 transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr hover:bg-white text-black shadow-md active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize ${
                    selectedTab === 'users' ? 'bg-white' : ''
                  }  ${selectedTab !== 'users'  ? 'bg-white' : ''}`}
                  type="button"
                  onClick={() => handleTabClick('users')}
                >
                  <svg class="w-5 h-5"
xmlns="http://www.w3.org/2000/svg" width="24"  height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
</svg>

                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    Users
                  </p>
                </button>
              </a>
            </li>
            <li>
              <a className="" href="#">
              <button
                className={`middle none font-sans font-bold center text-blue-900 text-blue-900 transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr hover:bg-white text-black shadow-md  active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize ${
                  selectedTab === 'drivers' ? 'bg-white' : ''
                    }  ${selectedTab !== 'drivers'  ? 'bg-white' : ''}`}
                type="button"
                onClick={() => handleTabClick('drivers')}
              >
                 <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/> <circle cx="7" cy="17" r="2" /> <circle cx="17" cy="17" r="2" /> <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg>

                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    Drivers
                  </p>
                </button>
              </a>
            </li>

          

<li>
  <a className="" href="#">
    <button
      className={`middle none font-sans font-bold center text-blue-900 transition-all text-blue-900 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr hover:bg-white text-black shadow-md active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize ${
        selectedTab === 'Product' ? 'bg-white' : ''
      }  ${selectedTab !== 'Product' ? 'bg-white' : ''}`}
      type="button"
      onClick={() => handleTabClick('Product')}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
      <path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    </svg>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
          Product
      </p>
    </button>
  </a>
</li>

<li>
  <a className="" href="#">
    <button
      className={`middle none font-sans font-bold center transition-all text-blue-900 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr hover:bg-white text-black shadow-md active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize ${
        selectedTab === 'solutions' ? 'bg-white' : ''
      }  ${selectedTab !== 'solutions' ? 'bg-white' : ''}`}
      type="button"
      onClick={() => handleTabClick('solutions')}
    >
     <svg
                      version="1.1"
                      viewBox="0 0 1600 1600"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                    >
                      <path
                        transform="translate(685 175)"
                        d="m0 0c4.08 0.00582 8.17 0.00232 12.3-0.00357 3.17-0.00359 6.35-0.00247 9.52 1.28e-4 1.51 6.66e-4 3.02-1.49e-4 4.53-0.00248 2.08-0.00252 4.16 0.0013 6.24 0.0069 1.18 7.96e-4 2.36 0.00159 3.58 0.00241 2.64 0.127 2.64 0.127 3.64 1.13 0.0979 2.87 0.13 5.72 0.12 8.59 8.54e-4 0.911 0.00171 1.82 0.00259 2.76 0.00166 3.08-0.00387 6.16-0.00932 9.24-2.82e-4 2.2-1.24e-4 4.39 4.43e-4 6.59 2.88e-4 5.99-0.00561 12-0.0126 18-0.00623 6.25-0.00684 12.5-0.00803 18.7-0.00276 10.5-0.00902 21-0.0179 31.5-0.00917 10.8-0.0163 21.6-0.0205 32.4-2.63e-4 0.666-5.25e-4 1.33-7.96e-4 2.02-0.0013 3.34-0.00257 6.68-0.00381 10-0.0105 27.7-0.0281 55.5-0.0503 83.2-1.28 0.0251-2.57 0.0501-3.89 0.0759-4.84 0.0953-9.67 0.195-14.5 0.296-2.08 0.0429-4.16 0.0846-6.24 0.125-33.2-0.228-33.2-0.228-61.5 15.5-9.8 10.6-13.5 23.2-13.4 37.4 0.554 14.1 6.14 25.2 16.3 34.8 11.3 9.57 24.4 12.4 38.9 12.4 1.24 0.0142 2.49 0.0283 3.77 0.0429 3.93 0.0415 7.85 0.0571 11.8 0.0704 3.97 0.0264 7.94 0.0635 11.9 0.102 2.46 0.0225 4.92 0.0383 7.38 0.0468 1.65 0.0106 1.65 0.0106 3.33 0.0213 0.971 0.00348 1.94 0.00696 2.94 0.0105 2.2 0.131 2.2 0.131 3.2 1.13 0.0977 1.43 0.126 2.86 0.127 4.29 0.00282 0.926 0.00564 1.85 0.00854 2.81-0.00202 1.02-0.00405 2.05-0.00613 3.11 0.00175 1.07 0.0035 2.15 0.00531 3.25 0.00443 3.57 0.00148 7.15-0.00189 10.7 6.73e-4 2.48 0.00164 4.96 0.0029 7.44 0.00167 5.89-0.00185 11.8-0.00715 17.7-0.00479 5.99-2.56e-5 12 0.00538 18 0.00363 5.13 0.00246 10.3-1.28e-4 15.4-6.64e-4 2.45 1.42e-4 4.91 0.00248 7.36 0.00256 3.45-0.00137 6.9-0.0069 10.4 0.00202 1 0.00405 2.01 0.00613 3.04-0.0205 6.96-0.553 13.6-1.14 20.6h101v-8c0.212-2.28 0.212-2.28 0.516-4.08 0.114-0.679 0.229-1.36 0.346-2.06 0.128-0.697 0.256-1.39 0.388-2.11 0.136-0.743 0.273-1.49 0.413-2.25 3.37-17.5 11.1-32.7 22.3-46.5 0.461-0.602 0.923-1.2 1.4-1.82 14.4-18.4 39.2-29.5 61.8-32.4 26.7-3 53.6 3.88 74.9 20.7 23.5 20.2 34.8 44.7 37.9 75.5v3c0.767-9.22e-4 1.53-0.00184 2.32-0.00279 18.6-0.0221 37.3-0.0386 55.9-0.049 9.01-0.00516 18-0.0122 27-0.0236 7.85-0.00995 15.7-0.0164 23.6-0.0186 4.16-0.00131 8.32-0.00439 12.5-0.0116 3.91-0.00676 7.82-0.00889 11.7-0.00738 1.44-2.76e-4 2.88-0.00228 4.32-0.0061 1.96-0.00494 3.91-0.00319 5.87-0.00105 1.1-9.22e-4 2.2-0.00184 3.33-0.00279 2.45 0.123 2.45 0.123 3.45 1.12 0.107 3.11 0.141 6.2 0.125 9.31-0.00616 1.51-0.00616 1.51-0.0125 3.05-0.0245 3.54-0.0656 7.09-0.113 10.6-0.0129 0.993-0.0129 0.993-0.0261 2.01-1.26 92.4-23.1 181-113 317-0.489 0.59-0.979 1.18-1.48 1.79-13 15.6-27 31.2-42.5 44.4-2.33 2.01-4.59 4.07-6.86 6.14-4.32 3.9-8.76 7.59-13.3 11.2-3.11 2.54-6.17 5.14-9.22 7.75-5.05 4.3-10.2 8.43-15.5 12.5-4.55 3.55-8.96 7.25-13.3 11-3.86 3.29-7.82 6.45-11.8 9.56-4.8 3.73-9.47 7.58-14.1 11.6-5.61 4.87-11.4 9.5-17.3 14-0.833 0.676-0.833 0.676-1.68 1.37-1.62 1.25-3.3 2.42-5 3.55-6.48 4.59-6.48 4.59-10.2 11.4-0.392 3.85-0.433 7.61-0.322 11.5-0.0026 1.41-0.0104 2.82-0.023 4.23-0.0187 3.68 0.0346 7.36 0.103 11 0.0555 3.75 0.0369 7.49 0.0275 11.2-4.07e-4 5.47 0.0245 10.9 0.106 16.4 0.0162 1.1 0.0324 2.19 0.0491 3.32 0.154 2.8 0.359 5.28 1.16 7.96 2.9 1.9 2.9 1.9 6.5 3.38 6.2 2.85 11.3 6.18 16.5 10.6 0.828 0.641 1.66 1.28 2.51 1.94 14.3 11.8 21.5 31.8 23.3 49.8 1.43 20.1-6.42 39.5-19.4 54.7-9.71 10.3-22 17.3-35.4 21.6 0.523 2.17 1.09 4.3 1.75 6.43 5.83 20.8 2.61 41.2-7.73 59.8-2.3 3.94-4.96 7.39-8.03 10.8-0.98 1.12-0.98 1.12-1.98 2.26-6.19 6.66-13.9 12.6-22.5 15.6-4.05 1.57-6.79 2.67-8.72 6.7-0.852 3.31-1.43 6.58-1.94 9.96-0.456 2.45-0.92 4.89-1.39 7.34-0.229 1.21-0.458 2.41-0.694 3.66-2.92 13.9-8.86 27.1-15.7 39.4-0.53 0.957-0.53 0.957-1.07 1.93-8.21 14.6-18.4 27-29.9 39.1-0.92 1-0.92 1-1.86 2.02-13.7 14.5-32.3 24.6-50.1 33-0.956 0.46-1.91 0.92-2.9 1.39-30.9 14-70.1 17.2-103 9.61-1.14-0.249-1.14-0.249-2.3-0.504-45.6-10.2-84.6-38.2-110-77.5-8.92-14.3-15.6-29.5-20.3-45.7-0.382-1.32-0.382-1.32-0.773-2.66-1.13-4.09-2.04-8.02-2.39-12.3-0.381-7.05-0.381-7.05-4.07-12.7-3.95-2.48-8.23-4.15-12.6-5.85-4.23-1.81-7.54-4.74-10.9-7.81-0.83-0.75-1.66-1.5-2.52-2.27-14.7-14-23.2-32.6-23.8-52.9 0.0869-5.19 0.707-10.2 1.62-15.2 0.118-0.662 0.235-1.32 0.356-2.01 0.843-4.25 2.24-7.77 4.33-11.6-0.571-0.135-1.14-0.271-1.73-0.41-19.7-5.23-34.5-18.4-45-35.5-9.91-17.6-11.5-36.9-6.38-56.2 5.21-18.4 16.9-33.7 33.2-43.8 2.51-1.38 5.08-2.55 7.69-3.72 0.988-0.445 1.98-0.89 3-1.35 0.752-0.337 1.5-0.673 2.28-1.02 0.303-8.81 0.533-17.6 0.674-26.4 0.0676-4.09 0.159-8.18 0.307-12.3 0.142-3.96 0.219-7.91 0.253-11.9 0.0238-1.5 0.0704-3 0.141-4.5 0.477-8.25 0.477-8.25-2.65-15.7-3.52-3.65-7.53-6.46-11.7-9.29-1.3-1.02-2.6-2.05-3.88-3.09l-3.12-2.41c-5.15-4-10.2-8.13-15.1-12.4-3.86-3.29-7.82-6.45-11.8-9.56-5.42-4.2-10.6-8.59-15.8-13.1-4.58-3.95-9.29-7.7-14.1-11.4-4.6-3.59-9.08-7.31-13.5-11.1-3.28-2.81-6.61-5.53-9.99-8.23-5.53-4.49-10.7-9.35-15.9-14.3-3.26-3.1-6.54-6.14-9.94-9.08-3.45-2.99-6.74-6.1-9.95-9.35-0.517-0.519-1.03-1.04-1.57-1.57-3.33-3.37-6.53-6.83-9.61-10.4-2.16-2.5-4.4-4.93-6.64-7.36-28.1-30.9-52-67-70.1-105-1.13-2.33-2.27-4.65-3.42-6.97-6.27-12.8-11.7-25.8-16.6-39.2-0.316-0.849-0.631-1.7-0.957-2.57-16-43.4-24.7-88.4-28-134-0.106-1.39-0.106-1.39-0.214-2.8-6.73-91 15.8-186 61.2-265 0.429-0.757 0.858-1.51 1.3-2.29 16-28.2 35.4-54.3 56.7-78.7 1.04-1.19 1.04-1.19 2.1-2.41 1.12-1.28 2.24-2.56 3.37-3.84 1.09-1.25 2.16-2.51 3.21-3.79 0.538-0.648 1.08-1.3 1.63-1.96 0.471-0.578 0.941-1.16 1.43-1.75 1.26-1.25 1.26-1.25 3.26-1.25 0.269-0.594 0.537-1.19 0.814-1.8 1.19-2.21 2.39-3.65 4.16-5.41 0.584-0.583 1.17-1.17 1.77-1.77 0.93-0.91 0.93-0.91 1.88-1.84 0.637-0.629 1.27-1.26 1.93-1.91 3.7-3.63 7.44-7.17 11.4-10.5 2.17-1.87 4.27-3.81 6.36-5.76 5.69-5.29 11.5-10.3 17.7-15 0.95-0.745 1.9-1.49 2.88-2.26 27.2-21.1 56.1-39.9 87.1-54.8 2.07-1 4.13-2.02 6.2-3.05 73.1-36 153-46.1 233-46zm-225 97.1c-0.857 0.424-1.71 0.848-2.6 1.28-25.6 12.8-49.7 29.2-71.7 47.5-1.74 1.44-3.5 2.86-5.27 4.27-11.7 9.33-22.4 19.8-33 30.4-0.642 0.638-1.28 1.28-1.95 1.93-3.81 3.83-7.43 7.77-11 11.9-1.73 2-3.5 3.95-5.28 5.9-5.38 6.06-10.3 12.5-15.2 18.9-0.48 0.618-0.96 1.24-1.45 1.87-46 59.4-73.6 130-84.5 204-0.133 0.897-0.266 1.79-0.402 2.72-1.09 7.53-1.6 14.6-1.6 22.3h149l4-25c4.73-14.2 4.73-14.2 7.69-20 0.337-0.669 0.675-1.34 1.02-2.03 3.85-7.39 8.56-14.3 14.6-20.2 1.97-1.62 1.97-1.62 1.73-3.8 0.589-0.266 1.18-0.531 1.79-0.805 2.27-1.23 3.79-2.54 5.65-4.32 17.8-15.9 42.5-23.6 66.2-23.1 28.6 2.16 53.6 13.2 73 34.6 14.6 17.3 20.4 37.6 23.1 59.6 0.298 2.25 0.298 2.25 1.33 5.06h100l0.0625-37.4c0.0137-5.86 0.0137-5.86 0.0276-11.8 0.00334-3.49 0.00334-3.49 0.00536-6.98 0.00154-1.56 0.00506-3.12 0.0101-4.68 0.00728-2.36 0.00833-4.71 0.00795-7.07 0.0036-0.699 0.0072-1.4 0.0109-2.12 0.266-3.22 0.266-3.22-1.12-5.88-1.91-0.214-3.81-0.422-5.72-0.594-27.9-2.54-52.5-14.3-70.6-36-15.5-19.3-23.3-44.8-21.7-69.4 2.4-21.9 10.1-44.5 26.3-60.2 1.97-1.62 1.97-1.62 1.73-3.8 0.589-0.266 1.18-0.531 1.79-0.805 2.27-1.23 3.79-2.54 5.65-4.32 18.3-16.3 39.8-20.5 63.6-23.9v-126c-76.6 0-146 13.8-215 48zm-16 313c-0.615 0.451-1.23 0.902-1.86 1.37-9.27 7.28-15.2 18.1-17.1 29.6-0.145 2.22-0.246 4.45-0.316 6.68-0.0631 1.97-0.0631 1.97-0.127 3.97-0.04 1.41-0.0795 2.81-0.119 4.22-0.0208 0.709-0.0417 1.42-0.0632 2.15-0.276 9.43-0.474 18.9-0.499 28.3-0.00459 0.947-0.00918 1.89-0.0139 2.87 0.00201 0.864 0.00403 1.73 0.0061 2.62 0.00169 1.12 0.00169 1.12 0.00342 2.26 0.0617 2.16 0.0617 2.16 1.13 4.94-1.02-9.22e-4 -2.05-0.00184-3.11-0.00279-24.9-0.0222-49.8-0.0386-74.7-0.049-12-0.00516-24.1-0.0122-36.1-0.0236-10.5-0.00994-21-0.0164-31.5-0.0186-5.56-0.00131-11.1-0.0044-16.7-0.0116-5.22-0.00676-10.4-0.00889-15.7-0.00738-1.92-2.76e-4 -3.85-0.00228-5.77-0.0061-2.61-0.00493-5.23-0.00379-7.84-0.00105-0.771-0.00291-1.54-0.00583-2.34-0.00883-3.46-0.304-3.46-0.304-6.34 1.13-0.715 9.68 0.587 19.4 1.69 29 0.089 0.786 0.178 1.57 0.27 2.38 5.63 49.3 18.7 99.2 41.9 143 1.34 2.58 2.66 5.18 3.98 7.77 5.88 11.5 12 22.7 19.2 33.5 0.496 0.747 0.992 1.49 1.5 2.26 10.3 15.4 21 30.2 33.2 44.2 1.3 1.52 2.56 3.06 3.82 4.61 6.88 8.4 14.4 16.1 22.1 23.8 0.531 0.536 1.06 1.07 1.61 1.62 6.19 6.24 12.5 12.1 19.4 17.6 2.6 2.09 5.06 4.3 7.53 6.55 3.95 3.6 8.03 6.96 12.2 10.3 3.14 2.52 6.2 5.12 9.27 7.73 4.19 3.57 8.43 7.02 12.8 10.4 5.98 4.69 11.8 9.59 17.7 14.4 6.16 5.09 12.4 10.1 18.6 15.2 6.3 5.11 12.6 10.2 18.8 15.4 1.04 0.857 1.04 0.857 2.1 1.73 3.75 3.08 7.48 6.18 11.2 9.29 1.16 0.967 1.16 0.967 2.35 1.95 1.49 1.24 2.98 2.48 4.46 3.73 0.67 0.556 1.34 1.11 2.03 1.69 0.588 0.492 1.18 0.984 1.78 1.49 1.74 1.38 1.74 1.38 4.63 2.18v88c30.7 0.207 30.7 0.207 61.3 0.404 12.5 0.0783 25 0.158 37.5 0.244 9.1 0.0628 18.2 0.122 27.3 0.177 4.82 0.0292 9.65 0.0602 14.5 0.0955 4.54 0.0331 9.07 0.0615 13.6 0.0862 1.67 0.00992 3.34 0.0216 5 0.0351 2.27 0.0182 4.54 0.0301 6.82 0.0405 1.27 0.0083 2.55 0.0166 3.86 0.0251 3.11 0.0361 3.11 0.0361 6.07-1.11 0.0233-26.1 0.041-52.1 0.0518-78.2 0.00516-12.1 0.0122-24.2 0.0236-36.3 0.00994-10.5 0.0164-21.1 0.0186-31.6 0.00131-5.59 0.0044-11.2 0.0116-16.8 0.00676-5.25 0.00889-10.5 0.00738-15.8 2.76e-4 -1.93 0.00228-3.87 0.0061-5.8 0.00493-2.63 0.00379-5.25 0.00105-7.88 0.00291-0.775 0.00583-1.55 0.00883-2.35 0.306-3.47 0.306-3.47-1.13-6.36-1.91-0.214-3.81-0.422-5.72-0.594-27.2-2.47-51.2-13.6-69.3-34.4-16.2-20.6-25.6-46.8-22.8-73.2 2.72-21.1 10.4-42.8 26-58 1.97-1.62 1.97-1.62 1.73-3.8 0.589-0.266 1.18-0.531 1.79-0.805 2.27-1.23 3.79-2.54 5.65-4.32 16-14.3 35.9-20.6 56.8-22.5 3.67-0.252 3.67-0.252 6.74-1.39v-101h-149l-1-56c-3.9-15.6-9.28-27.2-23-36-18.6-10.7-40.8-10.2-58 3zm446 3c-12.3 12.8-15.2 25.8-15.6 43.1-0.0372 1.42-0.0748 2.85-0.113 4.27-0.22 8.66-0.358 17.3-0.387 26-0.00701 1.42-0.00701 1.42-0.0142 2.87 0.00209 0.864 0.00419 1.73 0.00635 2.62 0.00169 1.12 0.00169 1.12 0.00342 2.26 0.0617 2.16 0.0617 2.16 1.13 4.94-0.767-9.22e-4 -1.53-0.00184-2.32-0.00279-18.6-0.0221-37.3-0.0386-55.9-0.049-9.01-0.00516-18-0.0122-27-0.0236-7.85-0.00995-15.7-0.0164-23.6-0.0186-4.16-0.00131-8.32-0.00439-12.5-0.0116-3.91-0.00676-7.82-0.00889-11.7-0.00738-1.44-2.76e-4 -2.88-0.00228-4.32-0.0061-1.96-0.00494-3.91-0.00319-5.87-0.00105-1.65-0.00138-1.65-0.00138-3.33-0.00279-2.4-0.154-2.4-0.154-3.45 1.12-0.111 1.8-0.151 3.61-0.165 5.42-0.0112 1.18-0.0225 2.35-0.034 3.56-0.00733 1.3-0.0147 2.6-0.0222 3.95-0.0112 1.38-0.0228 2.75-0.0349 4.13-0.0314 3.75-0.0565 7.5-0.0802 11.3-0.0204 3.13-0.0439 6.26-0.0675 9.39-0.0557 7.39-0.106 14.8-0.154 22.2-0.0489 7.62-0.105 15.2-0.165 22.9-0.0515 6.54-0.0988 13.1-0.143 19.6-0.0262 3.91-0.0539 7.81-0.0854 11.7-0.0294 3.68-0.0536 7.36-0.0739 11-0.0122 1.99-0.0295 3.97-0.0471 5.96-0.0284 6.08 0.118 11.9 1.07 17.9-1.93-0.00786-1.93-0.00786-3.89-0.0159-4.84-0.0183-9.67-0.0297-14.5-0.0391-2.08-0.00498-4.16-0.0118-6.24-0.0205-33.7-0.624-33.7-0.624-62.3 15.8-9.93 10.6-13.7 23.3-13.6 37.6 0.577 14.7 6.61 25.6 17 35.6 9.32 7.97 20 12.1 32.2 12.3 1.12 0.0199 2.24 0.0399 3.4 0.0604 1.19 0.0167 2.39 0.0334 3.62 0.0506 1.23 0.0208 2.47 0.0416 3.74 0.063 3.93 0.0652 7.87 0.124 11.8 0.183 2.67 0.0427 5.34 0.0868 8.01 0.131 6.54 0.107 13.1 0.209 19.6 0.307-9.22e-4 1.28-0.00184 2.55-0.00279 3.87-0.0216 30.3-0.0381 60.6-0.0483 90.9-0.00125 3.72-0.00255 7.45-0.00387 11.2-2.62e-4 0.741-5.25e-4 1.48-7.95e-4 2.25-0.00436 12-0.0122 24-0.0214 36.1-0.00934 12.3-0.0149 24.7-0.0169 37-0.00138 7.61-0.00573 15.2-0.0138 22.8-0.00589 5.83-0.00654 11.7-0.00519 17.5-2.77e-4 2.4-0.00228 4.79-0.0061 7.19-0.00493 3.26-0.0038 6.52-0.00105 9.77-0.00291 0.962-0.00583 1.92-0.00883 2.92-0.416 4.14-0.416 4.14 1.13 7.62 1.62 0.096 3.24 0.122 4.87 0.12 1.05 0.00137 2.11 0.00275 3.19 0.00417 1.17-0.0036 2.33-0.00719 3.53-0.0109 1.83 2.19e-4 1.83 2.19e-4 3.69 4.43e-4 3.35-5.79e-4 6.71-0.00561 10.1-0.0126 3.5-0.00623 7-0.00684 10.5-0.00803 6.63-0.00311 13.3-0.0113 19.9-0.0213 7.55-0.0112 15.1-0.0167 22.7-0.0217 15.5-0.0105 31.1-0.0281 46.6-0.0503 0.00143-1.07 0.00285-2.13 0.00432-3.23 0.0167-10 0.0594-20.1 0.128-30.1 0.0343-5.17 0.0594-10.3 0.0635-15.5 0.00428-4.99 0.0327-9.97 0.0779-15 0.013-1.9 0.0173-3.8 0.0127-5.71-0.0049-2.67 0.0211-5.33 0.0544-7.99-0.00863-0.786-0.0173-1.57-0.0261-2.38 0.0841-4.02 0.484-5.84 3.07-8.98 0.862-0.693 1.72-1.39 2.61-2.1 0.804-0.683 1.61-1.37 2.44-2.07 0.846-0.678 1.69-1.36 2.56-2.05 4.24-3.43 8.42-6.91 12.6-10.4 4.5-3.82 9.05-7.56 13.7-11.2 10.7-8.54 21.3-17.3 31.9-26 4.96-4.09 9.93-8.16 14.9-12.2 1.83-1.5 3.67-3 5.5-4.5 3.67-3 7.33-6 11-9 0.911-0.746 1.82-1.49 2.76-2.26 1.79-1.46 3.59-2.93 5.38-4.38 5.91-4.81 11.7-9.71 17.5-14.7 0.559-0.482 1.12-0.965 1.69-1.46 0.533-0.461 1.07-0.922 1.62-1.4 1.45-1.22 2.96-2.38 4.46-3.53 0.688-0.584 1.38-1.17 2.09-1.77v-2c0.562-0.237 1.12-0.474 1.7-0.718 2.82-1.58 4.75-3.5 7.03-5.79 0.903-0.905 1.81-1.81 2.74-2.74 0.467-0.473 0.934-0.946 1.41-1.43 1.4-1.42 2.81-2.83 4.23-4.25 5.16-5.2 10.1-10.5 14.9-16.1 0.913-1.06 1.83-2.11 2.74-3.17 6.34-7.43 12.4-15 18.3-22.8 0.438-0.58 0.876-1.16 1.33-1.76 12.3-16.3 22.8-33.4 32.7-51.2 0.491-0.884 0.982-1.77 1.49-2.68 31.3-56.7 48.9-123 50.5-187-3.75-0.872-7.22-1.12-11.1-1.12-1.83-0.00206-1.83-0.00206-3.69-0.00417-1.34 0.00354-2.68 0.00717-4.03 0.0109-1.42 2.82e-4 -2.84 1.23e-4 -4.26-4.42e-4 -3.85-2.87e-4 -7.69 0.00559-11.5 0.0126-4.02 0.00626-8.05 0.00684-12.1 0.00803-7.61 0.00311-15.2 0.0113-22.8 0.0213-8.67 0.0112-17.3 0.0167-26 0.0217-17.8 0.0104-35.7 0.028-53.5 0.0503-0.0088-1.01-0.0088-1.01-0.0178-2.05-0.0643-7.07-0.149-14.1-0.245-21.2-0.0331-2.63-0.0612-5.27-0.084-7.9-0.0338-3.8-0.0862-7.61-0.142-11.4-0.00958-1.74-0.00958-1.74-0.0194-3.52-0.254-14.4-3.95-27.6-13.9-38.3-20.4-19.5-50.4-20-71.6-1.55zm-432 643c-6.52 6.9-8.38 12.4-8.19 21.8 0.897 7.42 4.6 13.1 10.2 17.8 8.56 5.02 17 4.68 26.6 4.63 1.69 0.00346 3.38 0.00822 5.08 0.0142 4.64 0.0125 9.28 0.00634 13.9-0.00296 5.01-0.00679 10 0.00369 15 0.0119 9.81 0.0133 19.6 0.0105 29.4 0.00176 7.97-0.00677 15.9-0.00769 23.9-0.00443 1.13 4.6e-4 2.27 9.19e-4 3.44 0.00139 2.3 9.59e-4 4.61 0.00193 6.91 0.00292 21.6 0.00855 43.2-0.00128 64.8-0.0174 18.5-0.0134 37.1-0.0111 55.6 0.00276 21.5 0.0161 43.1 0.0224 64.6 0.0132 2.3-9.56e-4 4.59-0.0019 6.89-0.00283 1.13-4.63e-4 2.26-9.26e-4 3.42-0.0014 7.96-0.00259 15.9 0.00178 23.9 0.00884 9.7 0.00841 19.4 0.00614 29.1-0.00984 4.95-0.00789 9.9-0.011 14.9-0.00105 4.53 0.00894 9.06 0.00402 13.6-0.0119 1.64-0.00335 3.28-0.00165 4.92 0.00563 11.1 0.0457 19.8-0.352 28.3-8.32 4.96-5.82 6.54-12.8 6.21-20.3-1.26-7.82-5.35-13.5-11.5-18.4-9.46-6.45-23.9-4.48-34.9-4.46-1.6-0.00115-3.19-0.00274-4.79-0.00473-4.36-0.00416-8.72-0.00212-13.1 9.86e-4 -4.71 0.00227-9.42-0.00123-14.1-0.00398-9.22-0.00444-18.4-0.00349-27.7-5.87e-4 -7.5 0.00226-15 0.00256-22.5 0.00148-1.07-1.53e-4 -2.14-3.06e-4 -3.24-4.64e-4 -2.17-3.2e-4 -4.34-6.44e-4 -6.51-9.73e-4 -20.3-0.00285-40.7 4.24e-4 -61 0.0058-17.4 0.00447-34.9 0.00369-52.3-9.19e-4 -20.3-0.00536-40.5-0.00745-60.8-0.00439-2.16 3.19e-4 -4.33 6.33e-4 -6.49 9.43e-4 -1.06 1.54e-4 -2.13 3.09e-4 -3.23 4.68e-4 -7.48 8.61e-4 -15-5.9e-4 -22.4-0.00295-9.13-0.00281-18.3-0.00203-27.4 0.00328-4.65 0.00262-9.3 0.00368-14 3.51e-4 -4.27-3e-3 -8.53-0.0013-12.8 0.00398-1.53 0.00111-3.07 5.71e-4 -4.6-0.00188-21.1-1.17-21.1-1.17-39.4 7.19zm50 100c-6.53 6.89-8.39 12.4-8.2 21.8 0.897 7.42 4.6 13.1 10.2 17.8 7.54 4.42 14.3 4.68 22.8 4.63 1.9 0.00702 1.9 0.00702 3.84 0.0142 3.5 0.0125 7 0.00635 10.5-0.00296 3.78-0.0068 7.56 0.0037 11.3 0.0119 7.4 0.0133 14.8 0.0105 22.2 0.00176 6.02-0.00678 12-0.00769 18.1-0.00443 0.857 4.6e-4 1.71 9.19e-4 2.6 0.00139 1.74 9.59e-4 3.48 0.00193 5.22 0.00292 16.3 0.00855 32.6-0.00128 49-0.0174 14-0.0134 28-0.0111 42 0.00276 16.3 0.0161 32.5 0.0224 48.8 0.0132 1.73-9.56e-4 3.47-0.0019 5.2-0.00283 0.853-4.63e-4 1.71-9.26e-4 2.59-0.0014 6.01-0.00259 12 0.00178 18 0.00884 7.32 0.00842 14.6 0.00612 22-0.00984 3.74-0.00787 7.47-0.011 11.2-0.00105 4.05 0.0106 8.1-0.00207 12.2-0.017 1.77 0.01 1.77 0.01 3.57 0.0203 9.39-0.0673 16.3-1.75 23.3-8.33 4.96-5.82 6.54-12.8 6.21-20.3-1.26-7.83-5.36-13.3-11.3-18.4-5.6-3.56-11.2-3.7-17.6-3.78-0.942-0.019-1.88-0.0381-2.85-0.0577-3.14-0.06-6.27-0.105-9.41-0.15-2.24-0.0377-4.49-0.0757-6.73-0.114-25.2-0.404-50.5-0.417-75.7-0.404-3.98 0.00154-7.96 0.00143-11.9 5.1e-4 -0.671-1.53e-4 -1.34-3.06e-4 -2.03-4.64e-4 -1.37-3.2e-4 -2.73-6.44e-4 -4.1-9.73e-4 -12.6-0.00281-25.2 3.62e-4 -37.8 0.0058-10.8 0.0045-21.5 0.00366-32.3-9.19e-4 -12.6-0.00537-25.3-0.00745-37.9-0.00439-1.35 3.18e-4 -2.7 6.33e-4 -4.05 9.43e-4 -0.994 2.31e-4 -0.994 2.31e-4 -2.01 4.68e-4 -4.62 8.56e-4 -9.24-6.27e-4 -13.9-0.00295-6.21-0.0029-12.4-8.56e-4 -18.6 0.00489-2.26 0.00131-4.53 9.61e-4 -6.79-0.00126-25.4-1.81-25.4-1.81-47.6 7.19zm45.2 92.9c-1.32 3.97-0.133 6.62 1.12 10.4 0.232 0.717 0.465 1.43 0.704 2.17 10.9 33.1 32.8 59.8 64.1 75.6 31 15.2 64.9 16.9 97.5 5.98 1.19-0.406 2.37-0.812 3.59-1.23 0.856-0.272 1.71-0.544 2.59-0.824 13.3-4.65 26.1-13.8 36.4-23.2 0.508-0.461 1.02-0.921 1.54-1.4 18.3-16.8 34.1-41.5 37.5-66.6-1.95-1.95-4.92-1.12-7.52-1.13-1.42 0.00437-1.42 0.00437-2.87 0.00883-0.997-8.54e-4 -1.99-0.00171-3.02-0.00259-3.37-0.00166-6.74 0.00387-10.1 0.00932-2.4 2.82e-4 -4.81 1.24e-4 -7.21-4.42e-4 -5.19-2.28e-4 -10.4 0.00262-15.6 0.00824-7.5 0.00811-15 0.0107-22.5 0.012-12.2 0.00219-24.3 0.00885-36.5 0.0183-11.8 0.00917-23.7 0.0163-35.5 0.0205-0.729 2.63e-4 -1.46 5.25e-4 -2.21 7.96e-4 -3.65 0.0013-7.31 0.00257-11 0.00381-30.3 0.0104-60.7 0.0281-91 0.0503z"
                        fill="#1e3a8a"
                      />
                      <path
                        transform="translate(1015 24.9)"
                        d="m0 0c1.45-0.00187 2.9-0.00417 4.35-0.00687 3.96-0.00608 7.92-0.00599 11.9-0.00481 4.28 2.05e-4 8.56-0.00532 12.8-0.0101 8.38-0.00829 16.8-0.0111 25.1-0.0116 6.81-4.76e-4 13.6-0.00254 20.4-0.0057 19.3-0.0088 38.7-0.0134 58-0.0127 1.04 4e-5 2.08 7.99e-5 3.16 1.21e-4 1.04 4.09e-5 2.09 8.18e-5 3.16 1.24e-4 16.9 4.06e-4 33.8-0.00916 50.7-0.0233 17.4-0.0144 34.7-0.0213 52.1-0.0204 9.74 3.31e-4 19.5-0.00239 29.2-0.0132 8.29-0.00913 16.6-0.0113 24.9-0.00449 4.23 0.00325 8.45 0.00336 12.7-0.00535 3.88-0.00792 7.76-0.00638 11.6 0.00228 2.05 0.00224 4.09-0.00525 6.14-0.0132 24.9 0.0915 45.4 5.98 63.5 23.6 22.5 23.8 20.7 54.5 20.7 85.1 8.08e-4 2.74 0.0031 5.49 0.00531 8.23 0.00442 6.64 0.0035 13.3 5.87e-4 19.9-0.00227 5.41-0.00256 10.8-0.00148 16.2 2.3e-4 1.16 2.3e-4 1.16 4.64e-4 2.34 3.2e-4 1.57 6.44e-4 3.15 9.73e-4 4.72 0.00284 14.7-4.14e-4 29.4-0.0058 44.1-0.00446 12.6-0.0037 25.1 9.19e-4 37.7 0.00538 14.6 0.00744 29.3 0.00439 43.9-3.18e-4 1.57-6.33e-4 3.14-9.43e-4 4.7-1.54e-4 0.771-3.09e-4 1.54-4.68e-4 2.34-8.57e-4 5.39 5.8e-4 10.8 0.00295 16.2 0.00283 6.59 0.00199 13.2-0.00328 19.8-0.00259 3.35-0.00316 6.7-3.51e-4 10 0.00942 12.4-0.0521 24.7-0.543 37.1-0.034 0.922-0.068 1.84-0.103 2.79-0.917 20.1-9.86 38.7-24.5 52.4-16.9 14.5-36.8 18.6-58.4 18.7-1.78 0.0276-3.55 0.0564-5.33 0.0864-5.74 0.0883-11.5 0.133-17.2 0.171-0.982 0.0073-1.96 0.0146-2.98 0.0221-14.3 0.105-28.6 0.121-42.9 0.105-4.27-0.00266-8.53 0.00226-12.8 0.00699-4.13 0.00359-8.26 0.00248-12.4-1.28e-4 -1.96-6.66e-4 -3.92 1.47e-4 -5.88 0.00248-2.69 0.00252-5.38-0.00129-8.08-0.0069-1.2 0.00304-1.2 0.00304-2.43 0.00613-5.46-0.0212-5.46-0.0212-6.57-1.14-0.107-1.69-0.146-3.38-0.158-5.06-0.0154-1.62-0.0154-1.62-0.0311-3.28-0.0073-1.18-0.0146-2.36-0.0221-3.58-0.0281-2.49-0.0568-4.99-0.0859-7.48-0.0411-3.94-0.0779-7.88-0.104-11.8-0.0278-3.8-0.0737-7.59-0.122-11.4-0.00488-1.74-0.00488-1.74-0.00986-3.51-0.216-14.6-4.07-28.2-14.5-38.9-12.7-11.1-26.3-14-42.7-13.2-8.96 0.772-16.2 4.85-23.3 10.2l-3.12 2.25c-9.86 9.43-14.8 21.1-15.2 34.6-0.0208 0.666-0.0416 1.33-0.063 2.02-0.0432 1.42-0.0842 2.84-0.123 4.26-0.0577 2.07-0.124 4.14-0.191 6.21-0.27 8.93-0.33 17.8-0.318 26.8 8.28e-4 1.15 0.00166 2.3 0.00251 3.48 0.00214 2.81 0.00515 5.62 0.00896 8.42-25.9 0.154-51.9 0.302-77.8 0.443-12 0.0657-24.1 0.133-36.1 0.205-10.5 0.0627-21 0.122-31.5 0.177-5.56 0.0292-11.1 0.0603-16.7 0.0955-5.22 0.033-10.4 0.0614-15.7 0.0862-1.92 0.00994-3.85 0.0216-5.77 0.0351-2.61 0.0181-5.23 0.0301-7.84 0.0405-0.771 0.0068-1.54 0.0136-2.34 0.0206-1.78 0.00382-3.56-0.0438-5.34-0.103-1.65-1.65-1.14-3.56-1.16-5.83-0.00979-1.04-0.0196-2.09-0.0297-3.17-0.00576-1.16-0.0115-2.31-0.0174-3.5-0.0099-1.21-0.0198-2.42-0.03-3.67-0.0263-3.33-0.0481-6.65-0.068-9.98-0.0218-3.47-0.0492-6.95-0.0761-10.4-0.05-6.58-0.0949-13.2-0.138-19.7-0.0493-7.49-0.104-15-0.16-22.5-0.114-15.4-0.221-30.8-0.323-46.2-1.21-0.126-2.42-0.251-3.67-0.38-1.62-0.172-3.24-0.345-4.86-0.518-0.795-0.0818-1.59-0.164-2.41-0.248-26-2.81-49.8-16.1-66.3-36.4-16.1-20.9-24.6-47.7-21.2-74 2.95-20.2 10.6-37.6 23.5-53.5l2.38-3.19c16.7-17.9 39.4-28.9 63.6-30.9 0.967-0.0872 1.93-0.174 2.93-0.264 2.36-0.212 4.73-0.42 7.09-0.622-0.00999-0.999-0.00999-0.999-0.0202-2.02-0.067-7.01-0.112-14-0.145-21-0.015-2.61-0.0354-5.21-0.0615-7.82-0.27-27.6 2-50.7 21.8-71.7 19.3-19.1 41.9-22.6 68-22.5zm-31.8 56.2c-6.88 7.3-8.11 13.3-8.23 23.1-0.0292 1.5-0.0292 1.5-0.059 3.04-0.0606 3.29-0.107 6.58-0.152 9.86-0.0373 2.28-0.0749 4.56-0.113 6.85-0.242 15.4-0.362 30.8-0.387 46.2-0.00268 0.948-0.00536 1.9-0.00812 2.87-0.00582 2.69-0.00417 5.38 3.05e-4 8.07-0.00197 0.776-0.00395 1.55-0.00598 2.35 0.0221 5.26 0.488 10.4 1.14 15.6-1.93-0.00786-1.93-0.00786-3.89-0.0159-4.84-0.0183-9.67-0.0297-14.5-0.0391-2.08-0.00498-4.16-0.0118-6.24-0.0205-33.7-0.624-33.7-0.624-62.3 15.8-9.93 10.6-13.7 23.3-13.6 37.6 0.577 14.7 6.61 25.6 17 35.6 9.32 7.97 20 12.1 32.2 12.3 1.12 0.0199 2.24 0.0399 3.4 0.0604 1.19 0.0167 2.39 0.0334 3.62 0.0506 1.23 0.0208 2.47 0.0416 3.74 0.063 3.93 0.0652 7.87 0.124 11.8 0.183 2.67 0.0427 5.34 0.0868 8.01 0.131 6.54 0.107 13.1 0.209 19.6 0.307-9.22e-4 0.633-0.00184 1.27-0.00279 1.92-0.0221 15.4-0.0386 30.8-0.049 46.1-0.00516 7.44-0.0122 14.9-0.0236 22.3-0.00995 6.48-0.0164 13-0.0186 19.4-0.00131 3.43-0.00439 6.87-0.0116 10.3-0.00801 3.83-0.00826 7.65-0.0078 11.5-0.00539 1.72-0.00539 1.72-0.0109 3.47 0.00206 1.55 0.00206 1.55 0.00417 3.14-9.22e-4 0.906-0.00184 1.81-0.00279 2.75-0.104 2.04-0.104 2.04 1.12 3.04 3.11 0.0953 6.19 0.126 9.29 0.114 1.46 2.19e-4 1.46 2.19e-4 2.96 4.42e-4 3.24-7e-4 6.48-0.00849 9.72-0.0163 2.24-0.00186 4.48-0.00329 6.72-0.00429 5.91-0.00383 11.8-0.0137 17.7-0.0247 6.03-0.0102 12.1-0.0148 18.1-0.0198 11.8-0.0107 23.7-0.0278 35.5-0.0488 0.15-1.04 0.15-1.04 0.304-2.1 0.471-3.22 0.958-6.43 1.45-9.65 0.157-1.09 0.315-2.18 0.477-3.31 1.62-10.5 4.62-20.4 9.46-29.9 0.337-0.669 0.675-1.34 1.02-2.03 3.85-7.39 8.56-14.3 14.6-20.2 1.97-1.62 1.97-1.62 1.73-3.8 0.587-0.264 1.17-0.529 1.78-0.801 2.3-1.24 3.89-2.6 5.79-4.39 18.2-16.1 42.9-23.5 66.9-23.1 23.3 1.66 45 9.4 62.5 25.2l2.73 2.45c19 18 26.8 41.1 29.9 66.5 0.298 2.25 0.298 2.25 1.33 5.06 10.3 0.0696 20.6 0.123 30.9 0.155 4.78 0.0156 9.56 0.0368 14.3 0.0709 4.62 0.0327 9.23 0.0506 13.8 0.0583 1.76 0.00552 3.51 0.0163 5.27 0.0326 2.47 0.0219 4.94 0.0248 7.41 0.0234 0.719 0.0108 1.44 0.0216 2.18 0.0327 6.81-0.0411 13.1-1.93 18.3-6.44 0.624-0.507 1.25-1.01 1.89-1.54 5.91-7.63 6.44-16 6.37-25.3 0.00624-1.27 0.0125-2.53 0.0189-3.84 0.0166-3.49 0.00849-6.99-0.00394-10.5-0.00909-3.78 0.00494-7.55 0.0159-11.3 0.0178-7.39 0.014-14.8 0.00235-22.2-0.00905-6.01-0.0103-12-0.0059-18 9.19e-4 -1.28 9.19e-4 -1.28 0.00186-2.59 0.00128-1.74 0.00258-3.48 0.00389-5.22 0.0114-16.3-0.00169-32.6-0.0232-48.9-0.0179-14-0.0148-27.9 0.00368-41.9 0.0214-16.2 0.0298-32.5 0.0176-48.7-0.00127-1.73-0.00253-3.47-0.00377-5.2-6.17e-4 -0.853-0.00123-1.71-0.00187-2.58-0.00345-6 0.00236-12 0.0118-18 0.0112-7.31 0.00814-14.6-0.0131-21.9-0.0105-3.73-0.0147-7.46-0.0014-11.2 0.0142-4.05-0.0028-8.09-0.0227-12.1 0.00892-1.17 0.0178-2.34 0.027-3.55-0.0788-8.27-1.38-15.5-6.68-22-0.735-0.608-1.47-1.22-2.23-1.84-1.09-0.944-1.09-0.944-2.21-1.91-4.99-3.29-10-3.9-15.9-4.21-0.7-0.0376-1.4-0.0752-2.12-0.114-6.96-0.348-13.9-0.408-20.9-0.396-1.38-0.00116-2.75-0.00275-4.13-0.00473-3.73-0.00412-7.47-0.00213-11.2 9.86e-4 -4.05 0.00228-8.09-0.00124-12.1-0.00398-7.91-0.00443-15.8-0.0035-23.7-5.87e-4 -6.43 0.00227-12.9 0.00256-19.3 0.00148-0.918-1.53e-4 -1.84-3.06e-4 -2.78-4.64e-4 -1.87-3.2e-4 -3.73-6.44e-4 -5.6-9.73e-4 -17.5-0.00285-34.9 4.18e-4 -52.4 0.0058-15 0.00447-29.9 0.00369-44.9-9.19e-4 -17.4-0.00536-34.8-0.00745-52.2-0.00439-1.86 3.19e-4 -3.72 6.33e-4 -5.57 9.43e-4 -0.914 1.54e-4 -1.83 3.09e-4 -2.77 4.68e-4 -6.42 8.61e-4 -12.8-5.88e-4 -19.3-0.00295-7.83-0.00281-15.7-0.00203-23.5 0.00328-3.99 0.00262-7.98 0.00368-12 3.51e-4 -3.66-0.00301-7.32-0.0013-11 0.00398-1.93 0.00162-3.86-0.00159-5.79-0.00506-18.7-0.774-18.7-0.774-34.6 7.19z"
                        fill="#000100"
                      />
                    </svg>
      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
        Solutions
      </p>
    </button>
  </a>
</li>
<li>
  <a className="" href="#">
    <button
      className={`middle none font-sans font-bold center transition-all text-blue-900 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr hover:bg-white text-black shadow-md active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize ${
        selectedTab === 'contactus' ? 'bg-white' : ''
      }  ${selectedTab !== 'contactus' ? 'bg-white' : ''}`}
      type="button"
      onClick={() => handleTabClick('contactus')}
    >
                <svg class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
      contactus
      </p>
    </button>
  </a>
</li>



          </ul>
          <ul className="mb-4 flex flex-col gap-1">
            <li className="mx-3.5 mt-4 mb-2">
              <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
                {/* auth pages */}
              </p>
            </li>
            <li>
             
                <button
                  className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-black hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden="true"
                    className="w-5 h-5 text-inherit"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p onClick={handleSignOut}  className="block antialiased font-sans text-base leading-relaxed text-white font-medium capitalize">
                    sign out
                  </p>
                </button>
            
            </li>
            <li>
              <a className="" href="#">
                <button
                  className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-black hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                 
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  </p>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </aside>
     
      <div className="p-4 xl:ml-80">
        <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <nav aria-label="breadcrumb" className="w-max">
                <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                  <li className="flex items-center text-black antialiased font-sans text-lg font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                   
                      <p className="block antialiased font-sans text-2xl leading-normal text-black font-bold  transition-all hover:text-blue-500 hover:opacity-100">
                      <button
                  type="button"
                  onClick={() => {
                    if (isSideBarOpen) {
                      handleCloseSideClick();
                    } else {
                      handleOpenSideClick();
                    }
                  }}
          
                >dashboard</button>
                        
                      </p>
                  </li>



                </ol>
              </nav>
             
            </div>
            <div className="flex items-center">
              <div className="mr-auto md:mr-4 md:w-56">
                <div className="relative w-full min-w-[200px] h-10">
                 
                </div>
              </div>
      
            </div>
          </div>
        </nav>
        <div className="mt-12">
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="relative flex flex-col bg-clip-border h-24 rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-blue-900 to-[#54beb3] text-white  shadow-md absolute -mt-4 grid h-12 w-32 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-black"
                >
                  <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                    clipRule="evenodd"
                  />
                  <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Today's Money
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  $53k
                </h4>
              </div>
            
            </div>
            <div className="relative flex flex-col bg-clip-border h-24 rounded-xl bg-white text-gray-700 shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-blue-900 to-[#54beb3] text-white  shadow-md absolute -mt-4 grid h-12 w-32 place-items-center">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-black"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Today's Users
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  2,300
                </h4>
              </div>
             
            </div>
            <div className="relative flex flex-col bg-clip-border h-24 rounded-xl bg-white text-gray-700 shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-blue-900 to-[#54beb3] text-white  shadow-md absolute -mt-4 grid h-12 w-32 place-items-center">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-black"
                >
                  <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Today's Drivers
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    20
                </h4>
              </div>
           
            </div>
            <div className="relative flex flex-col bg-clip-border h-24 rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-blue-900 to-[#54beb3] text-white  shadow-md absolute -mt-4 grid h-12 w-32 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-black"
                >
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Orders
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  $103,430
                </h4>
              </div>
             
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-6 ">
          
            <div className="bg-white p-8 rounded-md w-full">
    <div className=" flex  items-center justify-between pb-6">
    </div>
    <div>
     

      {/* Conditional rendering based on selected tab */}

      {/* DASHBOARD DATA */} 
      {selectedTab === 'dashboard' && (
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className='font-bold text-xl md:mb-10'> Order </div>

          {/* <button onClick={openAddOrderPopup} className='bg-white rounded-md px-5 py-2 text-white font-bold mb-3'>Add Order</button> */}

{/* Add Order Popup
{showAddOrderPopup && (
  <AddOrderForm onSubmit={handleAddOrderSubmit} onCancel={closeAddOrderPopup} />
)} */}

        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Order Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                shipping Location
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                receiving Location
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                shipping Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
                </th>
               
              </tr>
            </thead>
            <tbody>
            {data.map(order => (
              <tr key={order.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                  <Link to={`/OrderDetails/${order.id}`}>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                       {order.order_name}
                      </p>
                    </div>
                     </Link> 
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">  {order.location}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                
                  {order.location}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{order.date}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className={`relative inline-block px-5 py-2 font-semibold leading-tight  text-white
                ${order.status === 'pending' ? 'bg-gray-500' : ''}
                ${order.status === 'shipped' ? 'bg-yellow-500' : ''}
                ${order.status === 'on the way' ? 'bg-orange-500' : ''}
                ${order.status === 'delivered' ? 'bg-green-500' : ''}
              rounded-full
              `}>
              
                <span className="relative">{order.status}</span>
              </span>
            </td>
          
              </tr>
               ))}
        
            </tbody>
          </table>
           </div>
        
       
      </div>
       
        </div>
      )}
    
{/* PROFILE DATA */} 
      {selectedTab === 'profile' && (
           <div>
           <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
           <div className='font-bold text-xl md:mb-10'> Admin </div>

           <button onClick={openAddAdminPopup} className='bg-blue-900 rounded-md px-5 py-2 text-white font-bold mb-3'>Add Admin</button>

{/* Add Order Popup */}
{showAddAdminPopup && (
  <AddAdminForm onSubmit={handleAddAdminSubmit} onCancel={closeAddAdminPopup} />
)}

         <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
           <table className="min-w-full leading-normal">
             <thead>
               <tr>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                   User Name
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                 User Phone Number
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                 User Email
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                 User Password
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
               </tr>
             </thead>
             <tbody>
             {data.map(userData => (
              userData.isDeleted !== 'true' && (
               <tr key={userData.id}>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <div className="flex items-center">
                   <Link to={`/OrderDetails/${userData.user_username}`}>
  
                     <div className="ml-3">
                       <p className="text-gray-900 whitespace-no-wrap">
                        {userData.user_username}
                       </p>
                     </div>
                      </Link> 
                   </div>
                 </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">  {userData.user_phone_number}</p>
                 </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">
                 
                   {userData.email}
                   </p>
                 </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">{userData.user_password}</p>
                 </td>
                
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex space-x-2">
        
       <button onClick={() => handleEditClick(userData.id)}>
          <svg class="text-teal-600 w-5 h-5 "
        xmlns="http://www.w3.org/2000/svg" width="24"  height="24"   viewBox="0 0 24 24"  stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
            {/* ... SVG path for edit */}
            </button>

            <button onClick={() => handleSoftDeleteUser(userData.id)} >
          <svg class="text-orange-600 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          </button>

            {/* ... SVG path for delete */}
         
        </div>
      </td>
               </tr>
              )  ))}
         
             </tbody>
           </table>
            </div>
         
        
       </div>
        
         </div>
            )}
            {isEditPopupOpen && (
  <EditPopupUserData
    user={editUser}
    isOpen={isEditPopupOpen}
    onClose={() => setIsEditPopupOpen(false)}
    onSubmit={handleEditSubmit}
  />
)}
      {/* USER DATA */}
      {selectedTab === 'users' && (
         <div>
         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
         <div className='font-bold text-xl md:mb-10'> Users </div>
         {/* <button onClick={openAddUserPopup} className='bg-white rounded-md px-5 py-2 text-white font-bold mb-3'>Add User</button> */}

{/* Add Order Popup
{showAddUserPopup && (
  <AddUserForm onSubmit={handleAddUserSubmit} onCancel={closeAddUserPopup} />
)} */}
       <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
         <table className="min-w-full leading-normal">
           <thead>
             <tr>
               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                 User Name
               </th>
               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               User Phone Number
               </th>
               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               User Email
               </th>
               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               User Password
               </th>
               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
             </tr>
           </thead>
           <tbody>
           {data.map(userData => (
            userData.isDeleted !== 'true' && (
             <tr key={userData.id}>
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <div className="flex items-center">
                 <Link to={`/OrderDetails/${userData.user_username}`}>

                   <div className="ml-3">
                     <p className="text-gray-900 whitespace-no-wrap">
                      {userData.user_username}
                     </p>
                   </div>
                    </Link> 
                 </div>
               </td>
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <p className="text-gray-900 whitespace-no-wrap">  {userData.user_phone_number}</p>
               </td>
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <p className="text-gray-900 whitespace-no-wrap">
               
                 {userData.email}
                 </p>
               </td>
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <p className="text-gray-900 whitespace-no-wrap">{userData.user_password}</p>
               </td>
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex space-x-2">
        
      
            <button onClick={() => handleSoftDeleteUser(userData.id)}>
          <svg class="text-orange-600 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          </button>

            {/* ... SVG path for delete */}
         
        </div>
      </td>

             </tr>
            )  ))}
       
           </tbody>
         </table>
          </div>
   
      
     </div>
      
       </div>
      )}
          {/* DRIVER DATA */} 
      {selectedTab === 'drivers' && (
         <div>
         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
         <div className='font-bold text-xl md:mb-10'> Drivers </div>
         <button onClick={openAddDriverPopup} className='bg-blue-900 rounded-md px-5 py-2 text-white font-bold mb-3'>Add Driver</button>

{/* Add Driver Popup */}
{showAddDriverPopup && (
  <AddDriverForm onSubmit={handleAddDriverSubmit} onCancel={closeAddDriverPopup} />
)}

       <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
         <table className="min-w-full leading-normal">
           <thead>
             <tr>
             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              f_name
               </th>
               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               l_name
               </th>
               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              email
               </th>
               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               driver_license
               </th>
              
               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               plate_number
               </th>
          
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
             </tr>
           </thead>
           <tbody>
           {data.map(driverData => (
            driverData.isDeleted !== 'true' && (
             <tr key={driverData.id}>
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <div className="flex items-center">
                 <Link to={`/OrderDetails/${driverData.f_name}`}>
                   <div className="ml-3">
                     <p className="text-gray-900 whitespace-no-wrap">
                      {driverData.f_name}
                     </p>
                   </div>
                    </Link> 
                 </div>
               </td>
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <div className="flex items-center">
                 <Link to={`/OrderDetails/${driverData.l_name}`}>
                   <div className="ml-3">
                     <p className="text-gray-900 whitespace-no-wrap">
                      {driverData.l_name}
                     </p>
                   </div>
                    </Link> 
                 </div>
               </td>
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <p className="text-gray-900 whitespace-no-wrap">  {driverData.email}</p>
               </td>
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <p className="text-gray-900 whitespace-no-wrap">
               
                 {driverData.driver_license}
                 </p>
               </td>
             
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <p className="text-gray-900 whitespace-no-wrap">{driverData.plate_number}</p>
               </td>
              
             
           
         
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex space-x-2">
        
       <button onClick={() => handleDriverEditClick(driverData.id)}>
          <svg class="text-teal-600 w-5 h-5 "
        xmlns="http://www.w3.org/2000/svg" width="24"  height="24"   viewBox="0 0 24 24"  stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
            {/* ... SVG path for edit */}
            </button>

            <button  onClick={() => handleSoftDeleteDriver(driverData.id)}>
          <svg class="text-orange-600 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          </button>

            {/* ... SVG path for delete */}
         
        </div>
      </td>
             </tr>
              )))}
       
           </tbody>
         </table>
          </div>
   
      
     </div>
      
       </div>
      )}
           {isEditDriverPopupOpen && (
  <EditPopupDriverData
    driver={editDriver}
    isOpen={isEditDriverPopupOpen}
    onClose={() => setIsEditDriverPopupOpen(false)}
    onSubmit={handleDriverEditSubmit}
  />
)}
{/* Product DATA */} 
{selectedTab === 'Product' && (
           <div>
           <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className='font-bold text-xl md:mb-10'> Product </div>
         <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
         <button onClick={openAddProductPopup} className='bg-blue-900 rounded-md px-5 py-2 text-white font-bold mb-3'>Add Product</button>

{/* Add Order Popup */}
{showAddProductPopup && (
  <AddProductForm onSubmit={handleAddProductSubmit} onCancel={closeAddProductPopup} />
)}
           <table className="min-w-full leading-normal">
             <thead>
               <tr>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                   Title
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Description             
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
               Price             
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Count
                    </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Image
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
                 </th>
                
               </tr>
             </thead>
             <tbody>
             {data.map(userData => (
              userData.isDeleted !== 'true' && (
               <tr key={userData.id}>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <div className="flex items-center">
                
                     <div className="ml-3">
                       <p className="text-gray-900 whitespace-no-wrap">
                        {userData.Product_title}
                       </p>
                     </div>
                    
                   </div>
                 </td>

                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">  {userData.Product_description}</p>
                 </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">  {userData.Product_price}</p>
                 </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">  {userData.Product_count}</p>
                 </td>
                
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">
                 
                   {userData.Product_image}
                   </p>
                 </td>

                 
                
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex space-x-2">
        
       <button onClick={() => handleProductEditClick(userData.id)}>
          <svg class="text-teal-600 w-5 h-5 "
        xmlns="http://www.w3.org/2000/svg" width="24"  height="24"   viewBox="0 0 24 24"  stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
            {/* ... SVG path for edit */}
            </button>

            <button onClick={() => handleSoftDeleteProduct(userData.id)} >
          <svg class="text-orange-600 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          </button>

            {/* ... SVG path for delete */}
         
        </div>
      </td>
               </tr>
              )  ))}
         
             </tbody>
           </table>
            </div>
         
        
       </div>
        
         </div>
            )}
            
            {isEditProductPopupOpen && (
  <EditPopupProductData
  Product={editProduct}
    isOpen={isEditProductPopupOpen}
    onClose={() => setIsEditProductPopupOpen(false)}
    onSubmit={handleProductEditSubmit}
  />
)}
{/* SOLUTIONS DATA */} 
{selectedTab === 'solutions' && (
           <div>
           <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className='font-bold text-xl md:mb-10'> Solutions </div>
         <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
     
         <button onClick={openAddSolutionsPopup} className='bg-white rounded-md px-5 py-2 text-white font-bold mb-3'>Add Solutions</button>

{/* Add Order Popup */}
{showAddSolutionsPopup && (
  <AddSolutionsForm onSubmit={handleAddSolutionsSubmit} onCancel={closeAddSolutionsPopup} />
)}
           <table className="min-w-full leading-normal">
             <thead>
               <tr>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Title
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                 Description
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Image 
                 </th>
                
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
               </tr>
             </thead>
             <tbody>
             {data.map(userData => (
              userData.isDeleted !== 'true' && (
               <tr key={userData.id}>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <div className="flex items-center">
                     <div className="ml-3">
                       <p className="text-gray-900 whitespace-no-wrap">
                        {userData.solutions_title}
                       </p>
                     </div>
                  
                   </div>
                 </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">  {userData.solutions_description}</p>
                 </td>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">
                 
                   {userData.solutions_image}
                   </p>
                 </td>
                
                
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex space-x-2">
        
       <button onClick={() => handleSolutionsEditClick(userData.id)}>
          <svg class="text-teal-600 w-5 h-5 "
        xmlns="http://www.w3.org/2000/svg" width="24"  height="24"   viewBox="0 0 24 24"  stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
            {/* ... SVG path for edit */}
            </button>

            <button onClick={() => handleSoftDeleteSolutions(userData.id)} >
          <svg class="text-orange-600 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          </button>

            {/* ... SVG path for delete */}
         
        </div>
      </td>
               </tr>
              )  ))}
         
             </tbody>
           </table>
            </div>
       
        
       </div>
        
         </div>
            )}
            {isEditSolutionsPopupOpen && (
  <EditPopupSolutionsData
    solutions={editSolutions}
    isOpen={isEditSolutionsPopupOpen}
    onClose={() => setIsEditSolutionsPopupOpen(false)}
    onSubmit={handleSolutionsEditSubmit}
  />
)}
{/* contactus DATA */} 
{selectedTab === 'contactus' && (
           <div>
           <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className='font-bold text-xl md:mb-10'> contactus </div>
         <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
 
         <button onClick={openAddcontactusPopup} className='bg-white rounded-md px-5 py-2 text-white font-bold mb-3'>Add contactus</button>

{/* Add Order Popup */}
{showAddcontactusPopup && (
  <AddcontactusForm onSubmit={handleAddcontactusSubmit} onCancel={closeAddcontactusPopup} />
)}
           <table className="min-w-full leading-normal">
             <thead>
               <tr>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Question
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Answer
                 </th>
                
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
               </tr>
             </thead>
             <tbody>
             {data.map(userData => (
              userData.isDeleted !== 'true' && (
               <tr key={userData.id}>
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <div className="flex items-center">
                     <div className="ml-3">
                       <p className="text-gray-900 whitespace-no-wrap">
                        {userData.question}
                       </p>
                     </div>
                   </div>
                 </td>
                
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">{userData.answer}</p>
                 </td>
                
                
                
                 <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex space-x-2">
        
       <button onClick={() => handlecontactusEditClick(userData.id)}>
          <svg class="text-teal-600 w-5 h-5 "
        xmlns="http://www.w3.org/2000/svg" width="24"  height="24"   viewBox="0 0 24 24"  stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
            {/* ... SVG path for edit */}
            </button>

            <button onClick={() => handleSoftDeletecontactus(userData.id)} >
          <svg class="text-orange-600 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          </button>

            {/* ... SVG path for delete */}
         
        </div>
      </td>
               </tr>
              )  ))}
         
             </tbody>
           </table>
            </div>
         
       </div>
        
         </div>
            )}
            {isEditcontactusPopupOpen && (
  <EditPopupcontactusData
  contactus={editcontactus}
    isOpen={isEditcontactusPopupOpen}
    onClose={() => setIsEditcontactusPopupOpen(false)}
    onSubmit={handlecontactusEditSubmit}
  />
)}

      {selectedTab === 'signout' && (
        <div>
          Render sign-out logic
        </div>
      )}
    </div>
  </div>

          </div>
        </div>
        <div className="text-blue-gray-600">
         
        </div>
      </div>
    </div>

  </>
  
  )
}

export default Dashboard




// http://localhost:3004/dashboard#