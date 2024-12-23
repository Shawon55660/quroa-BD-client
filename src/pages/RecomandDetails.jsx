/* eslint-disable no-unused-vars */
import axios from 'axios';
import { format } from 'date-fns';
import  { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const RecomandDetails = () => {
    const{user} = useContext(AuthContext)
    const {id} = useParams()
    const navigate  = useNavigate()
   
    const [query,setQuery] = useState([])
    const [time,setTime] = useState(new Date())
    const{owner_email,productName,productBrand,productImageURL,queryTitle,boycottReason,recommendationCount,currentData,owner_photo,owner_disPlayName}= query || {}

    useEffect(()=>{
        fetchDataById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const fetchDataById = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_localURL}/query/details/${id}`)
        setQuery(data)
    }

       const handle = e =>{
     
        e.preventDefault();
        const form  = e.target;
        const recProductName = form.productName.value;
        const recProductBrand = form.productBrand.value;
        const recProductImageURL = form.productImageURL.value;
        const recQueryTitle = form.queryTitle.value;
        const recReason = form.boycottReason.value;
        const recommand_id = id;

        //owner data
        const recommender_email = user?.email
       const recommender_disPlayName = user?.displayName;
       const recommender_photo = user?.photoURL;
       const currentData = time;

       const recommonderInfo = {recProductName,recProductBrand,recProductImageURL,recQueryTitle,recReason,recommender_email,recommender_disPlayName,recommender_photo,currentData,recommand_id,owner_email};
       
       if(owner_email ==recommender_email) return toast.error(`you can't recommanded your query!!!`)

       axios.post(`${import.meta.env.VITE_localURL}/recommanded`,recommonderInfo)
       .then(data=>{
        if(data.data.acknowledged) {
            navigate('/queries') 
            toast.success('Recommendation successfully')
        }
            else{
                toast.error('sorry you are already recommanded is post')
            }
       
      })
     
      .catch(error=>{
        toast.error('server error try again')
       
      })

        }
       console.log(currentData)
    return (
        <div className='grid md:grid-cols-6 gap-4 w-11/12 mx-auto my-12 justify-between'>
           <div className='col-span-2'>
            <div>
                <p>Posted Email: {owner_email}</p>
                <p>name:{owner_disPlayName}</p>
                {/* <p>Deadline: {format(new Date(currentData), 'Pp')}</p> */}
               
                <img src={owner_photo} className='w-50 h-50 rounded-full object-cover' alt="" />
            </div>

           </div>
           <div className='col-span-4'>
           <form onSubmit={handle}
        className="max-w-lg  mx-auto bg-white shadow-lg p-6 rounded-lg"
    >
        <h2 className="text-2xl font-bold mb-6 text-center">Recommended  Query</h2>

        {/* Product Name */}
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
            Recommended  Product Name:
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
            Recommended  Product Brand:
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
            Recommended  Product Image URL:
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
            Recommended  Query Title:
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
            Recommended Reason Details:
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
            className="w-full bg-[#380F8F] text-white py-3 rounded-lg  transition duration-300"
        >
            Recommended
        </button>
    </form>
           </div>
        </div>
    );
};

export default RecomandDetails;