import React, {useState} from "react";
import "../PaintOptions/PaintOptions.css"
import classNames from "classnames";

interface Props {
    setOption: (option: string) => void;
    colors: string[];
}

const BagOptions: React.FC<Props> = ({setOption, colors}) => {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const handleOptionClick = (option: string, index: number) => {
        setOption(option);
        setSelectedIndex(index);
    };

    return (
        <div className="options-container">
            <p>Choose color:</p>
            <div className="options-wrapper">
                {colors.map((color:string, i:number) => {
                    return(
                        <div className={classNames(i === selectedIndex ? "selected-option" : "option")}
                             onClick={() => handleOptionClick(color, i)}>
                            {color}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default BagOptions;