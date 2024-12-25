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
    const [layout ,setLayout] = useState(3)
    const changeLayout = (id)=>{
        setLayout(id)

    }
   
console.log(layout)
    return (

        <div style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex justify-center pt-4">
                <input onChange={e=> setSearch(e.target.value)}
                type="text"
                 placeholder="serach Query by title" 
                 className="outline-none rounded-md border-black border-[1px] px-4 py-2" /> 
            </div>
            <div className="lg:flex gap-3 hidden  justify-center mt-4">
                <button onClick={()=>changeLayout(1)} className={`btn btn-neutral ${layout ==1 && `btn-warning`}`}>grid 1 </button>
                <button onClick={()=>changeLayout(2)} className={`btn btn-neutral ${layout ==2 && `btn-warning`}`}>grid 2 </button>
                <button onClick={()=>changeLayout(3)} className={`btn btn-neutral ${layout ==3 && `btn-warning`}`}>grid 3 </button>
                
            </div>
           
              <div  className= {``}>
              
            {data.map(post=> <Card key={post._id} post={post}></Card>)}
 
          </div>
            
        </div>
    );
};

export default Queries;