import React from 'react'
import Button from "./Button";
import {useDispatch} from "react-redux";
import {deleteItem} from '../../redux/cart/cartSlice.js'

const DeleteItem = ({pizzaId}) => {

    const dispatch = useDispatch()
    return   <Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
}
export default DeleteItem
