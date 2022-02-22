import React, {useState} from "react";
import {Link} from "react-router-dom";
import PaintsPanel from "./PaintsPanel/PaintsPanel";
import BagsPanel from "./BagsPanel/BagsPanel";
import CoursesPanel from "./CoursesPanel/CoursesPanel";
import SideBar from "../SideBar/SideBar";
import "./Panel.css";


const Panel: React.FC = () => {

    const [selectedProduct, setSelectedProduct] = useState<string>("paints");

    const handleProductClick = (product:string): void => setSelectedProduct(product);

    return (
        <React.Fragment>
            <SideBar handleProductClick={handleProductClick}/>

            <div className="panel-container">
                {selectedProduct === "paints" && <PaintsPanel/>}
                {selectedProduct === "bags" && <BagsPanel/>}
                {selectedProduct === "courses" && <CoursesPanel/>}
            </div>
        </React.Fragment>
    );
};

export default Panel;