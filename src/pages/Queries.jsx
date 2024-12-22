import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../allComponents/Card";



const Queries = () => {
 const[data,allData] = useState([])
    useEffect(()=>{
        fetchAllQuery()
    },[])
    const fetchAllQuery = async()=>{

        const {data} = await axios.get(`${import.meta.env.VITE_localURL}/all-query`)
        allData(data)
    }

    return (
        <div>
              <div  className="grid md:grid-cols-2 my-12 lg:grid-cols-3 gap-3">
            {data.map(post=> <Card key={post._id} post={post}></Card>)}

          </div>
            
        </div>
    );
};

export default Queries;