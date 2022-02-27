import React from "react";
import {AiOutlineClose, AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {BiShekel} from "react-icons/bi";

import {CartItemType} from "../../../store/slices/cart";
import {useDispatch} from "react-redux";
import {cartActions} from "../../../store/slices/cart";
import "./CartItem.css";


interface Props {
    item: CartItemType;
}


const CartItem: React.FC<Props> = ({item}) => {

    const dispatch = useDispatch();

    return (
        <div className="cart-item-container">
            <div className="delete-btn item">
                <AiOutlineClose
                    color="grey"
                    size="1.2rem"/>
            </div>
            <div className="item">
                <img src={item.product.images[0]} alt="cart"/>
            </div>
            <div className="cart-item-details item">
                <div className="title">
                    {item.product.title}
                </div>
                <div className="option">
                    {item.option}
                </div>
            </div>
            <div className="cart-item-quantity item">
                <div>
                    <AiOutlinePlusCircle
                        color="grey"
                        size="1.5rem"
                        onClick={() => dispatch(cartActions.addItem(item))}/>
                </div>
                <span>x{item.quantity}</span>
                <div>
                    <AiOutlineMinusCircle
                        color="grey"
                        size="1.7rem"
                    onClick={() => dispatch(cartActions.removeItem(item.product.id))}/>
                </div>
            </div>
            <div className="cart-item-price item">
                {item.product.price * item.quantity}
                <span><BiShekel color="black" size="1.2rem"/></span>
            </div>
        </div>
    );
};

export default CartItem;