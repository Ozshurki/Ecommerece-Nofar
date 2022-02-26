import React, {useEffect, useState} from 'react';

import {ProductInt} from "../../../Shared/Interfaces/Product-int";
import ProductCard from "./ProductCard/ProductCard";
import Modal from "../../Modal/Modal";
import ProductPreview from "../../Modal/ProductPreview/ProductPreview";
import SortProducts from "../../SortProducts/SortProducts";
import "./ProductsContainer.css";

interface Props {
    products: ProductInt[];
    productName: string;
    setProducts: (products:ProductInt[]) => void;
}

const ProductsContainer: React.FC<Props> = (props) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalDetails, setModalDetails] = useState<ProductInt | null>(null);

    const sortHandler = (sortMethod: string) => {

        //setProducts(props.products);
        const sortedProducts = [...props.products];

        if (sortMethod === "low-to-high") {
            sortedProducts.sort((a: ProductInt, b: ProductInt): number => {
                return (a.price - b.price);
            });
        } else if (sortMethod === "high-to-low") {
            sortedProducts.sort((a: ProductInt, b: ProductInt): number => {
                return (b.price - a.price);
            });
        }

        props.setProducts(sortedProducts);
    };

    const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        sortHandler(event.target.value);
    };

    const toggleModal = () => setShowModal(!showModal);

    useEffect(() => {
        sortHandler("low-to-high");
    }, []);


    return (
        <div className="products-wrapper">
            {/*<SortProducts sortHandler={selectHandler}/>*/}
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
