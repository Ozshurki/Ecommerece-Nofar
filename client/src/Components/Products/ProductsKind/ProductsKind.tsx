import React from "react";
import './ProductsKind.css';


interface Props {
    productName: string;
}

const ProductsKind: React.FC<Props> = (props) => {


    return (
        <div className="products-kind-container">
            <div className="products-kind-content">
                {props.productName}
            </div>
        </div>
    );
};

export default ProductsKind;