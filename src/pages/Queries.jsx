import axios from "axios";
import {  useEffect, useState } from "react";
import Card from "../allComponents/Card";
import bg from '../../src/assets/bg4.avif'

import Loader from "../allComponents/Loader";
import Helmets from "../sharedComponent/Helmets";
import { IoIosSearch } from "react-icons/io";



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
   if(!data.length) return <Loader></Loader>

    return (

     <>
     <Helmets heading='Queries'></Helmets>
        <div className="pb-8" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex items-center   justify-between w-11/12 mx-auto pt-4 ">
             <div className="flex items-center border-black rounded-md  px-4 py-2 bg-white gap-2 border-[1px]"> <span> <IoIosSearch /></span> <input onChange={e=> setSearch(e.target.value)}
                type="text"
                 placeholder="serach by Product name " 
                 className="outline-none " /></div>
                 <div className="lg:flex items-center  hidden  justify-center ">
                <button onClick={()=>changeLayout('lg:grid-cols-1')} className={`${layout == 'lg:grid-cols-1' ? 'bg-red-600':'bg-gray-800 '} rounded-l-sm py-1 border-r-[1px]  px-6 text-white `}>Layout 1 </button>
                <button onClick={()=>changeLayout('lg:grid-cols-2')} className={`${layout == 'lg:grid-cols-2' ? 'bg-red-600':'bg-gray-800 '}  py-1  px-6 text-white border-r-[1px]  `}>Layout 2 </button>
                <button onClick={()=>changeLayout('lg:grid-cols-3')} className={ `${layout == 'lg:grid-cols-3' ? 'bg-red-600':'bg-gray-800 '} rounded-r-sm py-1  px-6 text-white `}> Layout 3</button>
                
            </div> 
            </div>
            
           
              <div  className= {`grid ${layout} w-11/12  py-2  mx-auto gap-4 ${layout=='lg:grid-cols-1' && 'lg:w-5/12'} md:grid-cols-2 `}>
              
            {data.map(post=> <Card key={post._id} post={post}></Card>)}
 
          </div>
            
        </div>
     </>
    );
};

export default Queries;