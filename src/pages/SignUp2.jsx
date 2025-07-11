import React, { useState } from "react";
import img from "../assets/img.svg";
import pfp from "../assets/pfp.svg";
import arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

const Signup2 = ({setStep, setFormData, formData, handleSubmit}) => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };



  return (
    <div className="w-screen h-screen relative bg-[#e1ece3] flex flex-row-reverse">
      {/* Image de fond */}
      <div className="w-1/2 h-full hidden lg:block">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Signup Illustration"
        />
      </div>
      <div className="flex gap-2 w-full lg:w-1/2 relative">

      {/* Flèche de retour */}
      <img
        src={arrow}
        alt="Back Arrow"
        className=" absolute top-5 left-5 w-[30px] h-[30px] cursor-pointer z-10"
        onClick={() => setStep(1)}
      />

      {/* Conteneur principal */}
      <div className="relative w-full h-full  flex flex-col justify-center px-[8vw]">
        {/* Texte "Already have an account?" */}
                {/* Titre "SIGN UP" */}
                <h1 className=" text-black self-center text-4xl pt-6 font-inter font-semibold pb-5">
          SIGN UP
        </h1>
        <p className=" text-black mb-7 self-center text-sm font-redhat">
          Already have an account?{" "}
          <a className="text-[#000000] underline" href="/login">
            Login
          </a>
        </p>

        {/* Formulaire */}
        <form
          className="flex flex-col gap-6 pt-10"
          onSubmit={handleSubmit}
        >

        {/* Icône de profil */}
        {/* <img
          src={pfp}
          alt="Signup Icon"
          className=" w-[120px] self-center h-[120px] md:w-72 md:h-72 py-6 cursor-pointer"
          onClick={() => setShowOptions(true)}
        /> */}


          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-100 ml-5 h-10 px-4 py-6 bg-white rounded-[15px] text-black text-base"
          />
          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-100 h-10   ml-5 px-4 py-6 bg-white rounded-[15px] text-black text-base"
              value={formData.password}
              name="password"
            />
            {errorMessage && (
              <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
            )}
          </div>

          {/* Bouton d'inscription */}
          <button
            type="submit"
            className="py-4 px-10  mt-10 self-center bg-[#43862e] text-white rounded-full text-lg font-semibold hover:bg-[#384628] transition duration-300 mx-auto cursor-pointer"
           onClick={() => { alert('Wait a Few seconds!'); }}
          >
            Sign Up
          </button>
        </form>
      </div>

      </div>

      {/* Pop-up pour sélectionner une image */}
      {showOptions && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white max-w-[400px] w-full p-6 rounded-lg shadow-xl flex flex-col items-center">
            <p className="text-lg mb-4">Choose an option</p>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              className="hidden"
              onChange={handleImageUpload}
            />
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="w-full bg-[#43862E] text-white py-2 rounded-md mb-2 transition cursor-pointer hover:bg-[#365c23]"
            >
              Import from Gallery
            </button>
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="w-full bg-[#43862E] text-white py-2 rounded-md mb-2 transition cursor-pointer hover:bg-[#365c23]"
            >
              Take a Photo
            </button>
            <button
              onClick={() => setShowOptions(false)}
              className="mt-4 text-black hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup2;
