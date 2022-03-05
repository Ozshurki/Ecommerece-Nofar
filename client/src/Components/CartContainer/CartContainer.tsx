import React, {useEffect} from "react";
import {RootStateOrAny, useSelector} from "react-redux";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

import {CartItemType} from "../../store/slices/cart";
import CartItem from "./CartItem/CartItem";
import "./CartContainer.css";




const errorMsg = <div className="cart-empty-msg">Your cart is empty</div>;

const CartContainer: React.FC= () => {

    const cartItems: CartItemType[] = useSelector((state: RootStateOrAny) => state.cart.items);

    // Activate element when 30% of him on the screen
    const [ref, inView] = useInView({threshold: 0.3});
    const animation = useAnimation();

    const handleAnimation = async () => {
        if (inView)
            await animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 0, bounce: 0.3
                }
            });
        else
            await animation.start({x: '-100vw'});
    };

    useEffect(() => {
        handleAnimation();
    }, [inView]);

    return (
        <div className="cart-container" ref={ref}>
            <motion.div className="cart-items-wrapper" animate={animation}>
                {cartItems.length === 0 ? errorMsg
                    : cartItems.map((item, i: number) => {
                        return (
                            <CartItem item={item}
                                      coordinate={i * 0.15}
                                      inView={inView}
                                      key={item.product.id}/>
                        );
                    })}
            </motion.div>
        </div>
    );
};

export default CartContainer;