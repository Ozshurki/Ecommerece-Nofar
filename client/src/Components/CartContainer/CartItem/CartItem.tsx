import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {FaTrashAlt} from "react-icons/fa";
import {BiShekel} from "react-icons/bi";
import {GrCheckboxSelected} from "react-icons/gr";
import {motion} from "framer-motion";

import {CartItemType} from "../../../store/slices/cart";
import {cartActions} from "../../../store/slices/cart";
import "./CartItem.css";


interface Props {
    item: CartItemType;
    addItem: (item: CartItemType) => void;
    removeItem: (id: string) => void;
    sumSelectedItems: () => void;
    coordinate: number;
    inView: any;
}


const CartItem: React.FC<Props> = ({item, addItem, removeItem, sumSelectedItems, coordinate, inView}) => {

    const [isSelected, setIsSelected] = useState<boolean>(false);
    const dispatch = useDispatch();

    const animateFrom = {opacity: 0, x: -40};
    const animateTo = {opacity: 1, x: 0};

    const handleSelect = () => {

        setIsSelected(!isSelected);

        if (!isSelected)
            addItem(item);
        else
            removeItem(item.product.id);
    };

    const handleIncrease = () => {
        dispatch(cartActions.addItem(item));
        sumSelectedItems();
    };

    const handleDecrease = () => {
        dispatch(cartActions.decreaseQuantity(item.product.id));
        sumSelectedItems();
    };

    // Render only if the father is in view
    return (
        inView && <motion.div className="cart-item-container"
                               initial={animateFrom}
                               animate={animateTo}
                               transition={{delay: coordinate, type: "spring"}}>
            <div className="select-item item">
                {!isSelected ? <div onClick={handleSelect}/>
                    :
                    <GrCheckboxSelected color="black"
                                        size="1.2rem"
                                        onClick={handleSelect}/>
                }
            </div>
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
                <div className="title">
                    {item.product.title}
                </div>
                <div className="option">
                    {item.option}
                </div>
            </div>
            <div className="cart-item-quantity item">
                <div>
                    <AiOutlinePlusCircle
                        color="grey"
                        size="1.5rem"
                        onClick={handleIncrease}/>
                </div>
                <span>{item.quantity}</span>
                <div>
                    <AiOutlineMinusCircle
                        color="grey"
                        size="1.7rem"
                        onClick={handleDecrease}/>
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