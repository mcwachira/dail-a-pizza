import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTotalCartQuantity,getTotalCartPrice} from '../../redux/cart/cartSlice.js'
import {formatCurrency} from "../utilities/helpers.ts";
function CartOverview() {



    const totalCartQuantity =useSelector(getTotalCartQuantity);


    const totalCost= useSelector(getTotalCartPrice);


  return (
    <div className='flex items-center justify-between bg-stone-800 text-sm sm:text-base text-stone-200 uppercase px-4 py-4 sm:px-6'>
      <p className='text-stone-300 font-semibold space-x-4 sm:space-x-6'>
        <span>{totalCartQuantity } pizzas</span>
        <span>{formatCurrency(totalCost)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
