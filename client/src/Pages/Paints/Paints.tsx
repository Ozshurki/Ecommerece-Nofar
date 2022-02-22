import React, {useCallback, useEffect, useState} from "react";
import {ProductInt} from "../../Shared/Interfaces/Product-int";
import Products from "../../Components/Products/Products";
import axios from "axios";


interface Props {
    productName: string;
}

export const myProducts: ProductInt[] = [
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

const Paints: React.FC<Props> = (props) => {

    const [products, setProducts] = useState<ProductInt[]>([]);

    const updateProducts = (products:ProductInt[]) => setProducts(products);

    const getPaints = async () =>{
        try{
            const response = await axios.get("http://localhost:5000/api/products/paints");
            const paints = response.data["paints"];
            setProducts(paints);
        }catch (err){
            console.log(err)
        }
    }

    useEffect( () => {
         getPaints();
    },[]);

    return (
        <Products productName={props.productName}
                  products={products}
                  setProducts={updateProducts}/>
    );
};

export default Paints;