import React, {FormEvent, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ProductsKind from "../../Components/Products/ProductsKind/ProductsKind";
import Form from "../../Components/Form/Form";
import "./EditProduct.css";
import axios from "axios";
import {ProductInt} from "../../Shared/Interfaces/Product-int";


// const images = [
//     "https://ae01.alicdn.com/kf/HTB1kextPXXXXXXZXFXXq6xXFXXXy/200x300.jpg",
//     "https://ae01.alicdn.com/kf/HTB1kextPXXXXXXZXFXXq6xXFXXXy/200x300.jpg",
//     "https://ae01.alicdn.com/kf/HTB1kextPXXXXXXZXFXXq6xXFXXXy/200x300.jpg",
//     "https://ae01.alicdn.com/kf/HTB1kextPXXXXXXZXFXXq6xXFXXXy/200x300.jpg",
//     "https://cdn.wallpapersafari.com/32/0/Ku6C4G.jpg",
//     "https://cdn.wallpapersafari.com/32/0/Ku6C4G.jpg",
//     "https://cdn.wallpapersafari.com/32/0/Ku6C4G.jpg"];

interface Props {
    productType: string;
}

const EditProduct: React.FC<Props> = (props) => {

    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductInt>();

    const handleFormRequest = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("edit click");
    };

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data["product"])
            console.log(product?.images)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProduct()
    }, []);

    return (
        <div className="edit-product-page">
            <ProductsKind productName="עריכת מוצר"/>
            <div className="edit-product-container">
                <Form productType={props.productType}
                      images={product?.images}
                      method="UPDATE"/>
            </div>
        </div>
    );
};

export default EditProduct;