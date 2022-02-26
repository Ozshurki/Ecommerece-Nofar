import React, {useEffect, useState} from "react";

import TabList from "../TabList/TabList";
import ProductsContainer from "../Products/ProductsContainer/ProductsContainer";
import Loader from "../Loader/Loader";
import "./ProductArea.css";
import {ProductInt} from "../../Shared/Interfaces/Product-int";
import axios from "axios";


const ProductArea: React.FC = () => {

    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductInt[]>([]);


    useEffect(() => {
        const getProducts = async () => {
            try {
                // setIsLoading(true);
                // const response = await axios.get("http://localhost:5000/api/products/");
                // setIsLoading(false);
                //const allProducts = response.data["products"];
               // setProducts(allProducts);
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, [])

    return (
        <div className="product-area">
            <div className="product-area-container">

                {/*{isLoading ?*/}
                {/*    <ProductsContainer products={products}*/}
                {/*                       productName="Bags"*/}
                {/*                       setProducts={setProducts}/>*/}
                {/*    : <Loader/>*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default ProductArea;