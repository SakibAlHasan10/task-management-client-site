import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Home from "../pages/home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import AddTask from "../pages/dashboard/AddTask";
import Update from "../pages/dashboard/Update";
import MyTask from "../pages/dashboard/mytask";

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
},

{
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
        {
            path:"",
            element:<Profile/>
        },
        {
            path:"addtask",
            element:<AddTask/>
        },
        {
            path:"mytask",
            element:<MyTask/>
        },
        {
            path:"update",
            element:<Update/>
        }
    ]
}
])


export default routes;