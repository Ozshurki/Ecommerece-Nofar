import React, {FormEvent} from "react";
import ProductsKind from "../../Components/Products/ProductsKind/ProductsKind";
import Form from "../../Components/Form/Form";
import "./AddProduct.css";
import {ProductInt} from "../../Shared/Interfaces/Product-int";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/api/admin/products'
});

interface Props {
    productType: string;
}

const AddProduct: React.FC<Props> = (props) => {


    const formHandler = async (data: any) => {
        try {
            const res = await api.post('/', data);

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="add-product-page">
            <ProductsKind productName="הוספת מוצר"/>
            <div className="add-product-container">
                <Form productType={props.productType}
                      images={[]}
                      formHandler={formHandler}/>
            </div>
        </div>
    );
};

export default AddProduct;