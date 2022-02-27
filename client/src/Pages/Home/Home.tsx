import React, {useEffect, useState} from "react";
import axios from "axios";

import Video from "../../Components/Video/Video";
import ProductsBanner from "../../Components/ProductsBanner/ProductsBanner";
import TabList from "../../Components/TabList/TabList";
import ProductsContainer from "../../Components/Products/ProductsContainer/ProductsContainer";
import Loader from "../../Components/Loader/Loader";
import {ProductInt} from "../../Shared/Interfaces/Product-int";
import './Home.css';


const Home: React.FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductInt[]>([]);


    useEffect(() => {
        console.log(1);
        const getProducts = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get("http://localhost:5000/api/products/");
                setIsLoading(false);

                if (response.data["products"])
                    setProducts(response.data["products"]);

            } catch (err) {
                console.log(err);
            }
        };
        getProducts();

    }, []);

    return (
        <div className="content-container">
            <div className="content">
                <Video urlVideo="sample-mp4-file-small.mp4" width="100%" height="300"/>
                <ProductsBanner/>
                <TabList/>
                {isLoading ?
                    <ProductsContainer products={products}
                                       productName="Bags"
                                       setProducts={setProducts}/>
                    : <Loader/>
                }
            </div>
        </div>
    );
};

export default Home;