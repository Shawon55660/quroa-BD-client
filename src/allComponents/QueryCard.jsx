/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { LiaEyeSolid } from "react-icons/lia";
import { MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";


const QueryCard = ({ query, fetchData }) => {
    const { _id, owner_email, productName, productBrand, productImageURL, queryTitle, boycottReason, recommendationCount, currentData, owner_photo, owner_disPlayName } = query;
    const handleDelete = async (id) => {
        const { data } = await axios.delete(`${import.meta.env.VITE_localURL}/query-delete/${id}`)
        if (data.deletedCount) {
            fetchData()
            toast.success('delete data successfully')
        }

    }
    return (
        <div>

            <div className="md:grid md:grid-cols-8 gap-4 my-6  items-center  border-b-[1px] pb-2">
                <div className="col-span-2   px-4 ">
                    <img referrerPolicy="no-referrer" className="mx-auto  md:w-[300px]  rounded-md " src={productImageURL} alt="#" />
                </div>
                <div className="col-span-6 px-4 ">
                    <div>
                        <h2 className="text-xl font-semibold pb-1">{queryTitle}</h2>

                        <p className="pb-2 font-semibold text-gray-600"> {productName}</p>

                        <div className=" md:flex gap-8 pb-4 text-gray-600">
                            <div className="flex gap-2 items-center"> <MdWatchLater /><p> {format(new Date(currentData), 'P')}</p></div>
                            <div className="flex gap-4 items-center">  <LiaEyeSolid />  <p>{recommendationCount} recommended</p></div>
                        </div>
                        <p className="pr-4 text-gray-600 text-sm ">{boycottReason}</p>
                    </div>
                   
                   <div className="flex mt-2 gap-2">
                   <button className=' bg-yellow-500 text-white px-4 py-1 rounded-t-md rounded-b-md'><Link to={`/my-queries/query-details/${_id}`}>Details</Link></button>
                    <button className=' bg-[#380F8F] text-white px-4 py-1 rounded-t-md rounded-b-md'><Link to={`/my-queries/query-update/${_id}`} >Update</Link></button>

                    <button onClick={() => handleDelete(_id)} className=' bg-red-500 text-white px-4 py-1 rounded-t-md rounded-b-md'>Delete</button>
                   </div>
                </div>
            </div>


        </div>

    );
};

export default QueryCard;