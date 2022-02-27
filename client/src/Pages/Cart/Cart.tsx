import React from "react";

import ProductsKind from "../../Components/Products/ProductsKind/ProductsKind";
import CartContainer from "../../Components/CartContainer/CartContainer";

const Cart: React.FC = () => {

    return (
        <>
            <ProductsKind productName="My cart"/>
            <CartContainer/>
        </>
    );
};

export default Cart;