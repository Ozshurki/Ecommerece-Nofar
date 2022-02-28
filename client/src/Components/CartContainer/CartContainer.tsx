import React, {useEffect, useState} from "react";
import {RootStateOrAny, useSelector} from "react-redux";

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

    const sumSelectedItems = () => {

        const sum = selectedItems.reduce((total: number, item: CartItemType): number => {
            return total + (item.product.price * item.quantity);
        }, 0);

        updateSelectedPrice(sum);
    };

    useEffect(() => {
        sumSelectedItems();
    }, [selectedItems]);

    const addItem = (item: CartItemType) => {
        const newItems = [...selectedItems, item];
        setSelectedItems(newItems);
    };

    const removeItem = (id: string) => {
        const newItems = selectedItems.filter((item: CartItemType) => item.product.id !== id);
        setSelectedItems(newItems);
    };

    return (
        <div className="cart-container">
            {cartItems.length === 0 ? errorMsg
                : cartItems.map((item) => {
                    return (
                        <CartItem item={item}
                                  addItem={addItem}
                                  removeItem={removeItem}
                                  sumSelectedItems={sumSelectedItems}
                                  key={item.product.id}/>
                    );
                })}
        </div>
    );
};

export default CartContainer;