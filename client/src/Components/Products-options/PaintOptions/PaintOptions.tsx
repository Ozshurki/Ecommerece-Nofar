import React, {useState} from "react";
import "./PaintOptions.css";

interface Props {
    setOption: (option: string) => void;
}

const PaintOptions: React.FC<Props> = ({setOption}) => {

    const [selectedRadioBtn, setSelectedRadioBtn] = useState<string>("radio1");

    const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;

    const handleRadioClick = (btn: string, value: string): void => {
        setSelectedRadioBtn(btn);
        setOption(value);
    };

    return (
        <div className="paints-options-container">
            <p>:בחר גודל</p>
            <div className="options-wrapper">
                <div className="sm-option option">
                    <input type="radio"
                           name="radio-btn"
                           id="small"
                           value="small"
                           checked={isRadioSelected('radio1')}
                           onChange={() => handleRadioClick("radio1", "small")}/>
                    <label htmlFor="small">Small</label>
                </div>
                <div className="md-option option">
                    <input type="radio"
                           name="radio-btn"
                           id="medium"
                           value="medium"
                           checked={isRadioSelected('radio2')}
                           onChange={() => handleRadioClick("radio2", "medium")}/>
                    <label htmlFor="medium">Medium</label>
                </div>
                <div className="lg-option option">
                    <input type="radio"
                           name="radio-btn"
                           id="large"
                           value="large"
                           checked={isRadioSelected('radio3')}
                           onChange={() => handleRadioClick("radio3", "large")}/>
                    <label htmlFor="large">Large</label>
                </div>
            </div>
        </div>
    );
};

export default PaintOptions;