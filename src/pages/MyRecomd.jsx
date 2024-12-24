import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaDeleteLeft } from "react-icons/fa6";
import toast from "react-hot-toast";
import AxiosUses from "../hooks/AxiosUses";


const MyRecomd = () => {
    const {user} =useContext(AuthContext)
    const [recData,setRecData] = useState([])
    const axiosSecure = AxiosUses()
    useEffect(()=>{
        fetchDataRec()
    },[])

    

    const fetchDataRec = async()=>{
        // const {data} = await axios.get(`${import.meta.env.VITE_localURL}/my-recommendation?recommender_email=${user?.email}`, {withCredentials:true})
        const {data} = await axiosSecure.get(`/my-recommendation?recommender_email=${user?.email}`)

        setRecData(data)

    }
    const handleDelete= async(id)=>{

        const {data} =await axios.delete(`${import.meta.env.VITE_localURL}/my-recommendation/${id}`)

        if(data.deletedCount){
            toast.success('data delete successfully')
            fetchDataRec()
        }

  
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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      

     {recData.map(data=> 
     <tr key={data._id}>
        <td>{data.recQueryTitle}</td>
        <td>{data.recProductName}</td>
        <td>{data.recReason}</td>
        <td>{data.currentData}</td>
        <td>{data.owner_email}</td>
        <td onClick={()=>handleDelete(data.recommand_id)}><FaDeleteLeft color="red" size={30}/></td>
       
      </tr>)} 
     
     
    </tbody>
    
  </table>
</div>

        </div>
    );
};

export default MyRecomd;