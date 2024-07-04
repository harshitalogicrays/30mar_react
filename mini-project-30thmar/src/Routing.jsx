import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Products from "./features/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import AdminLayout from "./features/Admin/AdminLayout";
import Dashboard from "./features/Admin/Dashboard";
import { Protected, ProtectedAdmin } from "./features/hiddenlinks";
import AddProduct from "./features/Admin/AddProduct";
import ViewProduct from "./features/Admin/ViewProduct";
import Cart from "./features/Cart";

const routerlinks = createBrowserRouter([
    {path:'/',element:<App/>,children:[
        {path:'',element:<Home/>},
        // {path:'products',element:<Protected><Products/></Protected>},
        {path:'products',element:<Products/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
        {path:'cart',element:<Protected><Cart/></Protected>}
    ]},
    {
        path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
            children:[
            {path:'',element:<Dashboard/>},
            {path:'add',element:<AddProduct/>},
            {path:'view',element:<ViewProduct/>},
            {path:'edit/:id',element:<AddProduct/>},
        ]
    },
    {path:'*', element:<PageNotFound/>}
])

export default routerlinks