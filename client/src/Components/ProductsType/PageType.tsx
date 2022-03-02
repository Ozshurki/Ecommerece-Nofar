import React from "react";
import './PageType.css';


interface Props {
    productType: string;
}

const PageType: React.FC<Props> = (props) => {


    return (
        <div className="products-type-container">
            <div className="products-type-content">
                {props.productType}
            </div>
        </div>
    );
};

export default PageType;