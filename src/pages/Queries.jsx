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
    const [layout ,setLayout] = useState('lg:grid-cols-3')
    const changeLayout = (layout)=>{
        setLayout(layout)

    }
   

    return (

        <div className="pb-8" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex items-center   justify-around pt-4 ">
                <input onChange={e=> setSearch(e.target.value)}
                type="text"
                 placeholder="serach by Product name " 
                 className="outline-none rounded-md border-black border-[1px] px-4 py-2" />
                 <div className="lg:flex items-center  hidden  justify-center ">
                <button onClick={()=>changeLayout('lg:grid-cols-1')} className={`${layout == 'lg:grid-cols-1' ? 'bg-red-600':'bg-gray-800 '} rounded-sm py-1  px-6 text-white `}>Layout 1 </button>
                <button onClick={()=>changeLayout('lg:grid-cols-2')} className={`${layout == 'lg:grid-cols-2' ? 'bg-red-600':'bg-gray-800 '} rounded-sm py-1  px-6 text-white `}>Layout 2 </button>
                <button onClick={()=>changeLayout('lg:grid-cols-3')} className={ `${layout == 'lg:grid-cols-3' ? 'bg-red-600':'bg-gray-800 '} rounded-sm py-1  px-6 text-white `}> Layout 3</button>
                
            </div> 
            </div>
            
           
              <div  className= {`grid ${layout} w-11/12  py-2  mx-auto gap-4 ${layout=='lg:grid-cols-1' && 'lg:w-5/12'} md:grid-cols-2 `}>
              
            {data.map(post=> <Card key={post._id} post={post}></Card>)}
 
          </div>
            
        </div>
    );
};

export default Queries;