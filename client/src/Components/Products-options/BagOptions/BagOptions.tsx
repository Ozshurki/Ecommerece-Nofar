import React from "react";
import "./BagOptions.css";

interface Props {
    setOption: (option: string) => void;
}

const BagOptions: React.FC<Props> = ({setOption}) => {
    return (
        <div className="bags-options-container">
            <p>:בחר צבע</p>
            <div className="options-wrapper">
                <div className="red-option option"
                     onClick={() => setOption("red")}/>

                <div className="black-option option"
                     onClick={() => setOption("black")}/>

                <div className="green-option option"
                     onClick={() => setOption("green")}/>
            </div>
        </div>
    );
};

export default BagOptions;