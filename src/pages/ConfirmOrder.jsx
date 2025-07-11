import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import panier from "../assets/panier.svg";
import arrow3 from "../assets/arrow3.svg";
import { useState } from "react";
import axios from 'axios'



 const ConfirmOrder = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name : '',
     familyName : '', 
     email : '',
     phone : '', 
     wilaya : '',
      city : '', 
    address : ''
  });

  const handleChange = (e) => {
      setformData({ ...formData, [e.target.name]: e.target.value })
    }

     const handleSubmit = async(e)  =>{
     e.preventDefault()
      try {
         console.log(formData)
        const res = await axios.post('http://localhost:9900/api/order/create', formData , {withCredentials: true})
        console.log(res)
        localStorage.setItem('Token', res.data.token)
        
      } catch (error) {
        console.log(error)
      }

    }
  
  return (
    <div className="min-h-screen w-full bg-[#e1ece3] flex flex-col items-center px-4 py-8">
      {/* Header */}
      <div className="w-full max-w-[731px] flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/cart")}
          className="p-1 rounded-full hover:bg-[#cdded2] transition-colors cursor-pointer"
        >
          <img
            src={arrow}
            alt="Go to cart"
            className="w-[30px] h-[30px] md:w-[45px] md:h-[45px]"
          />
        </button>
        <h1 className="text-black text-2xl md:text-4xl font-semibold font-inter">
          Confirm order
        </h1>
      </div>

      {/* White Box */}
      <div className="w-full max-w-[731px] bg-white shadow-md border-2 border-[#eaeaea]/70 backdrop-blur-[2px] rounded-lg flex flex-col items-center px-6 py-8 md:px-12 md:py-12">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 items-center">
          {/* Row 1: Name & Family Name */}
          <div className="w-full flex flex-col md:flex-row gap-4">
            <input
              className="h-[55px] w-full bg-[#e1ece3] rounded-[15px] px-4 "
              type="text"
              placeholder="Name"
              name = "name"
              value={formData.name}
              onChange ={handleChange}
            />
            <input
              className="h-[55px] w-full bg-[#e1ece3] rounded-[15px] px-4"
              type="text"
              placeholder="Family Name"
               name = "familyName"
              value={formData.familyName}
              onChange ={handleChange}
            
            />
          </div>

          {/* Row 2: Email */}
          <input
            className="h-[55px] w-full bg-[#e1ece3] rounded-[15px] px-4"
            type="email"
            placeholder="Enter Email"
             name = "email"
              value={formData.email}
              onChange ={handleChange}
            
          />

          {/* Row 3: Phone Number */}
          <input
            className="h-[55px] w-full bg-[#e1ece3] rounded-[15px] px-4"
            type="tel"
            placeholder="Enter Phone Number"
             name = "phone"
              value={formData.phone}
              onChange ={handleChange}
            
          />

          {/* Row 4: Wilaya & City */}
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <select
                className="appearance-none h-[55px] bg-[#e1ece3] rounded-[15px] px-4 pr-10 text-[#828282]"
                defaultValue="Wilaya"
                 name = "wilaya"
              value={formData.wilaya}
              onChange ={handleChange}
            
              >
                <option value="Wilaya">Wilaya</option>

                <option value="Adrar" className="text-black">
                  Adrar
                </option>
                <option value="Aïn Defla" className="text-black">
                  Aïn Defla
                </option>
                <option value="Aïn Témouchent" className="text-black">
                  Aïn Témouchent
                </option>
                <option value="Alger" className="text-black">
                  Alger
                </option>
                <option value="Annaba" className="text-black">
                  Annaba
                </option>
                <option value="Batna" className="text-black">
                  Batna
                </option>
                <option value="Béchar" className="text-black">
                  Béchar
                </option>
                <option value="Béni Ounif" className="text-black">
                  Béni Ounif
                </option>
                <option value="Beni Abbes" className="text-black">
                  Beni Abbes
                </option>
                <option value="Béjaïa" className="text-black">
                  Béjaïa
                </option>
                <option value="Biskra" className="text-black">
                  Biskra
                </option>
                <option value="Blida" className="text-black">
                  Blida
                </option>
                <option value="Bordj Badji Mokhtar" className="text-black">
                  Bordj Badji Mokhtar
                </option>
                <option value="Bordj Bou Arreridj" className="text-black">
                  Bordj Bou Arreridj
                </option>
                <option value="Bouira" className="text-black">
                  Bouira
                </option>
                <option value="Boumerdès" className="text-black">
                  Boumerdès
                </option>
                <option value="Chlef" className="text-black">
                  Chlef
                </option>
                <option value="Constantine" className="text-black">
                  Constantine
                </option>
                <option value="Djanet" className="text-black">
                  Djanet
                </option>
                <option value="Djelfa" className="text-black">
                  Djelfa
                </option>
                <option value="El Bayadh" className="text-black">
                  El Bayadh
                </option>
                <option value="El M'Ghair" className="text-black">
                  El M'Ghair
                </option>
                <option value="El Oued" className="text-black">
                  El Oued
                </option>
                <option value="El Tarf" className="text-black">
                  El Tarf
                </option>
                <option value="Ghardaïa" className="text-black">
                  Ghardaïa
                </option>
                <option value="Guelma" className="text-black">
                  Guelma
                </option>
                <option value="Illizi" className="text-black">
                  Illizi
                </option>
                <option value="In Guezzam" className="text-black">
                  In Guezzam
                </option>
                <option value="In Salah" className="text-black">
                  In Salah
                </option>
                <option value="Jijel" className="text-black">
                  Jijel
                </option>
                <option value="Khenchela" className="text-black">
                  Khenchela
                </option>
                <option value="Laghouat" className="text-black">
                  Laghouat
                </option>
                <option value="Mascara" className="text-black">
                  Mascara
                </option>
                <option value="Médéa" className="text-black">
                  Médéa
                </option>
                <option value="Mila" className="text-black">
                  Mila
                </option>
                <option value="Mostaganem" className="text-black">
                  Mostaganem
                </option>
                <option value="M'Sila" className="text-black">
                  M'Sila
                </option>
                <option value="Naâma" className="text-black">
                  Naâma
                </option>
                <option value="Oran" className="text-black">
                  Oran
                </option>
                <option value="Ouargla" className="text-black">
                  Ouargla
                </option>
                <option value="Ouled Djellal" className="text-black">
                  Ouled Djellal
                </option>
                <option value="Oum El Bouaghi" className="text-black">
                  Oum El Bouaghi
                </option>
                <option value="Relizane" className="text-black">
                  Relizane
                </option>
                <option value="Saïda" className="text-black">
                  Saïda
                </option>
                <option value="Sétif" className="text-black">
                  Sétif
                </option>
                <option value="Sidi Bel Abbès" className="text-black">
                  Sidi Bel Abbès
                </option>
                <option value="Skikda" className="text-black">
                  Skikda
                </option>
                <option value="Souk Ahras" className="text-black">
                  Souk Ahras
                </option>
                <option value="Tamanrasset" className="text-black">
                  Tamanrasset
                </option>
                <option value="Tébessa" className="text-black">
                  Tébessa
                </option>
                <option value="Tiaret" className="text-black">
                  Tiaret
                </option>
                <option value="Timimoun" className="text-black">
                  Timimoun
                </option>
                <option value="Tindouf" className="text-black">
                  Tindouf
                </option>
                <option value="Tipaza" className="text-black">
                  Tipaza
                </option>
                <option value="Tissemsilt" className="text-black">
                  Tissemsilt
                </option>
                <option value="Tizi Ouzou" className="text-black">
                  Tizi Ouzou
                </option>
                <option value="Tlemcen" className="text-black">
                  Tlemcen
                </option>
                <option value="Touggourt" className="text-black">
                  Touggourt
                </option>
              </select>
              <img
                src={arrow3}
                alt="arrow"
                className="pointer-events-none absolute right-100 mt-8 transform -translate-y-1/2 w-[16px] h-[16px]"
              />
            </div>
            {/* Row 5: Address */}

            <div className="flex flex-col w-full">
              <input
                className="h-[55px] bg-[#e1ece3] rounded-[15px] px-4"
                type="text"
                placeholder="City"
                 name = "city"
                 value={formData.city}
                 onChange ={handleChange}
            
              />
            </div>
          </div>
          <input
            className="h-[55px] w-full bg-[#e1ece3] rounded-[15px] px-4"
            type="text"
            placeholder="Enter Your Address"
             name = "address"
              value={formData.address}
              onChange ={handleChange}
            
          />
          {/* Summary */}
          <div className="w-full flex justify-center gap-32 items-center mt-9">
            <div className="flex items-center gap-2 text-black text-lg md:text-xl font-normal font-redhat">
              <img
                className="w-[28px] h-[34px] md:w-[33px] md:h-[39px] rounded-full"
                src={panier}
                alt="Item"
              />
              3 Items
            </div>
            <div className="text-black text-lg md:text-xl font-normal font-redhat">
              1720DA
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-[55px] mt-4 bg-[#43862e] text-white rounded-[15px] font-medium font-redhat cursor-pointer"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmOrder