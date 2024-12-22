import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../allComponents/Loader';

const PrivateRouter = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    if(loader){
        return <Loader></Loader>
    }
    if(user) return children
};

export default PrivateRouter;