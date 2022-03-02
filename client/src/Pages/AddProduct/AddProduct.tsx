import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


import PageType from "../../Components/ProductsType/PageType";
import Form from "../../Components/Form/Form";
import "./AddProduct.css";

const api = axios.create({
    baseURL: 'http://localhost:5000/api/admin/products'
});

interface Props {
    productType: string;
}

const AddProduct: React.FC<Props> = (props) => {


    const formHandler = async (data: any) => {
        try {
            await api.post('/', data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="add-product-page">
            <PageType productType="Add product"/>
            <div className="form-product-container">
                <Link to='/admin' className="home-link">Go back</Link>
                <Form productType={props.productType}
                      formHandler={formHandler}/>
            </div>
        </div>
    );
};

export default AddProduct;