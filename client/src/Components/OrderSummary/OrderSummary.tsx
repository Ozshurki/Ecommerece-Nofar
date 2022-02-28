import React from "react";
import {BiShekel} from "react-icons/bi";
import {motion} from "framer-motion";

import "./OrderSummary.css";

interface Props {
    price: number;
}

const btnHoverEffect = {
    scale: 1.05,
    color: "white",
    boxShadow: "0px 0px 5px",
};

const OrderSummary: React.FC<Props> = ({price}) => {

    return (
        <div className="order-sum-container">
            <h2 className="order-title">Order Summary</h2>
            <div className="order-summary">
                <div>Total Price:</div>
                <div className="order-price">{price}
                    <span>
                        <BiShekel
                            color="black"
                            size="1.2rem"/>
                    </span>
                </div>
            </div>
            <motion.div className="order-btn"
            whileHover={btnHoverEffect}>Buy</motion.div>
        </div>
    );
};

export default OrderSummary;