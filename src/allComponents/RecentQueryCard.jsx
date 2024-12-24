/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { format } from "date-fns";
import { LiaEyeSolid } from "react-icons/lia";
import { MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";


// eslint-disable-next-line no-unused-vars
const RecentQueryCard = ({post}) => {
    const   {_id,owner_email,productName,productBrand,productImageURL,queryTitle,boycottReason,recommendationCount,currentData,owner_photo,owner_disPlayName} = post;
    return (
        <div className="md:grid md:grid-cols-8 gap-4 my-6 items-start border-b-[1px] pb-2">
            <div className="col-span-2   px-4 md:border-[#380F8F] md:border-r-[1px]">
                <img referrerPolicy="no-referrer" className="mx-auto   rounded-md " src={productImageURL} alt="#" />
            </div>
            <div className="col-span-6 px-4 md:flex items-end justify-around">
               <div>
               <h2 className="text-xl font-semibold pb-1">{queryTitle}</h2>
                
                <p className="pb-2 font-semibold text-gray-600"> {productName}</p>
             
           
            <p  className="pr-4 text-gray-600 text-sm ">{boycottReason}</p>
            <div className=" md:flex gap-8 pt-4 text-gray-600">
           <div className="flex gap-2 items-center"> <MdWatchLater /><p> {format(new Date(currentData), 'P')}</p></div>
         <div className="flex gap-4 items-center">  <LiaEyeSolid />  <p>{recommendationCount} recommended</p></div>
            </div>
               </div>
               <div>
               <Link to={`/queries/details/${_id}`}><button className=' bg-[#380F8F] text-white px-4 py-1 rounded-t-md rounded-b'>Recommendation </button></Link>
                
               </div>
            </div>
        </div>
    );
};

export default RecentQueryCard;