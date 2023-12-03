import React, { useEffect, useState } from 'react'

const EditPopupcontactusData = ({ contactuscontactus, isOpen, onClose, onSubmit }) => {
    const [editedcontactus, setEditedcontactus] = useState(contactus);

  useEffect(() => {
    setEditedcontactus(contactus);
  }, [contactus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedcontactus((prevcontactus) => ({ ...prevcontactus, [name]: value }));
  };

 
  
  return (
    isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-white w-96 p-6 rounded-lg z-10 my-6">
            <h2 className="text-2xl font-semibold mb-4">Edit contactus</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(editedcontactus); }}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Question</label>
                <input
                  type="text"
                  name="question"
                  value={editedcontactus.question}
                  onChange={handleChange}
                  
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Answer</label>
                <input
                  type="text"
                  name="answer"
                  value={editedcontactus.answer}
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
  

  

export default EditPopupcontactusData