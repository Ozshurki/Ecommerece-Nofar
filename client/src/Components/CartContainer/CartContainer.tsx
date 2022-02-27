import React from "react";
import {RootStateOrAny, useSelector} from "react-redux";


import "./CartContainer.css";
import {CartItemType} from "../../store/slices/cart";
import CartItem from "./CartItem/CartItem";


const CartContainer: React.FC = () => {

    const cartItems: CartItemType[] = useSelector((state: RootStateOrAny) => state.cart.items);

    return (
        <div className="cart-container">
            {cartItems.map((item) => {
                return (
                    <CartItem item={item}
                              key={item.product.id}/>
                );
            })}
        </div>
    );
};

export default CartContainer;