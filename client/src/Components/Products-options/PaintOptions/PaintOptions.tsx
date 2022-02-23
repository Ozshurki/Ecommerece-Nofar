import React, {useState, MouseEvent} from "react";
import "./PaintOptions.css";
import classNames from "classnames";

interface Props {
    setOption: (option: string) => void;
    sizes: string[];
}

const PaintOptions: React.FC<Props> = ({setOption, sizes}) => {

    const handleOptionClick = (option: string, event:MouseEvent<HTMLDivElement>) => {
        setOption(option);
        event.currentTarget.classList.add("option-selected")
    };

    return (
        <div className="options-container">
            <p>Choose size:</p>
            <div className="options-wrapper">
                {sizes.map((size: string) => {
                    return (
                        <div className="option"
                             onClick={(event:MouseEvent<HTMLDivElement>) => handleOptionClick(size, event)}>{size}</div>
                    );
                })}
            </div>
        </div>
    );
};

export default PaintOptions;