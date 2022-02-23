import React, {useState} from "react";
import "./ManagementPanel.css";
import Panel from "../../Components/Panel/Panel";
import SideBar from "../../Components/SideBar/SideBar";


const ManagementPanel: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<string>("paints");
    const handleProductClick = (product:string): void => setSelectedProduct(product);

    return (
        <React.Fragment>
            <div className="management-panel">
                <SideBar handleProductClick={handleProductClick}/>
                <div className="panel-content">
                    <Panel selectedProduct={selectedProduct}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ManagementPanel;