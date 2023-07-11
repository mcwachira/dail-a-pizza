
import Header from "./Header.tsx";
import CartOverview from "../cart/CartOverview.tsx";

import {Outlet, useNavigate, useNavigation} from "react-router-dom";
import Loader from "./Loader.tsx";

const AppLayout = () => {
    const navigation = useNavigation()

    const isLoading = navigation.state ==='loading'
    return (
      <div className='grid h-screen grid-rows-[auto_1fr_auto] '>
          {isLoading && <Loader/>}


          
          <Header/>

          <div className='overflow-scroll'>

              <main className=' max-w-3xl mx-auto'>


                  <Outlet/>



              </main>

          </div>
          

          <CartOverview/>
      </div>
    )
}
export default AppLayout
