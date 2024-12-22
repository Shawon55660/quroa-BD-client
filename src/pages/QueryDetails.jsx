import { useLoaderData } from "react-router-dom";


const QueryDetails = () => {
 const detailsData =useLoaderData()
  
    return (
        <div className="w-11/12 mx-auto">
            {detailsData._id}
            
        </div>
    );
};

export default QueryDetails;