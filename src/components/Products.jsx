import '../App.css';
import rectangle1 from '../assets/rectangle1.svg';
import rectangle2 from '../assets/rectangle2.svg';
import plant1 from '../assets/plant1.svg';
import plant2 from '../assets/plant2.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import product1 from '../assets/product1.svg';
import product2 from '../assets/product2.svg';
import product3 from '../assets/product3.svg';



const Products = () => {

  return (

    <div className="container  mt-[200px] ">

        <p className="text-[35px] text-[black] font-Inter font-medium flex justify-center items-center ">
            Our Products
        </p>

        <ul className="flex justify-center items-center space-x-[100px]  mt-[100px]  mb-[40px]" >

            <li className="relative">
                <div className="flex">
                <img src={rectangle1} alt="rectangle1" className="w-120 h-auto"/>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2">
                    <p className="text-[35px] font-RedHatText font-regular">Outdoor Plants</p>
                </div>
                </div>
                <img src={plant1} alt="plant1" className="absolute left-[-80px] top-[-48px] object-contain w-[320px] " />
                 
            </li>

            <li className="relative">
            
            <div className="flex">
                <img src={rectangle2} alt="rectangle2" className="w-120 h-auto"/>
                <div className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2">
                    <p className="text-[35px] font-RedHatText font-regular ">Indoor Plants</p>
                </div>
            </div>
            <img src={plant2} alt="plant2" className= "absolute right-[-80px] top-[-70px] object-contain w-[350px] " /> 
               
            </li>

        </ul>

        <ul  className="mt-[100px] flex justify-center items-center space-x-[0px]">
            <li><img src={left} alt="left" className="ml-[100px] mr-[50px] cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300"/>
</li>
            
           
            <li className="m-0">
                <img src={product1} alt="product1" className="w-[900px] cursor-pointer" />
            </li>

            <li>
                <img src={product2} alt="product2 " className="w-[900px] cursor-pointer"/>
            </li>

            <li>
                <img src={product3} alt="product3" className="w-[900px] cursor-pointer"/>
            </li>
        
           <li> <img src={right} alt="right" className="mr-[150px] cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300"  /></li>
           
        </ul>
     
    </div>
  );
};

export default Products;



