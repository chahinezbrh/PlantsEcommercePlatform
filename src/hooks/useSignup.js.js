


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (name, ownerName, email, phone, address, password, description) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3005/user/signup", {
        name,
        ownerName,
        email,
        phone,
        address,
        password,
        description,
      });

      if (response.data.message !== "Pépinière registered successfully!") {
        toast.error("Error occurred during registration.");
        return;
      }

      const userData = response.data;
      console.log("Signup Successful!", userData);

      // Save user data to local storage
      localStorage.setItem("userData", JSON.stringify(userData));
      toast.success("First step done successfully! Now let's continue.");

      navigate("/signup-2");                                                                                                                                                                                                                qqqqqqqqqqqqqqqqqqqqqqq
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        setError(error.response.data?.error || "An unknown error occurred");
        toast.error(error.response.data?.error || "Signup failed. Please try again.");
      } else {
        setError("An unknown error occurred");
        toast.error("Signup failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};



// import { useState } from "react";

// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// export const useSignup = () => {
//   const [error, setError] = useState(null);
//   const [isloading, setIsloading] = useState(null);
//   const login = useAuth((state) => state.login);
//   const navigate = useNavigate();
//   // the request function
//   const signup = async ( name, ownerName, email, phone, address, password, description) => {
//     setIsloading(true), setError(null);
//     try {
//       const response = await axios.post("http://localhost:3005/user/signup", {
//         name, ownerName, email, phone, address, password, description 
//       });
//       if(response.message !== "Pépinière registered successfully!"){
//         toast.error(`error when you are registered `)
//       }

//       const userData = response.data;
//       //Destructure response
//       console.log("Signup Successful!", userData);
//       // save user and the token inside the local storage
//       localStorage.setItem("userDta", JSON.stringify(userData));
//       toast.success("First step done successfully!Now let's continue");
//       navigate("/signup-2");
//     } catch (error) {
//       // handel errors
//       if (error.response) {
//         console.log("Error Response:", error.response);
//         setError(error.response.data?.error || "An unknown error occurred");
//         toast.error(
//           error.response?.data?.error || "Signup failed. Please try again."
//         );
//       } else {
//         console.log(`Error: ${error.message || "An unknown error occurred2"}`);
//         setError(`Error: ${error.message || "An unknown error occurred2"}`);
//         toast.error(error.message || "Signup failed. Please try again.");
//       }
//     } finally {
//       setIsloading(false);
//     }
//   };
//   return { signup, isloading, error };
// };
// // setError(
// //   error.response?.data?.message || "sign failded ,Please try again"
// // );