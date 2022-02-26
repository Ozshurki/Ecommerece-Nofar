import React, {useEffect, useState} from "react";
import axios from "axios";

import {ProductInt} from "../../Shared/Interfaces/Product-int";
import ProductsKind from "../../Components/Products/ProductsKind/ProductsKind";
import ProductsContainer from "../../Components/Products/ProductsContainer/ProductsContainer";
import Loader from "../../Components/Loader/Loader";


const Paints: React.FC = () => {

    const [products, setProducts] = useState<ProductInt[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const updateProducts = (products: ProductInt[]) => setProducts(products);


    useEffect(() => {

        const getPaints = async () => {

            try {
                setIsLoading(true);
                const response = await axios.get("http://localhost:5000/api/products/paints");
                setIsLoading(false);
                const paints = response.data["paints"];
                setProducts(paints);
            } catch (err) {
                console.log(err);
            }

        };

        getPaints();

    }, []);

    return (
        <>
            <ProductsKind productName="Paints"/>
            {isLoading ?
                <ProductsContainer products={products}
                                   productName="Paints"
                                   setProducts={setProducts}/>
                : <Loader/>
            }
        </>
    );
};

export default Paints;