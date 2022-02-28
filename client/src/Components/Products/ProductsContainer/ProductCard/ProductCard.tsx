import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {ProductInt} from "../../../../Shared/Interfaces/Product-int";
import './ProductCard.css';
import {BiShekel} from "react-icons/bi";


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
        <div className="product-card-container"
             onMouseOver={toggleHover}
             onMouseOut={toggleHover}>
            <div className="product-card-img"
                 onClick={imgHandler}>
                <img className="img"
                     src={product.images[0]}
                     alt=""/>
            </div>
            <div className="product-card-content">
                <div className="product-card-description" onMouseOver={() => console.log("over")}>
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
        </div>
    );
};

export default ProductCard;