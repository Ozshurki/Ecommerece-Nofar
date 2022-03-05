import React, {useState, useEffect, useCallback} from "react";
import axios from "axios";

import {ProductInt} from "../../Shared/Interfaces/Product-int";
import PageType from "../../Components/ProductsType/PageType";
import ProductsContainer from "../../Components/Products/ProductsContainer/ProductsContainer";
import Loader from "../../Components/Loader/Loader";
import SortProducts from "../../Components/SortProducts/SortProducts";
import {sortProducts} from "../../util/sortFunction";


const Bags: React.FC = () => {

    const [products, setProducts] = useState<ProductInt[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const updateProducts = (products: ProductInt[]) => setProducts(products);



    const getBags = useCallback(async () => {

        try {
            setIsLoading(true);
            const response = await axios.get("http://localhost:5000/api/products/bags");
            setIsLoading(false);

            const bags = response.data["bags"];
            setProducts(bags);

        } catch (err) {
            console.log(err);
        }
    }, []);

    const sortHandler = (sortMethod: string) => {

        const sortedProducts = sortProducts(products ,sortMethod);
        setProducts(sortedProducts);
    };

    useEffect(() => {
        getBags();
    }, [getBags]);


    return (
        <>
            <PageType productType="Bags"/>
            {!isLoading ?
                <>
                    <SortProducts sortHandler={sortHandler}/>
                    <ProductsContainer products={products}
                                       productName="Bags"
                                       setProducts={setProducts}/>
                </>
                : <Loader/>
            }
        </>
    );
};

export default Bags;