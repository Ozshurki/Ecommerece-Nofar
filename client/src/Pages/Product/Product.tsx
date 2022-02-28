import React, {useEffect} from "react";
import "./Product.css";
import PageType from "../../Components/ProductsKind/PageType";
import ProductDetails from "../../Components/Products/ProductDetails/ProductDetails";

interface Props{
    productName: string;
}

const Product: React.FC<Props>= (props) => {

    return (
        <div className="product-page">
            <PageType productName={props.productName}/>
            <ProductDetails/>
        </div>
    );
};

export default Product;