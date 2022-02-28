import React from "react";
import './PageType.css';


interface Props {
    productName: string;
}

const PageType: React.FC<Props> = (props) => {


    return (
        <div className="products-type-container">
            <div className="products-type-content">
                {props.productName}
            </div>
        </div>
    );
};

export default PageType;