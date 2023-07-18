import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css'
import Home,{loader as menuLoader} from "./features/ui/Home.tsx";
import Cart from "./features/cart/Cart.tsx";
import CreateOrder , {action as createOrderAAction} from "./features/order/CreateOrder.tsx";
import  {action as updateOrderAAction} from "./features/order/UpdateOrder.tsx";
import Order from "./features/order/Order.tsx";
import AppLayout from "./features/ui/AppLayout.tsx";

import {loader as orderLoader} from './features/order/Order.tsx'

import Error from "./features/ui/Error.tsx";
import SignUp from "./features/ui/SignUp.tsx";
import SignIn from "./features/ui/SignIn.tsx";


const router = createBrowserRouter([

    {
        //layout route
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:menuLoader,
                errorElement:<Error/>,
            },

            {
                path:'/sign-up',
                element:<SignUp/>,
                loader:menuLoader,
                errorElement:<Error/>,
            },
            {
                path:'/sign-in',
                element:<SignIn/>,
                loader:menuLoader,
                errorElement:<Error/>,
            },
            {
                path:'/cart',
                element:<Cart/>,
            },
            {
                path:'/order/new',
                element:<CreateOrder/>,
                action:createOrderAAction,
            },
            {
                path:'/order/:orderId',
                element:<Order/>,
                loader:orderLoader,
                errorElement:<Error/>,
                action:updateOrderAAction,
            }
        ]
    }

])
function App() {


    return <RouterProvider router={router}/>
}

export default App



