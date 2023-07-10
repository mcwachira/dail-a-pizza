
import {Link} from 'react-router-dom'
import SearchOrder from "../order/SearchOrder.tsx";

const Header = () => {
    return (

        <header>
            <Link to='/'> Dial a Pizza Co.</Link>
            <SearchOrder/>

        </header>

    )
}
export default Header
