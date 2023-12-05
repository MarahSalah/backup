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
import BirthdayGift from '../src/Birthday/Birthday_gift/BirthdayGift';
import WeddingGift from './Wedding/WeddingGift';
import ChrestmasGift from './Christmas/ChrestmasGift';
import WinterGift from './winter/WinterGift';
import GiftPackge from './Gift/GiftPackge';

import BirthdayPackge from '../src/Birthday/birthday_package/BirthdayPackge';
import WeddingPackge from './Wedding/WeddingPackge';
import ChrestmasPackge from './Christmas/ChrestmasPackge';
import WinterPackge from './winter/WinterPackge';
import Giftcake from './Gift/Giftcake';
import Birthdaycake from '../src/Birthday/birthday_package/Birthdaycake';
import Weddingcake from './Wedding/Weddingcake';
import Chrestmascake from './Christmas/Chrestmascake';

import Wintercake from './winter/Wintercake';
import ProductDetails from '../src/Birthday/Birthday_gift/ProductDetails';
import BirthdayPackageDetails from './Birthday/birthday_package/ProductpackgeDetails';
import AdminDashboard from './Admin/AdminDashboard';
import Checkout from './pages/Checkout';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Home />} />
        <Route path='/gifts' element={<GiftCategory />} />
        <Route path='/birthdaygifts' element={<BirthdayGift />} />
        <Route path='/weddinggifts' element={<WeddingGift />} />
        <Route path='/wintergifts' element={<WinterGift />} />
        <Route path='/christmasgifts' element={<ChrestmasGift />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin' element={<AdminDashboard />} />

        <Route path='/checkout' element={<Checkout />} />
        <Route path='/giftsPackge' element={<GiftPackge />} />
        <Route path='/birthdayPackge' element={<BirthdayPackge />} />
        <Route path='/weddingPackge' element={<WeddingPackge />} />
        <Route path='/winterPackge' element={<WinterPackge />} />
        <Route path='/christmasPackge' element={<ChrestmasPackge />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/giftscake' element={<Giftcake />} />
        <Route path='/birthdaycake' element={<Birthdaycake />} />
        <Route path='/weddingcake' element={<Weddingcake />} />
        <Route path='/wintercake' element={<Wintercake />} />
        <Route path='/christmascake' element={<Chrestmascake />} />
        <Route path="/birthdaypackage/:id" element={<BirthdayPackageDetails />} /> 
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<Contactus/>}/>

        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
