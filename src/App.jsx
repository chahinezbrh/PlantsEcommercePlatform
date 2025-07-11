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
import ConfirmOrder from './pages/ConfirmOrder.jsx'
import AddNursery from './pages/AddNursery';
import AddEvent from './pages/AddEvent';
import EventsDashboard from './pages/EventsDashboard.jsx';
import Nurserydashboard from './pages/Nurserydashboard.jsx';
import ManageNursery from './pages/ManageNursery.jsx';
import Statistics from './pages/Statistics.jsx';







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
            <Route path='/waiting/:token' element={<Waiting/>}/>
            <Route path='/product-details/:id' element={<ProductDetails/>}/>
            <Route path='/add-product' element={<AddProduct/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/change-password' element={<ChangePassword/>}/>
            <Route path='/edit-product' element={<EditProduct/>}/>
            <Route path='/change-email/:token' element={<ChangeEmail/>}/>
            <Route path='/change-number' element={<ChangeNumber/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-orders' element={<Myorders/>}/>
            <Route path='/order-details' element={<OrderDetails/>}/>
            <Route path='/edit-product' element={<EditProduct/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/events-form' element={<Eventsform/>}/>
            <Route path='/confirm-order' element={<ConfirmOrder/>}/>
            <Route path='/AddNursery' element={<AddNursery/>}/>
            <Route path='/Nurserydashboard' element={<Nurserydashboard/>}/>
            <Route path='/ManageNursery' element={<ManageNursery/>}/>
            <Route path='/Statistics' element={<Statistics/>}/>
            <Route path='/AddEvent' element={<AddEvent/>}/>
            <Route path='/EventsDashboard' element={<EventsDashboard/>}/>
                
                
                

           
            

            
        </Routes>
        </BrowserRouter>
        {/* <Footer/> */}
    </div>
);
};

export default App;



