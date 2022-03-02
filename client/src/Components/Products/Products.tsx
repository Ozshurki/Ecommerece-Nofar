import React from 'react';
import PageType from "../ProductsType/PageType";
import ProductsContainer from "./ProductsContainer/ProductsContainer";
import {ProductInt} from "../../Shared/Interfaces/Product-int";

interface Props {
    productType: string;
    products: ProductInt[];
    isLoading?: boolean;
    setProducts: (products:ProductInt[]) => void;
}

const Products: React.FC<Props> = (props) => {

    return (
        <>
            {props.isLoading ?
                (<React.Fragment>
                    <PageType productType={props.productType}/>
                    <ProductsContainer products={props.products}
                                       productName={props.productType}
                                       setProducts={props.setProducts}/>
                </React.Fragment>)

                : (<div>Loading...</div>)
            }
        </>
    );
};

export default Products;