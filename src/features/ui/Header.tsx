
import {Link} from 'react-router-dom'
import SearchOrder from "../order/SearchOrder.tsx";
import Username from "../user/Username.tsx";

const Header = () => {
    return (

        <header className='flex  justify-between items-center bg-yellow-500 uppercase px-4 py-3 sm:px-6 border-b- border-stone-200'>
            <Link className='tracking-widest' to='/'> Dial a Pizza Co.</Link>
            <SearchOrder/>
<Username/>
        </header>

    )
}
export default Header
