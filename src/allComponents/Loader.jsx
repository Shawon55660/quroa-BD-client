import React from 'react';

const Loader = () => {
    return (
        <div className='text-center  min-h-[calc(100vh-400px)] flex items-center justify-center'>
           <div>
           <span className="loading loading-spinner loading-3xl"></span>
           <span className="loading loading-spinner loading-3xl"></span>
           <span className="loading loading-spinner loading-3xl"></span>
           
           </div>
        </div>
    );
};

export default Loader;