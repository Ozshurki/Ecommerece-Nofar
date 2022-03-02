import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

import PageType from "../../Components/ProductsType/PageType";
import {ProductInt} from "../../Shared/Interfaces/Product-int";
import Form from "../../Components/Form/Form";
import "../AddProduct/AddProduct.css";


const api = axios.create({
    baseURL: 'http://localhost:5000/api/admin/products'
});

interface Props {
    productType: string;
}

const EditProduct: React.FC<Props> = ({productType}) => {

    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductInt>();

    const formHandler = async (data:any) => {

        data["id"] = id;

        try {
            await api.put('/', data);
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
            <PageType productType="Edit product"/>
            <div className="form-product-container">
                <Link to='/admin' className="home-link">Go back</Link>
                <Form productType={productType}
                      product={product}
                      images={product?.images}
                      formHandler={formHandler}/>
            </div>
        </div>
    );
};

export default EditProduct;