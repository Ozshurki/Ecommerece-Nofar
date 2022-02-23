import React, {FormEvent, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ProductsKind from "../../Components/Products/ProductsKind/ProductsKind";
import Form from "../../Components/Form/Form";
import "./EditProduct.css";
import axios from "axios";
import {ProductInt} from "../../Shared/Interfaces/Product-int";

const api = axios.create({
    baseURL: 'http://localhost:5000/api/admin/products'
});

interface Props {
    productType: string;
}

const EditProduct: React.FC<Props> = (props) => {

    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductInt>();

    const formHandler = async (data:any) => {

        data["id"] = id;
        try {
            const res = await api.put('/', data);

        } catch (err) {
            console.log(err);
        }
    };

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data["product"]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    return (
        <div className="edit-product-page">
            <ProductsKind productName="עריכת מוצר"/>
            <div className="edit-product-container">
                <Form productType={props.productType}
                      images={product?.images}
                      formHandler={formHandler}/>
            </div>
        </div>
    );
};

export default EditProduct;