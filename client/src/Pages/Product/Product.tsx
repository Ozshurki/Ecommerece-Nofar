import React, {useEffect} from "react";
import "./Product.css";
import PageType from "../../Components/ProductsType/PageType";
import ProductDetails from "../../Components/Products/ProductDetails/ProductDetails";

interface Props{
    productType: string;
}

const Product: React.FC<Props>= (props) => {

    return (
        <div className="product-page">
            <PageType productType={props.productType}/>
            <ProductDetails/>
        </div>
    );
};

export default Product;