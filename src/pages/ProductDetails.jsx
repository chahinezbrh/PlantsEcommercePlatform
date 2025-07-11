import React , {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import circle from '../assets/circle.svg';
import LeftArrow from '../assets/LeftArrow.svg';
import RightArrow from '../assets/RightArrow.svg';
import right from '../assets/right.svg';
import left from '../assets/left.svg';
import PeaceLily2 from '../assets/PeaceLily2.svg';
import increment from '../assets/increment.svg'
import buy from '../assets/buy.svg'
import bigrectangle from '../assets/bigrectangle.svg'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AddtoCart from '../Api/Cart';
import { useNavigate } from 'react-router-dom';

export const ProductDetails = () => {

   const [count, setCount] = useState(1);
   const { state } = useLocation();
   const [currentIndex, setCurrentIndex] = useState(0);
   const [Plants, setPlants] = useState([]);
   const [Plant, setPlant] = useState({})
   const {id} = useParams()
   const navigate = useNavigate();
   
     
    useEffect(() => {
    const fetchCart = async () => {
      try {

        const response = await axios.get('http://localhost:9900/api/products/AllProduct')
        const response2 = await axios.get(`http://localhost:9900/api/products/get-product/${id}`)
        console.log("Response status:", response2.status);
        console.log("Response data:", response2.data);
        setPlants(response.data);
        setPlant(response2.data)
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCart();
  }, []);



    useEffect(() => {
  if (Plants.length && id) {
    const foundIndex = Plants.findIndex((p) => p._id === id);
    if (foundIndex !== -1) {
      setCurrentIndex(foundIndex);
    }
  }
}, [Plants, id]);
console.log(Plants)

  const currentPlant = Plants[currentIndex];
console.log(currentPlant)
  if (!currentPlant) {
    return <p>No plant found</p>;
  }

  const { name, image, price, description } = currentPlant;

   const handleNext = () => {
    console.log('he')
    setCurrentIndex((prev) => (prev + 1) % Plants.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + Plants.length) % Plants.length);
  };

  const handleIncrement = (id) => {

    try {
      
      console.log(id)
       const response = axios.post(`http://localhost:9900/api/cart/increment/${id}` ,{}, { withCredentials: true })
       console.log(response)
          
    } catch (error) {
      console.log(error)
    }

  };

  return (
  
    
  <>
    <Navbar/>
    <div className="flex w-full  h-screen pl-20">

      <img src={left} alt="" className='w-7 pt-4 cursor-pointer' onClick={handlePrev}/>
      <div className="relative flex ">
      <img src={circle} alt="" className='w-120 px-10' />
      <img src={`http://localhost:9900/uploads/${currentPlant.image}`} alt="" className=" w-120 absolute top-55/100 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <img src={right} alt="" className='w-7 cursor-pointer' onClick={handleNext} />

      <div className="pl-30 pt-24 flex-col ">
        <p className="text-[45px] font-RedHatText font-semibold ">{currentPlant.name}</p>
        <p className="text-[22px] font-RedHatText w-100 pt-7 text-[rgba(0,0,0,0.67)] font-light ">{currentPlant.description}</p>
        <p className="text-[14px] text-[#B51D1D] pt-7 font-light ">Amount available</p>
        <p className='text-[38px] font-semibold py-7'>{currentPlant.price}DA</p>

      <div className="flex">

          <button  className=" h-15 w-56 bg-[#43862E]  text-white text-[20px] font-semibold font-RedHatText rounded-[30px] shadow-2xl  cursor-pointer transition duration-300 hover:opacity-70" onClick={()=> AddtoCart(currentPlant._id)}>Buy Now</button>
          <div className="ml-5 w-15 h-8 mt-4  pr-3 text-right text-[20px] bg-white text-gray-600">
            {count}
          </div>
          <img src={increment} onClick={()=> handleIncrement(currentPlant._id)}  alt="" className="pl-3 cursor-pointer" />
          <img src={buy} alt="" className="w-16 pl-4 cursor-pointer z-20" onClick={()=> navigate('/cart')}/>

      </div>

    </div>

    
  </div>




  <div className="pt-10 w-screen border-b-1 border-[#aaaa] shadow-md"></div>
  

  <div className=" pt-20 grid grid-cols-1 space-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-15">
    
      {Plants.map((plant) => (
        <div key={plant._id} className="flex flex-col items-center">
         
          <div
            className="flex flex-col items-center justify-center w-64 h-64 bg-[#43862E11] border-2 border-[#EAEAEA] rounded-[65px] shadow-md px-4 py-4 " style={{ overflow: 'visible' }}
          >
            <div className="flex justify-center">
              <img
                src={`http://localhost:9900/uploads/${plant.image}`}
                alt={plant.name}
                className="max-h-full object-contain w-80  cursor-pointer"
                onClick={() => navigate(`/product-details/${plant._id}`, { state: plant})}
              />
            </div>
  
           
            <div className="flex pb-20 space-x-9 items-center w-full ml-10">
              <button className="w-24 h-9  text-[#FAFAFA] font-RedHatText font-light bg-[#43862E] rounded-[13px] cursor-pointer transition duration-300 hover:opacity-70 shadow-md" onClick={()=> navigate('/events')}>
                Buy
              </button>
              <img src={buy} alt="cart" className="w-8 cursor-pointer" onClick={()=> navigate('/cart')}/>
            </div>
          </div>
  
          
          <div className="flex space-x-10 w-64 pt-2">
            <p className="text-[14px] pl-10 font-semibold font-RedHatText">{plant.name}</p>
            <p className="text-[14px] font-normal font-RedHatText">{plant.price}</p>
          </div>
      
        </div>
       ))}
  </div>


  

      

   

  </>
    
    
   
  )
}

export default ProductDetails;



 {/* <ul className="w-1/2 flex justify-center items-center space-x-10 overflow-visible">
        <li><img src={left} alt="" className="cursor-pointer" /></li>
        <li className="relative overflow-visible" >
          <div className="w-80 h-80 relative overflow-visible">
          <img src={circle} alt="" className="w-full h-full  object-cover " />
          <img src={PeaceLily2} alt="" className="w-120 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </li>
        <li><img src={right} alt="" className="cursor-pointer " /></li>
        
        </ul>

        <img src={PeaceLily2} alt="" className='w-120'/> */}