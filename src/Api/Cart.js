import axios from 'axios';

const AddtoCart = async (id) =>{
    try {
        const response = await axios.post(`http://localhost:9900/api/cart/add/${id}`,{}, { withCredentials: true })
        console.log("Session ID from backend:", response.data.sessionId);
        alert("product added to your cart!")
        console.log(response)
    } catch (error) {
        
    }
}



export default AddtoCart