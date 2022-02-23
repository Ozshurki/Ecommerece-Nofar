import React from "react";
import "../PaintOptions/PaintOptions.css"

interface Props {
    setOption: (option: string) => void;
    colors: string[];
}

const BagOptions: React.FC<Props> = ({setOption, colors}) => {
    return (
        <div className="options-container">
            <p>Choose color:</p>
            <div className="options-wrapper">
                {colors.map((color:string) => {
                    return(
                        <div className="option" onClick={() => setOption(color)}>{color}</div>
                    )
                })}
            </div>
        </div>
    );
};

export default BagOptions;