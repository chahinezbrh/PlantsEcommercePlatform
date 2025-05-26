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
    <div className="w-full h-screen relative bg-[#e1ece3] flex items-center justify-center px-4 lg:px-16">
      {/* Image de fond */}
      <div className="absolute top-0 right-0 w-[50vw] h-full">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Signup Illustration"
        />
      </div>

      {/* Flèche de retour */}
      <img
        src={arrow}
        alt="Back Arrow"
        className="absolute left-[11vw] top-[17vh] w-[52px] h-[52px] cursor-pointer z-10"
        onClick={() => setStep(1)}
      />

      {/* Conteneur principal */}
      <div className="relative w-full h-full flex flex-col items-start justify-start px-[8vw]">
        {/* Texte "Already have an account?" */}
        <p className="absolute left-[5vw] top-[5vh] text-black text-lg font-redhat">
          Already have an account?{" "}
          <a className="text-[#000000] underline" href="/login">
            Login
          </a>
        </p>

        {/* Titre "SIGN UP" */}
        <h1 className="absolute left-[18vw] top-[14vh] text-black text-[4vw] font-inter font-semibold">
          SIGN UP
        </h1>

        {/* Icône de profil */}
        <img
          src={pfp}
          alt="Signup Icon"
          className="absolute left-[25%] translate-x-[-50%] top-[27vh] w-[120px] h-[120px] md:w-[158px] md:h-[158px] cursor-pointer"
          onClick={() => setShowOptions(true)}
        />

        {/* Formulaire */}
        <form
          className="absolute left-[8vw] top-[65vh] w-[35vw] flex flex-col gap-[4vh]"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full h-[6vh] bg-white rounded-[15px] px-4 text-black text-base"
          />
          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full h-[6vh] bg-white rounded-[15px] px-4 text-black text-base"
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
            className="w-[12vw] h-[6vh] bg-[#43862e] text-white rounded-full text-lg font-semibold hover:bg-[#384628] transition duration-300 mx-auto cursor-pointer"
          >
            Sign Up
          </button>
        </form>
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

