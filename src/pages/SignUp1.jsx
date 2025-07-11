import React, { useState } from "react";
import img from "../assets/img.svg";
import { useNavigate } from "react-router-dom";

const Signup = ({setStep, setFormData, formData}) => {
  const navigate = useNavigate(); //Pour naviguer entre les pages

//   const [formData, setFormData] = useState({
//     name: "",
//     ownerName: "",
//     phone: "",
//     address: "",
//   });

  // Si l'utilisateur ne remplie pas tout les champs, il ne peut pas naviguervers la 2eme page
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Enlever l'erreur si l'utilisateur remplie tous les champs
  };

  // Soumission de forme
  const handleSubmit = (e) => {
    // // Vérification si l'un des champs est vide
    // if (
    //   !formData.businessName.trim() ||
    //   !formData.directorName.trim() ||
    //   !formData.contactNumber.trim() ||
    //   !formData.location.trim()
    // ) {
    //   setError("Please fill in all fields.");
    //   return;
    // }

    // // Si tout est bien, on navigue vers la page suivante
    // navigate("/signup2");
  };

  return (
    <div className="w-screen h-screen  relative bg-[#e1ece3] flex flex-row-reverse items-center justify-center">
      {/* Image */}
      <div className="w-1/2 h-full hidden lg:block">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Signup Illustration"
        />
      </div>

      {/* Conteneur principal */}
      <div className=" w-full lg:w-1/2 h-full flex flex-col items-center justify-center px-[8vw]">
        {/* Texte "Already have an account?" */}
                {/* Titre "SIGN UP" */}
                <h1 className=" text-black text-4xl font-inter font-semibold">
          SIGN UP
        </h1>
        <p className=" text-black mb-14 text-sm font-inter font-redhat">
          Already have an account?{" "}
          <a className="text-[#000000] underline" href="/login">
            Login
          </a>
        </p>



        {/* Formulaire adaptatif */}
        <form className="  ml-10 w-full flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Business name"
            value={formData.name}
            onChange={handleChange}
            className="w-100 h-10 px-4 py-6 bg-white rounded-[15px]  text-black text-[14px] outline-none focus:outline-none"
          />
          <input
            type="text"
            placeholder="Director's name"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-100 h-10 px-4  py-6 bg-white rounded-[15px]  text-black text-[14px] outline-none focus:outline-none"
          />
          <input
            type="number"
            placeholder="Contact number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-100 h-10 px-4 py-6 bg-white rounded-[15px] text-black text-[14px] outline-none focus:outline-none"
          />
          <input
            type="text"
            placeholder="Location"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-100 h-10 px-4 py-6 bg-white rounded-[15px] text-black text-[14px] outline-none focus:outline-none"
          />

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Next Button */}
          <button
            onClick={()=>setStep(2)}
            className=" py-4 px-16 mr-9 text-white text-lg rounded-full bg-[#43862E] hover:bg-[#384628] transition duration-300 mt-8 cursor-pointer self-center"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
