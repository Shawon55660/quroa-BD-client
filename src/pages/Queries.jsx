import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../allComponents/Card";



const Queries = () => {
    const [search,setSearch] =useState('')
    
 const[data,allData] = useState([])
    useEffect(()=>{
        const fetchAllQuery = async()=>{

            const {data} = await axios.get(`${import.meta.env.VITE_localURL}/all-query?search=${search}`)
            allData(data)
        }
        fetchAllQuery()
        
    },[search])
    
   

    return (
        <div>
            <div className="flex justify-center">
                <input onChange={e=> setSearch(e.target.value)}
                type="text"
                 placeholder="serach Query by title" 
                 className="outline-none rounded-md border-black border-[1px] px-4 py-2" /> 
            </div>
              <div className="w-10/12 mx-auto my-12">
            {data.map(post=> <Card key={post._id} post={post}></Card>)}
 
          </div>
            
        </div>
    );
};

export default Queries;