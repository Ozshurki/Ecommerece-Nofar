import React from 'react';
import Banner from "./Banner/Banner";
import './ProductsBanner.css';

const ProductsBanner: React.FC = () => {


    return (
        <div className="banners-container">
            <Banner url="/products/paints"
                    productName="Paints"
                    imgURL="https://flone-react.pages.dev/assets/img/banner/banner-1.jpg"/>
            <Banner url="/products/bags"
                    productName="Bags"
                    imgURL="https://flone-react.pages.dev/assets/img/banner/banner-2.jpg"/>
            <Banner url="/products/courses"
                    productName="Courses"
                    imgURL="https://flone-react.pages.dev/assets/img/banner/banner-3.jpg"/>
        </div>
    );
};

export default ProductsBanner;