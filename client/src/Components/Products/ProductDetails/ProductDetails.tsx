import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {motion, AnimatePresence} from "framer-motion";
import {BiShekel} from "react-icons/bi";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";

import {ProductInt} from "../../../Shared/Interfaces/Product-int";
import Slider from "../../Slider/Slider";
import PaintOptions from "../../Products-options/PaintOptions/PaintOptions";
import BagOptions from "../../Products-options/BagOptions/BagOptions";
import {cartActions} from "../../../store/slices/cart";
import "./ProductDetails.css";


const btnHoverEffect = {
    scale: 1.05,
    color: "white",
    backgroundColor: "black",
    boxShadow: "0px 0px 5px",
};

const containerVariants = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
    },
    exit: {
        x: "-100vw",
        transition: {ease: "easeInOut"}
    }
};


const ProductDetails: React.FC = () => {

    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductInt>();
    const [option, setOption] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [image, setImage] = useState<string>("");
    const dispatch = useDispatch();

    const getProduct = async () => {

        try {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data["product"]);
            setImage(product?.images[0] ?? "");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    const handleOptions = (option: string) => setOption(option);
    const handleImage = (img: string) => setImage(img);
    const quantityHandler = (newQuantity: number) => {

        if ((quantity + newQuantity) === -1) return;
        setQuantity(newQuantity);
    };
    const addToCartHandler = () => {

        if (option === "") return;
        dispatch(cartActions.addItem({product, quantity, option}));
    };


    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div className="product-details-container"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit">
                <div className="product-img-container">
                    <img src={image} alt="asd"/>
                    <div className="slider-container">
                        <Slider images={product?.images ?? []} setImage={handleImage}/>
                    </div>
                </div>
                <div className="product-details">
                    <div className="product-title">{product?.title}</div>
                    <div className="product-price">{product?.price}
                        <span><BiShekel color="#a749ff" size="1.2rem"/></span>
                    </div>
                    <div className="product-description">{product?.description}</div>
                    <div className="product-options">
                        {product?.type === "paint" && <PaintOptions setOption={handleOptions} sizes={product.sizes}/>}
                        {product?.type === "bag" && <BagOptions setOption={handleOptions} colors={product.colors}/>}
                    </div>
                    <div className="quantity-container">
                        <div className="quantity-controllers">
                            <div>
                                <AiOutlinePlusCircle
                                    color="grey"
                                    size="1.4rem"
                                    onClick={() => quantityHandler(quantity + 1)}/>
                            </div>
                            <span>{quantity}</span>
                            <div>
                                <AiOutlineMinusCircle
                                    color="grey"
                                    size="1.4rem"
                                    onClick={() => quantityHandler(quantity - 1)}/>
                            </div>
                        </div>
                    </div>
                    <div className="product-btn-container">
                        <motion.button whileHover={btnHoverEffect}>Buy</motion.button>
                        <motion.button whileHover={btnHoverEffect}
                                       onClick={addToCartHandler}>Add to cart
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductDetails;