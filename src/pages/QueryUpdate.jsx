import axios from 'axios';
import  { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

//http://localhost:3000/query/details/${params.id}
const QueryUpdate = () => {
    const {id} = useParams()
    const [query,setQuery] = useState([])
    const {owner_email,productName,productBrand,productImageURL,queryTitle,boycottReason,recommendationCount,currentData,owner_photo,owner_disPlayName} = query

    useEffect(()=>{
        fetchDataById()
    },[])
    
    const fetchDataById = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_localURL}/query/details/${id}`)
        setQuery(data)
    }
    const [time,setTime] = useState(new Date())
    const UpdateData = (e)=>{

        e.preventDefault();
        const form  = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productImageURL = form.productImageURL.value;
        const queryTitle = form.queryTitle.value;
        const boycottReason = form.boycottReason.value;

        
       const recommendationCount = 0;
       const currentData = time;

      
       const postInfo = {productName,productBrand,productImageURL,queryTitle,boycottReason,recommendationCount,currentData}
       
      axios.patch(`${import.meta.env.VITE_localURL}/query-update/${id}`,postInfo)
      .then(data=>{
        if(data.data) toast.success('data updated successfully')
       
      })
      .catch(error=>{
        alert(error)
      })
       

    }
   
    return (
        <div>
           <form onSubmit={UpdateData}
        
        className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg"
    >
        <h2 className="text-2xl font-bold mb-6 text-center">Update Query</h2>

        {/* Product Name */}
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
                Product Name:
            </label>
            <input
                type="text"
                name="productName"
                defaultValue={productName}
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
                defaultValue={productBrand}
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
                defaultValue={productImageURL}
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
                defaultValue={queryTitle}
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
                defaultValue={boycottReason}
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

export default QueryUpdate;