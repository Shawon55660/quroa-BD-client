/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Comment from './Comment';
import { MdWatchLater } from 'react-icons/md';
import { LiaEyeSolid } from 'react-icons/lia';


const Card = ({ post }) => {
    const { _id, owner_email, productName, productBrand, productImageURL, queryTitle, boycottReason, recommendationCount, currentData, owner_photo, owner_disPlayName } = post;

    const [comment, setComment] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_localURL}/recommend-id?recommand_id=${_id}`)
        setComment(data)
    }

    return (
        <div className="  bg-white  mx-auto mt-4 items-start border-[1px] pb-2 rounded-sm">


            <div className=" px-4">
                <div>
                    <div className='flex gap-2 items-start my-2 '>
                        {post?.owner_photo ? <img src={owner_photo} className='w-10 h-10 rounded-full' alt="" /> :
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content w-10 rounded-full">
                                    <span className="text-xs">A</span>
                                </div>
                            </div>}
                        <div>
                            <p className='font-semibold '>{owner_disPlayName ? owner_disPlayName : 'Guest '}</p>
                            <p className='text-xs text-gray-400'>{format(new Date(currentData), 'PP')}</p>
                        </div>

                    </div>
                    <h2 className="text-2xl font-semibold pb-1">{queryTitle}</h2>

                    <p className="pb-1 text-xl font-semibold text-gray-600"> {productName}</p>


                    <p className="w-11/12 text-gray-600 text-md border-b-[1px] py-3 ">{boycottReason}</p>
                    <div className=" h-[250px]   w-full">
                        <img referrerPolicy="no-referrer" className=" object-full o w-full  h-full rounded-md " src={productImageURL} alt="#" />

                    </div>
                    <div className=" flex gap-8 py-2 text-sm text-gray-600">
                        <div className="flex gap-2 items-center"> <MdWatchLater /><p> {format(new Date(currentData), 'P')}</p></div>
                        <div className="flex gap-2 items-center">  <LiaEyeSolid />  <p>{recommendationCount} recommended</p></div>
                    </div>
                    {comment?.length ? <span className='font-semibold py-1 my-1 border-b-[1px]'> Recommended Product: </span> : ''}
                    {comment.map(comment =>
                        <div key={comment._id}>
                            <div className='flex items-center gap-2 my-4  '>
                                <img className='w-10 rounded-full h-10 ' src={comment.recommender_photo} alt="" />
                                <div className='py-[2px] px-2 bg-gray-200 border-[1px rounded-md w-[300px]' >
                                    <p className='font-bold text-sm'>{comment.recommender_disPlayName}</p>
                                    <p className='text-sm'>{comment.recProductName}</p>
                                </div>

                            </div>

                        </div>)}
                    <Link to={`/queries/details/${_id}`}><button className=' bg-[#380F8F] text-white px-4 py-2 rounded-t-md rounded-b'> Recommendation </button></Link>

                </div>


            </div>

        </div>
    );
};

export default Card;