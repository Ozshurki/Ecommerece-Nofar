import React, {useEffect, useState} from "react";
import {RootStateOrAny, useSelector} from "react-redux";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

import "./CartContainer.css";
import {CartItemType} from "../../store/slices/cart";
import CartItem from "./CartItem/CartItem";


interface Props {
    updateSelectedPrice: (price: number) => void;
}

const errorMsg = <div className="cart-empty-msg">Your cart is empty</div>;

const CartContainer: React.FC<Props> = ({updateSelectedPrice}) => {

    const cartItems: CartItemType[] = useSelector((state: RootStateOrAny) => state.cart.items);
    const [selectedItems, setSelectedItems] = useState<CartItemType[]>([]);

    // Activate element when 20% of him on the screen
    const [ref, inView] = useInView({threshold: 0.4});
    const animation = useAnimation();

    const sumSelectedItems = () => {

        const sum = selectedItems.reduce((total: number, item: CartItemType): number => {
            return total + (item.product.price * item.quantity);
        }, 0);

        updateSelectedPrice(sum);
    };

    const handleAnimation = async () => {
        if(inView)
            await animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 0, bounce: 0.3
                }
            })
        else
            await animation.start({x: '-100vw'})
    }

    useEffect(() => {
        sumSelectedItems();
    }, [selectedItems]);

    useEffect(() => {
        handleAnimation();
    },[inView])


    const addItem = (item: CartItemType) => {
        const newItems = [...selectedItems, item];
        setSelectedItems(newItems);
    };

    const removeItem = (id: string) => {
        const newItems = selectedItems.filter((item: CartItemType) => item.product.id !== id);
        setSelectedItems(newItems);
    };

    return (
        <div className="cart-container" ref={ref}>
            <motion.div className="cart-items-wrapper" animate={animation}>
                {cartItems.length === 0 ? errorMsg
                    : cartItems.map((item, i: number) => {
                        return (
                            <CartItem item={item}
                                      addItem={addItem}
                                      removeItem={removeItem}
                                      sumSelectedItems={sumSelectedItems}
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