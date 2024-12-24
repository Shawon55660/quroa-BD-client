/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AxiosUses from "../hooks/AxiosUses";


const OtherRecmond = () => {
    const {user} =useContext(AuthContext)
    const [recData,setRecData] = useState([])
    const axiosSecure = AxiosUses()
    useEffect(()=>{
        fetchDataRec()
    },[user])

    const fetchDataRec = async()=>{
      
        // const {data} = await axios.get(`${import.meta.env.VITE_localURL}/recommendation-for-me?owner_email=${user?.email}`,{withCredentials:true})
         const {data} =await axiosSecure.get(`/recommendation-for-me?owner_email=${user?.email}`)
        setRecData(data)

    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
       
        <th>Recommendation Title</th>
        <th>Recommended product Name</th>
        <th>Recommendation Reason</th>
        <th>Recommended Time</th>
        <th>Owner Email</th>
      </tr>
    </thead>
    <tbody>
      

     {recData.map(data=> 
     <tr key={data._id}>
        <td>{data.recQueryTitle}</td>
        <td>{data.recProductName}</td>
        <td>{data.recReason}</td>
        <td>{data.currentData}</td>
        <td>{data.recommender_email}</td>
       
      </tr>)} 
     
     
    </tbody>
    
  </table>
</div>

        </div>
    );
};

export default OtherRecmond;