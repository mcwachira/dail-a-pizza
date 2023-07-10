
import Header from "./Header.tsx";
import CartOverview from "../cart/CartOverview.tsx";

import {Outlet, useNavigate, useNavigation} from "react-router-dom";
import Loader from "./Loader.tsx";

const AppLayout = () => {
    const navigation = useNavigation()

    const isLoading = navigation.state ==='loading'
    return (
      <div className='layout'>
          {isLoading && <Loader/>}
          
          <Header/>
          
          <main>
              <h1>
                  Content
              </h1>
              <Outlet/>

              <CartOverview/>

          </main>
      </div>
    )
}
export default AppLayout
