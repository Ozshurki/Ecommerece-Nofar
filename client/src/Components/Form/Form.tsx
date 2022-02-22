import React, {FormEvent, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AiOutlineCloseCircle} from "react-icons/ai";
import "./Form.css";
import axios from "axios";

interface Props {
    images?: string[];
    productType: string;
    method: string;
}

const api = axios.create({
    baseURL: 'http://localhost:5000/api/admin/products'
});

const Form: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    const inputTitleRef = useRef<HTMLInputElement>(null);
    const inputDescriptionRef = useRef<HTMLTextAreaElement>(null);
    const inputPriceRef = useRef<HTMLInputElement>(null);
    const inputPhotoRef = useRef<HTMLInputElement>(null);
    const inputSizeRef = useRef<HTMLInputElement>(null);
    const inputColorRef = useRef<HTMLInputElement>(null);

    const [images, setImages] = useState<string[]>(props?.images ?? []);
    const [sizes, setSizes] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);


    const savePhotoHandler = () => {

        if (inputPhotoRef.current === null) return;

        const newImage = inputPhotoRef.current.value;

        // UPDATE request
        const newPhotosArr = [...images, newImage];
        setImages(newPhotosArr);
        inputPhotoRef.current.value = "";
    };

    const deleteHandler = async (itemsArr: string[], item: string, type: string) => {

        const newArr = [...itemsArr];
        const wantedIndex = newArr.indexOf(item);

        if (wantedIndex !== -1) {
            newArr.splice(wantedIndex, 1);
            if (type === "paints") setSizes(newArr);
            if (type === "photos") setImages(newArr);
        }
        // Send DELETE request to the server with image
    };

    const paintsOptionHandler = () => {

        if (inputSizeRef.current === null)
            return;

        const newSize = inputSizeRef.current.value;
        const newSizeArr = [...sizes, newSize];
        setSizes(newSizeArr);
        inputSizeRef.current.value = "";
    };

    const bagsOptionHandler = () => {

        if (inputColorRef.current === null)
            return;

        const newColor = inputColorRef.current.value;
        const newColorArr = [...colors, newColor];
        setColors(newColorArr);

        inputColorRef.current.value = "";
    };

    const paintOptions = <div className="option-wrapper">
        <label htmlFor="form-option">:הזן גדלים אפשריים</label>
        <input type="text"
               ref={inputSizeRef}
               id="form-option"/>
        <div className="save-btn" onClick={paintsOptionHandler}>שמור גודל</div>
        <div className="saved-options">
            <ul>
                {sizes.map((size: string) => {
                    return (
                        <li key={size}>
                                <span>
                                        <AiOutlineCloseCircle
                                            className="delete-photo-btn"
                                            color="black"
                                            size="1.2rem"
                                            onClick={() => deleteHandler(sizes, size, "paints")}/>
                                </span>
                            <div className="option-item">{size}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>;

    const bagOptions = <div className="option-wrapper">
        <label htmlFor="form-option">:הזן צבעים אפשריים</label>
        <input type="text"
               ref={inputColorRef}
               required
               id="form-option"/>
        <div className="save-btn" onClick={bagsOptionHandler}>שמור צבע</div>
    </div>;

    const formHandler = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            title: inputTitleRef.current!.value,
            description: inputDescriptionRef.current!.value,
            price: inputPriceRef.current!.value,
            type: props.productType,
            images: images,
            sizes: sizes,
            colors: colors
        };

        try {
            const res = await api.post('/', data);
            console.log(res);

        } catch (err) {
            console.log(err);
        }

        navigate('/admin');
    };


    return (
        <>
            <form className="product-form" onSubmit={formHandler}>
                <div className="title-wrapper item">
                    <label htmlFor="form-title">:כותרת</label>
                    <input type="text"
                           ref={inputTitleRef}
                           className="form-title"
                           id="form-title"/>
                </div>
                <div className="description-wrapper item">
                    <label htmlFor="form-description">:תיאור</label>
                    <textarea className="form-description"
                              ref={inputDescriptionRef}
                              id="form-description"/>
                </div>
                <div className="price-wrapper item">
                    <label htmlFor="form-price">:מחיר</label>
                    <input type="number"
                           ref={inputPriceRef}
                           className="form-price"
                           id="form-price"/>
                </div>
                <div className="form-photos-container">
                    <label className="form-add-photo" htmlFor="save-photo">:הוסף תמונה</label>
                    <input type="text"
                           className="save-photo"
                           id="save-photo"
                           ref={inputPhotoRef}/>
                    <div className="save-btn" onClick={savePhotoHandler}>שמור תמונה</div>
                </div>
                {props.productType === "paint" && paintOptions}
                {props.productType === "bag" && bagOptions}
                <button type="submit">שמור מוצר</button>
            </form>
            <div className="added-photos">
                <ul>
                    {images?.map((image) => {
                        return (
                            <li key={image}>
                                <span>
                                        <AiOutlineCloseCircle
                                            className="delete-photo-btn"
                                            color="black"
                                            size="1.2rem"
                                            onClick={() => deleteHandler(images, image, "photos")}/>
                                </span>
                                <a href={image}
                                   target="_blank">
                                    <img src={image}
                                         alt="image"
                                         className="form-img"/>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Form;