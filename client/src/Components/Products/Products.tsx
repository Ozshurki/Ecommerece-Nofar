import React, {useEffect} from 'react';
import ProductsKind from "./ProductsKind/ProductsKind";
import ProductsContainer from "./ProductsContainer/ProductsContainer";
import {ProductInt} from "../../Shared/Interfaces/Product-int";

interface Props {
    productName: string;
    products: ProductInt[];
    setProducts: (products:ProductInt[]) => void;
}

const Products: React.FC<Props> = (props) => {

    return (
        <React.Fragment>
            <ProductsKind productName={props.productName}/>
            <ProductsContainer products={props.products}
                               productName={props.productName}
                               setProducts={props.setProducts}/>
        </React.Fragment>
    );
};

export default Products;