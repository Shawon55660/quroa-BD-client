import axios from "axios";
import {  useEffect, useState } from "react";
import Card from "../allComponents/Card";
import bg from '../../src/assets/bg4.avif'



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

        <div style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex justify-center pt-4">
                <input onChange={e=> setSearch(e.target.value)}
                type="text"
                 placeholder="serach Query by title" 
                 className="outline-none rounded-md border-black border-[1px] px-4 py-2" /> 
            </div>
           
              <div  className="  mx-auto py-6">
              
            {data.map(post=> <Card key={post._id} post={post}></Card>)}
 
          </div>
            
        </div>
    );
};

export default Queries;