import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Register from "../allComponents/Register";
import Login from "../allComponents/Login";

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
            }

        ],
        
        errorElement: <h2>hello i am from error</h2>
        
    }

])

export default router