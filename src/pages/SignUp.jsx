import React, { useState } from 'react'
import Signup1 from './SignUp1'
import Signup2 from './SignUp2'
import axios from 'axios'


export const SignUp = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData]= useState({
        name: "",
        ownerName: "",
        phone: "",
        address: "",
        email: "",
        password:"",
    })
    console.log(formData)

    // 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('here')
            const res = await axios.post("http://localhost:9900/api/pepiniere/register", formData, {
                headers: {
                  "Content-Type": "application/json"
                }
            });
            console.log("Success:", res.data);
            // You can redirect or update UI here after success
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    };
    
  return (
    <>
        {step == 1 && <Signup1 setStep={setStep} formData={formData} setFormData={setFormData} />}
        {step == 2 && <Signup2  setStep={setStep}  formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>}
        
    </>
  )
}
export default SignUp;
