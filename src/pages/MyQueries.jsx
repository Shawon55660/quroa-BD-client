import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import QueryCard from "../allComponents/QueryCard";

const MyQueries = () => {
    
const {user} = useContext(AuthContext)
const [queryData,setQueryData] = useState([])

useEffect(()=>{
    fetchData()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[user])
    const fetchData = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_localURL}/my-query?owner_email=${user?.email}`)
        setQueryData(data)
    }

    return (
        <div className="w-11/12 mx-auto">
        
          <div> <button className="btn btn-success"><Link to='/my-queries/add-query'>Add Query</Link></button></div>
          <div  className="grid md:grid-cols-2 my-12 lg:grid-cols-3 gap-3">
            {queryData.map(query=> <QueryCard key={query._id} fetchData = {fetchData} query={query}></QueryCard>)}

          </div>
        </div>
    );
};

export default MyQueries;