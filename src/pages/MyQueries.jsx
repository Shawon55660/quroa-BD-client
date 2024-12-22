import { Link } from "react-router-dom";


const MyQueries = () => {
    return (
        <div>
           <button className="btn btn-success"><Link to='/add-query'>Add Query</Link></button>
        </div>
    );
};

export default MyQueries;