import React from "react";
import {BiShekel} from "react-icons/bi";
import {motion} from "framer-motion";
import {RootStateOrAny, useSelector} from "react-redux";

import "./OrderSummary.css";
import {CartItemType} from "../../store/slices/cart";



const btnHoverEffect = {
    scale: 1.05,
    color: "white",
    boxShadow: "0px 0px 5px",
};

const OrderSummary: React.FC = () => {

    const totalPrice: CartItemType[] = useSelector((state: RootStateOrAny) => state.cart.totalPrice);

    const animateFrom = {opacity: 0, x: "100vw"};
    const animateTo = {opacity: 1, x: 0};

    return (
        <motion.div className="order-sum-container"
             initial={animateFrom}
             animate={animateTo}
             transition={{delay: 0.20}}>
            <h2 className="order-title">Order Summary</h2>
            <div className="order-summary">
                <div>Total Price:</div>
                <div className="order-price">{totalPrice}
                    <span>
                        <BiShekel
                            color="black"
                            size="1.2rem"/>
                    </span>
                </div>
            </div>
            <motion.div className="order-btn"
            whileHover={btnHoverEffect}>Checkout</motion.div>
        </motion.div>
    );
};

export default OrderSummary;