import React, {useState, useEffect} from "react";
import Products from "../../Components/Products/Products";
import {ProductInt} from "../../Shared/Interfaces/Product-int";
import axios from "axios";

interface Props {
    productName: string;
}

const Bags: React.FC<Props> = (props) => {

    const [products, setProducts] = useState<ProductInt[]>([]);
    const updateProducts = (products: ProductInt[]) => setProducts(products);

    const getBags = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/products/bags");
            const bags = response.data["bags"];
            setProducts(bags);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getBags();
    });
    return (
        <Products productName={props.productName}
                  products={products}
                  setProducts={updateProducts}/>
    );
};

export default Bags;