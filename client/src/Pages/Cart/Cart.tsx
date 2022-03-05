import React from "react";

import PageType from "../../Components/ProductsType/PageType";
import CartContainer from "../../Components/CartContainer/CartContainer";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import "./Cart.css";

const Cart: React.FC = () => {

    return (
        <>
            <PageType productType="My cart"/>
            <div className="cart-content">
                <CartContainer/>
                <OrderSummary/>
            </div>
        </>
    );
};

export default Cart;