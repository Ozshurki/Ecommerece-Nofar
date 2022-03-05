import React from "react";
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import {GrFormClose} from "react-icons/gr";
import {BiShekel} from "react-icons/bi";

import "./ProductPreview.css";
import {ProductInt} from "../../../Shared/Interfaces/Product-int";


const backDropVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
};

const modalVariants = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "100px",
        opacity: 1,
        transition: {delay: 0.5}
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: {delay: 0.5, duration: 5}
    }
};

const btnHoverEffect = {
    scale: 1.05,
    color: "white",
    boxShadow: "0px 0px 5px",
};

interface Props {
    product: ProductInt | null;
    toggleModal: () => void;
    productName: string;
}

// ProductPreview
const ProductPreview: React.FC<Props> = ({product, toggleModal, productName}) => {

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div className="backdrop"
                        variants={backDropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden">
                <motion.div className="product-preview" variants={modalVariants}>
                    <div className="modal-header">
                        <div className="modal-close-btn">
                            <GrFormClose onClick={toggleModal}
                                         color="black"
                                         size="1.5rem"/>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="modal-img">
                            <img src={product!.images[0]} alt=""/>
                        </div>
                        <div className="modal-content">
                            <div className="modal-title">{product!.title}</div>
                            <div className="modal-price">{product!.price}
                                <span>
                                    <BiShekel
                                        color="#a749ff"
                                        size="1.2rem"/>
                                </span>
                            </div>
                            <div className="modal-description">{product!.description}</div>
                            <Link to={`/products/${productName}/${product!.id}`}>
                                <motion.div className="modal-link-container" whileHover={btnHoverEffect}>
                                    <div className="modal-link">Buy</div>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductPreview;