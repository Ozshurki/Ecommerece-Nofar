import React, {FormEvent, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AiOutlineCloseCircle} from "react-icons/ai";


import "./Form.css";
import {ProductInt} from "../../Shared/Interfaces/Product-int";

interface Props {
    images?: string[];
    productType: string;
    formHandler: (data: any) => void;
    product?: ProductInt;
}


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

    // Function gets any array of string and the wanted item to delete

    const deleteHandler = async (items: string[], wantedItem: string, type: string) => {

        const newItems = items.filter((item: string) => item !== wantedItem);

        if (type === "paints") setSizes(newItems);
        if (type === "photos") setImages(newItems);
    };


    // Paints handler

    const paintsOptionHandler = () => {

        if (inputSizeRef.current === null)
            return;

        const newSize = inputSizeRef.current.value;
        const newSizeArr = [...sizes, newSize];
        setSizes(newSizeArr);
        inputSizeRef.current.value = "";
    };

    // Bags handler

    const bagsOptionHandler = () => {

        if (inputColorRef.current === null)
            return;

        const newColor = inputColorRef.current.value;
        const newColorArr = [...colors, newColor];
        setColors(newColorArr);

        inputColorRef.current.value = "";
    };

    // Options for paint product

    const paintOptions = <div className="option-wrapper item">
        <label htmlFor="form-option">Enter possible sizes:</label>
        <input type="text"
               ref={inputSizeRef}
               id="form-option"/>
        <div className="save-btn" onClick={paintsOptionHandler}>Save size</div>
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


    // Options for bag product

    const bagOptions = <div className="option-wrapper item">
        <label htmlFor="form-option">Enter possible colors:</label>
        <input type="text"
               ref={inputColorRef}
               id="form-option"/>
        <div className="save-btn" onClick={bagsOptionHandler}>Save color</div>
        <div className="saved-options">
            <ul>
                {colors.map((color: string) => {
                    return (
                        <li key={color}>
                                <span>
                                        <AiOutlineCloseCircle
                                            className="delete-photo-btn"
                                            color="black"
                                            size="1.2rem"
                                            onClick={() => deleteHandler(colors, color, "paints")}/>
                                </span>
                            <div className="option-item">{color}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>;


    // Generic form handler
    const formHandler = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            title: inputTitleRef.current!.value,
            description: inputDescriptionRef.current!.value,
            price: parseInt(inputPriceRef.current!.value),
            type: props.productType,
            images: images,
            sizes: sizes,
            colors: colors
        };

        props.formHandler(data);
        navigate('/admin');
    };


    useEffect(() => {
        console.log(images);
    }, []);

    return (
        <>
            <form className="product-form" onSubmit={formHandler}>
                <div className="title-wrapper item">
                    <label htmlFor="form-title">Title:</label>
                    <input type="text"
                           ref={inputTitleRef}
                           className="form-title"
                           id="form-title"
                           placeholder={props.product?.title}/>
                </div>
                <div className="description-wrapper item">
                    <label htmlFor="form-description">Description:</label>
                    <textarea className="form-description"
                              ref={inputDescriptionRef}
                              id="form-description"
                              placeholder={props.product?.description}/>
                </div>
                <div className="price-wrapper item">
                    <label htmlFor="form-price">Price:</label>
                    <input type="number"
                           ref={inputPriceRef}
                           className="form-price"
                           id="form-price"
                           placeholder={props.product?.price.toString()}
                    />
                </div>
                <div className="form-photos-container item">
                    <label className="form-add-photo" htmlFor="save-photo">Add image URL:</label>
                    <input type="text"
                           className="save-photo"
                           id="save-photo"
                           ref={inputPhotoRef}/>
                    <div className="save-btn" onClick={savePhotoHandler}>Save image</div>
                </div>
                {props.productType === "paint" && paintOptions}
                {props.productType === "bag" && bagOptions}
                <button type="submit" className="save-product">Save product</button>
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