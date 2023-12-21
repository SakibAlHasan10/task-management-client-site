import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Home from "../pages/home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const routes = createBrowserRouter([
{
    path:"/",
    element:<Root/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/signin",
            element:<SignIn/>
        },
        {
            path:"/signup",
            element:<SignUp/>
        }
    ]
}
])


export default routes;