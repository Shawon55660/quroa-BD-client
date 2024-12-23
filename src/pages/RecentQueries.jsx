/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecentQueryCard from '../allComponents/RecentQueryCard';

const RecentQueries = () => {

    const [recent,setRecent] = useState([])
    useEffect(()=>{

        fetchData()
    },[])

    const fetchData = async()=>{

        const {data}  = await axios.get(`${import.meta.env.VITE_localURL}/Recent-queries`)
        setRecent(data)
    }
    return (
        <div className='w-9/12 mx-auto'>
            <div>
                <h2 className='text-3xl text-center font-semibold my-4 border-b pb-6 border-[#380F8F]'>Recently Posted Query</h2>
            </div>

           {
            recent.map(post=> <RecentQueryCard key={post._id}  post={post}></RecentQueryCard>)
           }
        </div>
    );
};

export default RecentQueries;