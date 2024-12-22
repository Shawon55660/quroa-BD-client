/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import { Link } from 'react-router-dom';


const Card = ({post}) => {
    const   {_id,owner_email,productName,productBrand,productImageURL,queryTitle,boycottReason,recommendationCount,currentData,ownerInfo} = post;
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
                  <p>Posted Time: {format(new Date(currentData), 'Pp')}</p>
                    <p>{productName}</p>
                    <p>RecommendationCount {recommendationCount}</p>
                    <Link to={`/queries/details/${_id}`}><button className='btn btn-success'>recommend </button></Link>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;