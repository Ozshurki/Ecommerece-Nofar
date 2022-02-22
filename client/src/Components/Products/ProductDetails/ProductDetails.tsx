import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./ProductDetails.css";
import {BiShekel} from "react-icons/bi";
import {ProductInt} from "../../../Shared/Interfaces/Product-int";
import {motion, AnimatePresence} from "framer-motion";
import Slider from "../../Slider/Slider";
import PaintOptions from "../../Products-options/PaintOptions/PaintOptions";
import BagOptions from "../../Products-options/BagOptions/BagOptions";
import axios from "axios";

// const images = ["https://ae01.alicdn.com/kf/HTB1kextPXXXXXXZXFXXq6xXFXXXy/200x300.jpg",
//     "https://ae01.alicdn.com/kf/HTB1kextPXXXXXXZXFXXq6xXFXXXy/200x300.jpg",
//     "https://ae01.alicdn.com/kf/HTB1kextPXXXXXXZXFXXq6xXFXXXy/200x300.jpg",
//     "https://ae01.alicdn.com/kf/HTB1kextPXXXXXXZXFXXq6xXFXXXy/200x300.jpg",
//     "https://cdn.wallpapersafari.com/32/0/Ku6C4G.jpg"];

const btnHoverEffect = {
    scale: 1.1,
    boxShadow: "0px 0px 5px rgb(167,73,255)",
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

interface Props {
    productName: string;
}

const ProductDetails: React.FC<Props> = (props) => {

    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductInt>();
    const [option, setOption] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const getProduct = async () => {

        try{
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data["product"]);
            console.log(response);
        }catch (err){
            console.log(err);
        }
    }

    useEffect( () => {
        getProduct();
    }, [id]);

    const handleOptions = (option: string) => setOption(option);
    const handleImage = (img: string) => setImage(img);

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
                        {props.productName === "ציורים" && <PaintOptions setOption={handleOptions}/>}
                        {props.productName === "תיקים" && <BagOptions setOption={handleOptions}/>}
                    </div>
                    <div className="product-btn-container">
                        <motion.button whileHover={btnHoverEffect}>קנה</motion.button>
                        <motion.button whileHover={btnHoverEffect}>הוסף לסל</motion.button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductDetails;