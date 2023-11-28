// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  // State for users and products
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  // Effect to fetch users and products on component mount
  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  const fetchUsers = () => {
    fetch('http://localhost:8080/allusers')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  const fetchProducts = () => {
    fetch('http://localhost:8080/getproducts')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  const deleteUser = (userId) => {
    fetch(`http://localhost:8080/deleteuser/${userId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('User deleted successfully:', data);
        // Update the state after deletion
        setUsers(users.filter(user => user.user_id !== userId));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  const addUser = (newUser) => {
    fetch('http://localhost:8080/adduser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        console.log('User added successfully:', data);
        // Update the state after addition
        setUsers([...users, data]);
      })
      .catch(error => console.error('Error adding user:', error));
  };

  const updateUser = (userId, updatedUser) => {
    fetch(`http://localhost:8080/updateuser/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then(response => response.json())
      .then(data => {
        console.log('User updated successfully:', data);
        // Update the state after modification
        setUsers(users.map(user => (user.user_id === userId ? data : user)));
      })
      .catch(error => console.error('Error updating user:', error));
  };

  // ... (الدوال المتعلقة بالمنتجات تُضاف هنا)

  return (
    <div>
      <h1>User Management</h1>
      {/* Display All Users */}
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            {/* Add more user fields as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.f_name}</td>
              <td>{user.l_name}</td>
              <td>{user.user_email}</td>
              {/* Display more user fields as needed */}
              <td>
                <button onClick={() => deleteUser(user.user_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add User Form */}
      <h2>Add User</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Extract form values and call addUser function
          const newUser = {
            // Add form input values here
          };
          addUser(newUser);
        }}
      >
        {/* Add form input fields for user creation */}
        <button type="submit">Add User</button>
      </form>
      {/* Update User Form */}
      <h2>Update User</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Extract form values and call updateUser function
          const updatedUser = {
            // Add form input values here
          };
          const userId = 
          updateUser(userId, updatedUser);
        }}
      >
        {/* Add form input fields for user update */}
        <button type="submit">Update User</button>
      </form>

    </div>
  );
};

export default AdminDashboard;
