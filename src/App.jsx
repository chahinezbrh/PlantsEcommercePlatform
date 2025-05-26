import React from 'react';
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PersonalInformation  from './pages/PersonalInformation';
import MyProducts from './pages/MyProducts';
import Waiting from './pages/Waiting';
import Signup from './pages/SignUp';
import AddProduct from './pages/AddProduct';
import Shop from './pages/Shop'
import ChangePassword from './pages/ChangePassword'
import ChangeEmail from './pages/ChangeEmail.jsx'
import ChangeNumber from './pages/ChangeNumber.jsx';
import Cart from './pages/Cart';
import Myorders from './pages/Myorders';
import OrderDetails from './pages/OrderDetails.jsx';
import EditProduct from './pages/EditProduct.jsx'
import Events from './pages/Events.jsx';
import Eventsform from './pages/Eventsform.jsx'





const App = () => {
    return(
   
    <div className='flex justify-center items-center flex-col gap-5'>
        
        <BrowserRouter>
        <Routes>
        
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/personal-information' element={<PersonalInformation />}/>
            <Route path='/myproducts' element={<MyProducts/>}/>
            <Route path='/waiting' element={<Waiting/>}/>
            <Route path='/product-details' element={<ProductDetails/>}/>
            <Route path='/add-product' element={<AddProduct/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/change-password' element={<ChangePassword/>}/>
            <Route path='/edit-product' element={<EditProduct/>}/>
            <Route path='/change-email' element={<ChangeEmail/>}/>
            <Route path='/change-number' element={<ChangeNumber/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-orders' element={<Myorders/>}/>
            <Route path='/order-details' element={<OrderDetails/>}/>
            <Route path='/edit-product' element={<EditProduct/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/events-form' element={<Eventsform/>}/>

           
            

            
        </Routes>
        </BrowserRouter>
        {/* <Footer/> */}
    </div>
);
};

export default App;



