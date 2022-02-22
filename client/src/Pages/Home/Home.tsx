import React from "react";
import Video from "../../Components/Video/Video";
import ProductsBanner from "../../Components/ProductsBanner/ProductsBanner";
import ProductArea from "../../Components/ProductArea/ProductArea";
import './Home.css';

const Home: React.FC = () => {

    return (
        <div className="content-container">
            <div className="content">
                <Video urlVideo="sample-mp4-file-small.mp4" width="100%" height="300"/>
                <ProductsBanner/>
                <ProductArea/>
            </div>
        </div>
    );
};

export default Home;