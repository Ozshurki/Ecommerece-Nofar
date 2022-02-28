import React, {useEffect} from 'react';
import PageType from "../ProductsKind/PageType";
import ProductsContainer from "./ProductsContainer/ProductsContainer";
import {ProductInt} from "../../Shared/Interfaces/Product-int";

interface Props {
    productName: string;
    products: ProductInt[];
    isLoading?: boolean;
    setProducts: (products:ProductInt[]) => void;
}

const Products: React.FC<Props> = (props) => {

    return (
        <>
            {props.isLoading ?
                (<React.Fragment>
                    <PageType productName={props.productName}/>
                    <ProductsContainer products={props.products}
                                       productName={props.productName}
                                       setProducts={props.setProducts}/>
                </React.Fragment>)

                : (<div>Loading...</div>)
            }
        </>
    );
};

export default Products;