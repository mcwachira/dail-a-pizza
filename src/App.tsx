import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css'
import Home from "./features/ui/Home.tsx";
import Menu from "./features/menu/Menu.tsx";
import Cart from "./features/cart/Cart.tsx";
import CreateOrder , {action as createOrderAAction} from "./features/order/CreateOrder.tsx";
import Order from "./features/order/Order.tsx";
import AppLayout from "./features/ui/AppLayout.tsx";
import {loader as menuLoader} from "./features/menu/Menu.tsx";
import {loader as orderLoader} from './features/order/Order.tsx'

import Error from "./features/ui/Error.tsx";


const router = createBrowserRouter([

    {
        //layout route
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/menu',
                element:<Menu/>,
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
            }
        ]
    }

])
function App() {


    return <RouterProvider router={router}/>
}

export default App



