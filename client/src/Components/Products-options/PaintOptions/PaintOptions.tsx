import React, {useState, MouseEvent} from "react";
import "./PaintOptions.css";
import classNames from "classnames";

interface Props {
    setOption: (option: string) => void;
    sizes: string[];
}

const PaintOptions: React.FC<Props> = ({setOption, sizes}) => {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const handleOptionClick = (option: string, index: number) => {
        setOption(option);
        setSelectedIndex(index);
    };

    return (
        <div className="options-container">
            <p>Choose size:</p>
            <div className="options-wrapper">
                {sizes.map((size: string, i: number) => {
                    return (
                        <div className={classNames(i === selectedIndex ? "selected-option" : "option")}
                             onClick={() => handleOptionClick(size, i)}
                             key={i}>
                            {size}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PaintOptions;