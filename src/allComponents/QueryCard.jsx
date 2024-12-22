/* eslint-disable react/prop-types */

import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const QueryCard = ({query,fetchData}) => {
    const   {_id,owner_email,productName,productBrand,productImageURL,queryTitle,boycottReason,recommendationCount,currentData,owner_photo,owner_disPlayName} = query;
    const handleDelete =async(id)=>{
        const {data} = await axios.delete(`${import.meta.env.VITE_localURL}/query-delete/${id}`)
       if(data.deletedCount){
        fetchData()
        toast.success('delete data successfully')
       }
     
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{owner_email}</h2>
                  <p>Deadline: {format(new Date(currentData), 'Pp')}</p>
                    <p>{productName}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning"><Link to={`/my-queries/query-details/${_id}`}>Details</Link></button>
                        <button className="btn btn-primary"><Link to={`/my-queries/query-update/${_id}`} >Update</Link></button>

                        <button onClick={()=>handleDelete(_id)}  className="btn btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;