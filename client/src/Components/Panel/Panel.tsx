import React, {useState} from "react";
import {Link} from "react-router-dom";
import PaintsPanel from "./PaintsPanel/PaintsPanel";
import BagsPanel from "./BagsPanel/BagsPanel";
import CoursesPanel from "./CoursesPanel/CoursesPanel";
import SideBar from "../SideBar/SideBar";
import "./Panel.css";
import PageType from "../ProductsKind/PageType";


interface Props{
    selectedProduct: string;
}

const Panel: React.FC<Props>= ({selectedProduct}) => {





    return (
        <React.Fragment>
            <PageType productName="Management panel"/>
            <div className="panel-container">
                {selectedProduct === "paints" && <PaintsPanel/>}
                {selectedProduct === "bags" && <BagsPanel/>}
                {selectedProduct === "courses" && <CoursesPanel/>}
            </div>
        </React.Fragment>
    );
};

export default Panel;