import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Home from "../pages/home/Home";

const routes = createBrowserRouter([
{
    path:"/",
    element:<Root/>,
    children:[
        {
            path:"/",
            element:<Home/>
        }
    ]
}
])


export default routes;