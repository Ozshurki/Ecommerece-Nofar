import React, {useState, useEffect} from "react";
import Products from "../../Components/Products/Products";
import {ProductInt} from "../../Shared/Interfaces/Product-int";

interface Props {
    productName: string;
}
//
// const myProducts: ProductInt[] = [
//     {
//         productID: "12123",
//         title: "myPaint",
//         imgURL: "https://flone-react.pages.dev/assets/img/product/accessories/9.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aspernatur assumenda consectetur cum deleniti\n" +
//             "    dolore, eveniet iure laborum, natus nostrum omnis praesentium rerum? Alias culpa molestias odio quam\n" +
//             "    similique.",
//         price: 1
//     },
//     {
//         productID: "12123",
//         title: "myPaint",
//         imgURL: "https://flone-react.pages.dev/assets/img/product/accessories/3.jpg",
//         description: "This paint is blue and shit fucker",
//         price: 192.99
//     },
//     {
//         productID: "12333",
//         title: "myPaint",
//         imgURL: "https://flone-react.pages.dev/assets/img/product/accessories/3.jpg",
//         description: "This paint is blue and shit fucker",
//         price: 1.99
//     },
//     {
//         productID: "12553",
//         title: "myPaint",
//         imgURL: "https://flone-react.pages.dev/assets/img/product/accessories/3.jpg",
//         description: "This paint is blue and shit fucker",
//         price: 100.99
//     },
//     {
//         productID: "12773",
//         title: "myPaint",
//         imgURL: "https://flone-react.pages.dev/assets/img/product/accessories/3.jpg",
//         description: "This paint is blue and shit fucker",
//         price: 19.99
//     },
//     {
//         productID: "12003",
//         title: "myPaint",
//         imgURL: "https://flone-react.pages.dev/assets/img/product/accessories/3.jpg",
//         description: "This paint is blue and shit fucker",
//         price: 70.99
//     },
//     {
//         productID: "12883",
//         title: "myPaint",
//         imgURL: "https://flone-react.pages.dev/assets/img/product/accessories/3.jpg",
//         description: "This paint is blue and shit fucker",
//         price: 19.99
//     },
//     {
//         productID: "124563",
//         title: "myPaint",
//         imgURL: "https://flone-react.pages.dev/assets/img/product/accessories/3.jpg",
//         description: "This paint is blue and shit fucker",
//         price: 19.99
//     }
// ];


const Bags: React.FC<Props> = (props) => {

    const [products, setProducts] = useState<ProductInt[]>([]);
    const updateProducts = (products:ProductInt[]) => setProducts(products);
    useEffect(() => {
        //setProducts(myProducts);
        /*
        Fetch all bags products and pass them to the component
         */
    });
    return (
        <Products productName={props.productName}
                  products={products}
                 setProducts={updateProducts}/>
    );
};

export default Bags;