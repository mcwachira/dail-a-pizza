import {getMenu} from '../services/apiRestaurant.ts'
import {useLoaderData} from "react-router-dom";
import MenuItem from "./MenuItem.tsx";

function Menu() {
 const menu = useLoaderData()

     return (
         <ul>

           {menu.map((pizza) => (
               <MenuItem pizza={pizza} key={pizza.id}/>
           ))}

         </ul>
         )

}




export const loader = async () => {
  const menu = await getMenu()

  return menu
}

export default Menu;