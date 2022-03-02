import React, {useState} from "react";

import PageType from "../../Components/ProductsType/PageType";
import CartContainer from "../../Components/CartContainer/CartContainer";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import "./Cart.css";

const Cart: React.FC = () => {

    const [selectedItemsPrice, setSelectedPrice] = useState<number>(0);

    const updatePrice = (price: number) => setSelectedPrice(price);


    return (
        <>
            <PageType productType="My cart"/>
            <div className="cart-content">
                <CartContainer updateSelectedPrice={updatePrice}/>
                <OrderSummary price={selectedItemsPrice}/>
            </div>
        </>
    );
};

export default Cart;