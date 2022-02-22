import React from "react";
import {Link} from 'react-router-dom';
import TabList from "./TabList/TabList";
import ProductsContent from "./ProductsContent/ProductsContent";
import "./ProductArea.css";


const ProductArea: React.FC = () => {
    return (
        <div className="product-area">
            <div className="product-area-container">
                <TabList/>
                <ProductsContent/>
            </div>
        </div>
    );
};

export default ProductArea;