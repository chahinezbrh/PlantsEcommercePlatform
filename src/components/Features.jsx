import React from 'react';
import { motion } from "framer-motion";
import Highquality from "../assets/Highquality.svg";
import Fastdelivery from "../assets/Fastdelivery.svg";
import Support from "../assets/Support.svg";
import '../App.css';

const Features = () => {
  return (
    <motion.div
      className="container flex justify-center items-center mt-[200px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: false, amount: 0.2 }} // Repeats on scroll
    >
      <ul className="flex justify-center space-x-[250px]">
        {[
          { img: Highquality, text: "High quality", delay: 0 },
          { img: Fastdelivery, text: "Fast delivery", delay: 0.2 },
          { img: Support, text: "Support 24/7", delay: 0.4 }
        ].map((feature, index) => (
          <motion.li
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, delay: feature.delay }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src={feature.img} alt={feature.text} className="w-[110px]" />
            <p className="text-[18px] font-Inter font-semibold text-black mt-[20px]">
              {feature.text}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Features;


// import React from 'react'

// import Highquality from "../assets/Highquality.svg";
// import Fastdelivery from "../assets/Fastdelivery.svg";
// import Support from "../assets/Support.svg";
// import '../App.css';


// const Features = () => {
//   return (
//     <div className="container flex justify-center items-center mt-[200px]">
//       <ul className="flex justify-center space-x-[250px]">
//         <li>
//           <img src={Highquality} alt="High Quality" className="w-[110px]"/>
//           <p className="text-[18px] font-Inter font-semibold text-semibold text-black ml-[7px] mt-[20px]"> High quality</p>
          
//         </li>
//         <li>
//           <img src={Fastdelivery} alt="Fast Delivery" className="w-[110px]" />
//           <p className="text-[18px] font-Inter font-semibold text-black ml-[3px] mt-[20px]"> Fast delivery</p>
//         </li>
//         <li>
//           <img src={Support} alt="Support"  className="w-[110px]"/>
//           <p className="text-[18px] font-Inter font-semibold text-black ml-[5px] mt-[20px]"> Support24/7</p>
//         </li>
//       </ul>

      
//     </div>
//   );
// };

// export default Features;


// // import React from 'react'
// // import { motion } from "framer-motion";
// // import Highquality from "../assets/Highquality.svg";
// // import Fastdelivery from "../assets/Fastdelivery.svg";
// // import Support from "../assets/Support.svg";
// // import  '../App.css';


// // const Features = () => {
// //   return (
// //     <motion.div
// //       className="container flex justify-center items-center mt-[200px]"
// //       initial={{ opacity: 0, y: 50 }}  // Start hidden & lower
// //       whileInView={{ opacity: 1, y: 0 }} // Fade in & move up when visible
// //       transition={{ duration: 0.9 }} // Smooth animation
// //       viewport={{ once: true }} // Only animate once per scroll
// //     >
// //       <ul className="flex justify-center space-x-[250px]">
// //         <li>
// //           <img src={Highquality} alt="High Quality" className="w-[120px]"/>
// //           <p className="text-[20px] font-[Inter2] text-regular text-black ml-[7px] mt-[15px]"> High quality</p>
          
// //         </li>
// //         <li>
// //           <img src={Fastdelivery} alt="Fast Delivery" className="w-[120px]" />
// //           <p className="text-[20px] font-[Inter] text-black ml-[11px] mt-[15px]"> Fast delivery</p>
// //         </li>
// //         <li>
// //           <img src={Support} alt="Support"  className="w-[120px]"/>
// //           <p className="text-[20px] font-[Inter] text-black ml-[15px] mt-[15px]"> Support24/7</p>
// //         </li>
// //       </ul>

      
// //     </motion.div>
// //   );
// // };

// // export default Features;
