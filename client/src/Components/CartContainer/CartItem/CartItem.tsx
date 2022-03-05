import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {FaTrashAlt} from "react-icons/fa";
import {BiShekel} from "react-icons/bi";
import {GrCheckboxSelected} from "react-icons/gr";
import {motion} from "framer-motion";

import {CartItemType} from "../../../store/slices/cart";
import {cartActions} from "../../../store/slices/cart";
import "./CartItem.css";
import {Link} from "react-router-dom";


interface Props {
    item: CartItemType;
    coordinate: number;
    inView: any;
}


const CartItem: React.FC<Props> = ({item, coordinate, inView}) => {

    const dispatch = useDispatch();

    const animateFrom = {opacity: 0, x: -40};
    const animateTo = {opacity: 1, x: 0};


    // Render only if the father component is in view
    return (
        inView && <motion.div className="cart-item-container"
                               initial={animateFrom}
                               animate={animateTo}
                               transition={{delay: coordinate, type: "spring"}}>
            <div className="delete-btn item">
                <FaTrashAlt
                    className="cart-delete-icon"
                    color="grey"
                    size="1.5rem"
                    onClick={() => dispatch(cartActions.deleteItem(item.product.id))}/>
            </div>
            <div className="cart-item-img item">
                <img src={item.product.images[0]} alt="cart"/>
            </div>
            <div className="cart-item-details item">
                <Link to={`/products/${item.product.type}s/${item.product.id}`} className="title">
                    {item.product.title}
                </Link>
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
                <span>{item.quantity}</span>
                <div>
                    <AiOutlineMinusCircle
                        color="grey"
                        size="1.7rem"
                        onClick={() => dispatch(cartActions.decreaseQuantity(item.product.id))}/>
                </div>
            </div>
            <div className="cart-item-price item">
                {item.product.price}
                <span><BiShekel color="black" size="1.2rem"/></span>
            </div>
        </motion.div>
    );
};

export default CartItem;