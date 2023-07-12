
import LinkButton from "../ui/LinkButton.tsx";
import Button from "../ui/Button.tsx";
import CartItem from "./CartItem.tsx";
import {useDispatch, useSelector} from "react-redux";
import {getUserName} from "../../redux/user/userSlice.js";
import {clearCart, getCart} from "../../redux/cart/cartSlice.js";
import EmptyCart from "./EmptyCart.tsx";


function Cart() {
  const cart = useSelector(getCart);
  const  username = useSelector(getUserName)

  const dispatch = useDispatch()

if (!cart.length) return <EmptyCart/>

  return (
    <div className='px-4 py-3'>


    <LinkButton to='/menu'>&larr; Back  to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart,{username}</h2>

      <ul className='divide-y divide-stone-200 border-b-2 mt-3'>
        {cart.map((item) => (<CartItem item={item} key={item.id}/>))}
      </ul>

      <div  className='mt-6 space-x-3'>

        <Button to="/order/new" type='primary'>
          Order pizzas

        </Button>

        <Button type='secondary' onClick={() => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
