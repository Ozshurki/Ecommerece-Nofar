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

interface Props {
    product: ProductInt | null;
    toggleModal: () => void;
    productName: string;
}

// ProductPreview
const ProductPreview: React.FC<Props> = ({product, toggleModal, productName}) => {

    return (
        <AnimatePresence exitBeforeEnter >
            <motion.div className="backdrop"
                        variants={backDropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden">
                <motion.div className="product-preview" variants={modalVariants}>
                    <div className="modal-header">
                        <button className="modal-close-btn">
                            <GrFormClose onClick={toggleModal}
                                         color="black"
                                         size="1.5rem"/>
                        </button>
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
                            <motion.div className="modal-link-container">
                                <Link className="modal-link" to={`/products/${productName}/${product!.id}`}>Show full details</Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductPreview;