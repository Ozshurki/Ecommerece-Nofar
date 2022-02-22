import React from "react";
import "./RadioButtons.css";


interface Props{
    selectedRadioBtn: string;
    handleRadioClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const RadioButtons:React.FC<Props>= (props) => {

    const isRadioSelected = (value: string): boolean => props.selectedRadioBtn === value;

    return(
        <div className="radios-btn-container">
            <div className="radio-btn">
                <label htmlFor="paints">Paints</label>
                <input type="radio"
                       id="paints"
                       name="radio-btn"
                       value="paints"
                       checked={isRadioSelected("paints")}
                       onChange={props.handleRadioClick}/>
            </div>
            <div className="radio-btn">
                <label htmlFor="bags">Bags</label>
                <input type="radio"
                       id="bags"
                       name="radio-btn"
                       value="bags"
                       checked={isRadioSelected("bags")}
                       onChange={props.handleRadioClick}/>
            </div>
            <div className="radio-btn">
                <label htmlFor="courses">Courses</label>
                <input type="radio"
                       id="courses"
                       name="radio-btn"
                       value="courses"
                       checked={isRadioSelected("courses")}
                       onChange={props.handleRadioClick}/>
            </div>
        </div>
    )
}

export default RadioButtons;