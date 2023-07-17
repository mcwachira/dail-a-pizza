
import {getMenu} from '../services/apiRestaurant'
import MenuItem from   '../menu/MenuItem'
import {useLoaderData} from "react-router-dom";

function Home() {

    const menu = useLoaderData()
    console.log(menu)
  return (

      <>
          <div className='my-10 sm:my-16 text-center'>
              <h1 className="text-xl   font-semibold mb-8 md:text-3xl ">
                  The best pizza.
                  <br />

                  <span className='text-yellow-500'>

                  Straight out of the oven, straight to you.
            </span>

              </h1>


          </div>

          <ul className='divide-y divide-stone-200 px-2'>

              {menu.map((pizza) => (
                  <MenuItem pizza={pizza} key={pizza.id}/>
              ))}

          </ul>
      </>



  );
}

export const loader = async () => {
    const menu = await getMenu()

    return menu
}

export default Home;