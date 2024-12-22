import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Register from "../allComponents/Register";
import Login from "../allComponents/Login";
import PrivateRouter from "./PrivateRouter";
import MyQueries from "../pages/MyQueries";
import AddQuery from "../pages/AddQuery";
import Queries from "../pages/Queries";
import OtherRecmond from "../pages/OtherRecmond";
import MyRecomd from "../pages/MyRecomd";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/login',
                element: <Login></Login>
            },
           
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/my-queries',
                element: <PrivateRouter> <MyQueries></MyQueries></PrivateRouter>
            },
            {
                path:'/add-query',
                element: <PrivateRouter> <AddQuery></AddQuery></PrivateRouter>
            },
            {
                path: '/Recommendations-For-Me',
                element: <PrivateRouter><OtherRecmond></OtherRecmond></PrivateRouter>
            },
            {
                path:'/My-recommendations',
                element: <PrivateRouter><MyRecomd></MyRecomd></PrivateRouter>
            },
            {
                path:'/queries',
                element: <Queries></Queries>
            }
            

        ],
        
        errorElement: <h2>hello i am from error</h2>
        
    }

])

export default router