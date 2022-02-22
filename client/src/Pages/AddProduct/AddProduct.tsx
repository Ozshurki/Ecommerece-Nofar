import React, {FormEvent} from "react";
import ProductsKind from "../../Components/Products/ProductsKind/ProductsKind";
import Form from "../../Components/Form/Form";
import "./AddProduct.css";

interface Props {
    productType: string;
}

const AddProduct: React.FC<Props> = (props) => {


    const handleFormRequest = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("add click");
    };

    return (
        <div className="add-product-page">
            <ProductsKind productName="הוספת מוצר"/>
            <div className="add-product-container">
                <Form productType={props.productType}
                      images={[]}
                      method="POST"/>
            </div>
        </div>
    );
};

export default AddProduct;