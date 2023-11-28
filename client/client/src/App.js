import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Footer from './components/Footer';

import GiftCategory from './Gift/GiftCategory';
import BirthdayGift from './Birthday/Birthday_gift/BirthdayGift';
import WeddingGift from './Wedding/WeddingGift';
import ChrestmasGift from './Christmas/ChrestmasGift';
import WinterGift from './winter/WinterGift';
import GiftPackge from './Gift/GiftPackge';
import BirthdayPackge from './Birthday/birthday_package/BirthdayPackge';
import WeddingPackge from './Wedding/WeddingPackge';
import ChrestmasPackge from './Christmas/ChrestmasPackge';
import WinterPackge from './winter/WinterPackge';
import Giftcake from './Gift/Giftcake';

import Birthdaycake from './Birthday/birthday_package/Birthdaycake';
import Weddingcake from './Wedding/Weddingcake';
import Chrestmascake from './Christmas/Chrestmascake';
import Wintercake from './winter/Wintercake';
import ProductDetails from './Birthday/Birthday_gift/ProductDetails';
import BirthdayPackageDetails from './Birthday/birthday_package/BirthdayPackageDetails';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Home />} />
        <Route path='/gifts' element={<GiftCategory />} />
        <Route path='/birthday-gifts' element={<BirthdayGift />} />
        <Route path='/wedding-gifts' element={<WeddingGift />} />
        <Route path='/winter-gifts' element={<WinterGift />} />
        <Route path='/christmas-gifts' element={<ChrestmasGift />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin' element={<AdminDashboard />} />

        <Route path='/giftsPackge' element={<GiftPackge />} />
        <Route path='/birthday-Packge' element={<BirthdayPackge />} />
        <Route path='/wedding-Packge' element={<WeddingPackge />} />
        <Route path='/winter-Packge' element={<WinterPackge />} />
        <Route path='/christmas-Packge' element={<ChrestmasPackge />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/giftscake' element={<Giftcake />} />
        <Route path='/birthday-cake' element={<Birthdaycake />} />
        <Route path='/wedding-cake' element={<Weddingcake />} />
        <Route path='/winter-cake' element={<Wintercake />} />
        <Route path='/christmas-cake' element={<Chrestmascake />} />
        <Route path="/birthday-package/:id" element={<BirthdayPackageDetails />} /> 
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
