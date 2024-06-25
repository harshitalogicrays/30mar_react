import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Products from "./features/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";

const routerlinks = createBrowserRouter([
    {path:'/',element:<App/>,children:[
        {path:'',element:<Home/>},
        {path:'products',element:<Products/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>}
    ]},
    {path:'*', element:<PageNotFound/>}
])

export default routerlinks