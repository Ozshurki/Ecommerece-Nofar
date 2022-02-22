import React from "react";
import ProductCard from "../../Products/ProductsContainer/ProductCard/ProductCard";
import {ProductInt} from "../../../Shared/Interfaces/Product-int";
import './ProductsContent.css';

const products: ProductInt[] = [
    {
        id: "123",
        title: "myPaint",
        images: ["https://flone-react.pages.dev/assets/img/product/accessories/9.jpg"],
        description: "Bag that i made with a pink red blue fucking ass hole bitch",
        price: 9.99,
        sizes: ["20x20"],
        colors: ["black"],
        type: "paint"
    },
    {
        id: "123",
        title: "myPaint",
        images: ["https://flone-react.pages.dev/assets/img/product/accessories/3.jpg"],
        description: "This paint is blue and shit fucker",
        price: 192.99,
        sizes: ["20x20"],
        colors: ["black"],
        type: "paint"
    },
    {
        id: "123",
        title: "myPaint",
        images: ["https://flone-react.pages.dev/assets/img/product/accessories/3.jpg"],
        description: "This paint is blue and shit fucker",
        price: 1.99,
        sizes: ["20x20"],
        colors: ["black"],
        type: "paint"
    },
    {
        id: "123",
        title: "myPaint",
        images: ["https://flone-react.pages.dev/assets/img/product/accessories/3.jpg"],
        description: "This paint is blue and shit fucker",
        price: 100.99,
        sizes: ["20x20"],
        colors: ["black"],
        type: "paint"
    },
    {
        id: "123",
        title: "myPaint",
        images: ["https://flone-react.pages.dev/assets/img/product/accessories/3.jpg"],
        description: "This paint is blue and shit fucker",
        price: 19.99,
        sizes: ["20x20"],
        colors: ["black"],
        type: "paint"
    },
    {
        id: "123",
        title: "myPaint",
        images: ["https://flone-react.pages.dev/assets/img/product/accessories/3.jpg"],
        description: "This paint is blue and shit fucker",
        price: 70.99,
        sizes: ["20x20"],
        colors: ["black"],
        type: "paint"
    },
    {
        id: "123",
        title: "myPaint",
        images: ["https://flone-react.pages.dev/assets/img/product/accessories/3.jpg"],
        description: "This paint is blue and shit fucker",
        price: 19.99,
        sizes: ["20x20"],
        colors: ["black"],
        type: "paint"
    },
    {
        id: "123",
        title: "myPaint",
        images: ["https://flone-react.pages.dev/assets/img/product/accessories/3.jpg"],
        description: "This paint is blue and shit fucker",
        price: 19.99,
        sizes: ["20x20"],
        colors: ["black"],
        type: "paint"
    }
];


const ProductsContent: React.FC = () => {
    return (
        <div className="product-area-content">
            {products.map(product =>
                <ProductCard product={product}
                             key={product.id}
                             toggleModal={() => {}}
                             setModalDetails={() => {}}/>
            )}
        </div>
    );
};

export default ProductsContent;