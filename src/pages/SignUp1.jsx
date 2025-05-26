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
    <div className="w-full h-screen relative bg-[#e1ece3] flex items-center justify-center px-4 lg:px-16">
      {/* Image */}
      <div className="absolute top-0 right-0 w-[50vw] h-full">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Signup Illustration"
        />
      </div>

      {/* Conteneur principal */}
      <div className="relative w-full h-full flex flex-col items-start justify-start px-[8vw]">
        {/* Texte "Already have an account?" */}
        <p className="absolute left-[5vw] top-[5vh] text-black text-lg font-inter font-redhat">
          Already have an account?{" "}
          <a className="text-[#000000] underline" href="/login">
            Login
          </a>
        </p>

        {/* Titre "SIGN UP" */}
        <h1 className="absolute left-[18vw] top-[14vh] text-black text-[4vw] font-inter font-semibold">
          SIGN UP
        </h1>

        {/* Formulaire adaptatif */}
        <form className="absolute left-[8vw] top-[30vh] w-[35vw] flex flex-col gap-[4vh]">
          <input
            type="text"
            name="name"
            placeholder="Business name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-[9vh] bg-white rounded-[15px] px-4 text-black text-[14px]"
          />
          <input
            type="text"
            placeholder="Director's name"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full h-[9vh] bg-white rounded-[15px] px-4 text-black text-[14px]"
          />
          <input
            type="number"
            placeholder="Contact number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-[9vh] bg-white rounded-[15px] px-4 text-black text-[14px]"
          />
          <input
            type="text"
            placeholder="Location"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full h-[9vh] bg-white rounded-[15px] px-4 text-black text-[14px]"
          />

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Next Button */}
          <button
            onClick={()=>setStep(2)}
            className="w-[12vw] h-[6vh] text-white rounded-full bg-[#43862E] hover:bg-[#384628] transition duration-300 mt-8 cursor-pointer self-center"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
