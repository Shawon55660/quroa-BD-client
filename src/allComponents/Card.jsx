/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';


const Card = ({post}) => {
    const   {_id,owner_email,productName,productBrand,productImageURL,queryTitle,boycottReason,recommendationCount,currentData,ownerInfo} = post;

    const[comment,setComment] = useState([])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_localURL}/recommend-id?recommand_id=${_id}`)
        setComment(data)
    }
    console.log(comment)
    return (
        <div className='  '>
            <div className="p-2 bg-base-100 card border-[1px]     w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                  <p>Posted Time: {format(new Date(currentData), 'Pp')}</p>
                    <p>{productName}</p>
                    <p>RecommendationCount {recommendationCount}</p>
                   
                    <Link to={`/queries/details/${_id}`}><button className='btn btn-success'>recommend </button></Link>
                    <div className="card-actions justify-end">
                   <p className='border-t-2'> {
                        comment.map(comment=> <Comment key={comment._id} comment={comment}></Comment>)
                    }</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;