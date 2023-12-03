import React, { useEffect, useState } from 'react'

const EditPopupDriverData = ({ driver, isOpen, onClose, onSubmit }) => {
    const [editedDriver, setEditedDriver] = useState(driver);

  useEffect(() => {
    setEditedDriver(driver);
  }, [driver]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDriver((prevDriver) => ({ ...prevDriver, [name]: value }));
  };

 
  
  return (
    isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-white w-96 p-6 rounded-lg z-10 my-6">
            <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(editedDriver); }}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Driver Name</label>
                <input
                  type="text"
                  name="driver_username"
                  value={editedDriver.driver_username}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Driver Email</label>
                <input
                  type="text"
                  name="driver_email"
                  value={editedDriver.driver_email}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
          
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Driver License</label>
                <input
                  type="text"
                  name="driver_license"
                  value={editedDriver.driver_license}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
             
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Driver Plate Number</label>
                <input
                  type="text"
                  name="plate_number"
                  value={editedDriver.plate_number}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
     
            
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-teal-400 focus:outline-none focus:shadow-outline-blue"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    );
  };
  

  

export default EditPopupDriverData