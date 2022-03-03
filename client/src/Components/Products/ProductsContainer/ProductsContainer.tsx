import React, {useState} from 'react';

import {ProductInt} from "../../../Shared/Interfaces/Product-int";
import ProductCard from "./ProductCard/ProductCard";
import Modal from "../../Modal/Modal";
import ProductPreview from "../../Modal/ProductPreview/ProductPreview";
import "./ProductsContainer.css";

interface Props {
    products: ProductInt[];
    productName: string;
    setProducts: (products:ProductInt[]) => void;
}

const ProductsContainer: React.FC<Props> = (props) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalDetails, setModalDetails] = useState<ProductInt | null>(null);

    const toggleModal = () => setShowModal(!showModal);

    return (
        <div className="products-wrapper">
            <div className="products-container">
                {props.products.map(product =>
                    <ProductCard product={product}
                                 toggleModal={toggleModal}
                                 setModalDetails={setModalDetails}
                                 key={product.id}/>
                )}
            </div>
            {showModal &&
            <Modal>
                <ProductPreview product={modalDetails}
                                productName={props.productName}
                                toggleModal={toggleModal}/>
            </Modal>
            }
        </div>
    );
};

export default ProductsContainer;
