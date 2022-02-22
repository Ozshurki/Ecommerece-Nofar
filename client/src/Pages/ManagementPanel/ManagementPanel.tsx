import React from "react";
import "./ManagementPanel.css";
import Panel from "../../Components/Panel/Panel";
import ProductsKind from "../../Components/Products/ProductsKind/ProductsKind";


const ManagementPanel: React.FC = () => {
    return (
        <React.Fragment>
            <div className="management-panel">
                <ProductsKind productName="מערכת ניהול"/>
                <Panel/>
            </div>
        </React.Fragment>
    );
};

export default ManagementPanel;