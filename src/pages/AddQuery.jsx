import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";


const AddQuery = () => {
    const [time,setTime] = useState(new Date())
    const {user} = useContext(AuthContext)

    const addData = (e)=>{

        e.preventDefault();
        const form  = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productImageURL = form.productImageURL.value;
        const queryTitle = form.queryTitle.value;
        const boycottReason = form.boycottReason.value;

        //owner data
        const owner_email = user?.email
       const owner_disPlayName = user?.displayName;
       const owner_photo = user?.photoURL;
       const recommendationCount = 0;
       const currentData = time;

      
       const postInfo = {owner_email,productName,productBrand,productImageURL,queryTitle,boycottReason,recommendationCount,currentData,owner_photo,owner_disPlayName}
       
      axios.post(`${import.meta.env.VITE_localURL}/add-query`,postInfo)
      .then(data=>{
        if(data.data.acknowledged) toast.success('data added successfully')
       
      })
      .catch(error=>{
        alert(error)
      })
       

    }
    
    return (
        <div>
             <form onSubmit={addData}
        
            className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg"
        >
            <h2 className="text-2xl font-bold mb-6 text-center">Add Query</h2>

            {/* Product Name */}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                    Product Name:
                </label>
                <input
                    type="text"
                    name="productName"
                    required
                    placeholder="Enter Product Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Product Brand */}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                    Product Brand:
                </label>
                <input
                    type="text"
                    name="productBrand"
                    required
                    placeholder="Enter Product Brand"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Product Image URL */}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                    Product Image URL:
                </label>
                <input
                    type="text"
                    name="productImageURL"
                    required
                    placeholder="Enter Product Image URL"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Query Title */}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                    Query Title:
                </label>
                <input
                    type="text"
                    name="queryTitle"
                    required
                    placeholder="Enter Query Title"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Boycotting Reason */}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                    Boycotting Reason Details:
                </label>
                <textarea
                    name="boycottReason"
                    required
                    placeholder="Enter Boycotting Reason"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Add Query
            </button>
        </form>
        </div>
    );
};

export default AddQuery;