
import './App.css';

import AdminRegistration from './Component/Admin/Users/Registration';
import AdminLogin from './Component/Admin/Users/Login';


import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';



import Dashboard from './Component/Admin/website/Dashboard';
import OrderDetailsPage from './Component/Admin/website/OrderDetailsPage';


function App() {
  return (
    <Router>
    <div className="App">
       {/* Admin routs  */}

       <Routes>
        
       <Route path='/' element={<AdminRegistration/>}/>
      <Route path='/adminLogin' element={<AdminLogin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/OrderDetails' element={<OrderDetailsPage/>}/>
      <Route path='/OrderDetails/:orderId' element={<OrderDetailsPage/>}/>
      </Routes>

      </div>
      </Router>
  );
}

export default App;
