/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import QueryCard from "../allComponents/QueryCard";
import AxiosUses from "../hooks/AxiosUses";

const MyQueries = () => {
    
const {user} = useContext(AuthContext)
const [queryData,setQueryData] = useState([])
const axiosSecure = AxiosUses()

useEffect(()=>{
    fetchData()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[user])
    const fetchData = async()=>{
        // const {data} = await axios.get(`${import.meta.env.VITE_localURL}/my-query?owner_email=${user?.email}`,{withCredentials:true})
        const {data} = await axiosSecure.get(`/my-query?owner_email=${user?.email}`)
        setQueryData(data)
    }

    return (
        <div className="w-11/12 mx-auto">
        
          <div className="w-11/12 mx-auto text-center" > <h2 className="text-2xl my-4 font-semibold">My Query List  </h2> 
            <button className="bg-[#380F8F] text-white px-4 py-1 rounded-md  "><Link to='/my-queries/add-query'>Add More</Link></button></div>
          <div  >
            {queryData.map(query=> <QueryCard key={query._id} fetchData = {fetchData} query={query}></QueryCard>)}

          </div>
        </div>
    );
};

export default MyQueries;