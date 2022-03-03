import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {BiShekel} from "react-icons/bi";
import { motion } from "framer-motion";

import {ProductInt} from "../../../../Shared/Interfaces/Product-int";
import './ProductCard.css';

interface Props {
    product: ProductInt;
    toggleModal: () => void;
    setModalDetails: (product: ProductInt) => void;
}

const ProductCard: React.FC<Props> = ({product, toggleModal, setModalDetails}) => {

    const [isHover, setIsHover] = useState<boolean>(false);

    const toggleHover = () => setIsHover(!isHover);

    const imgHandler = () => {
        toggleModal();
        setModalDetails(product);
    };


    return (
        <motion.div layout className="product-card-container"
             onMouseOver={toggleHover}
             onMouseOut={toggleHover}>
            <div className="product-card-img"
                 onClick={imgHandler}>
                <img className="img"
                     src={product.images[0]}
                     alt=""/>
            </div>
            <div className="product-card-content">
                <div className="product-card-description">
                    <Link to={`/products/${product.type}s/${product.id}`}>
                        {product.description}
                    </Link>
                </div>
                <div className="product-card-price">{product.price}
                    <span>
                        <BiShekel color="#a749ff" size="1.2rem"/>
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;