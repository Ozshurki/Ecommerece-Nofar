import {createContext} from "react";
import {ProductInt} from "../Interfaces/Product-int";

interface Modal{
    showModal: boolean;
    product: ProductInt | null;

    turnModalOff: () => void;
    turnModalOn: () => void;
    setModalProduct: (product: ProductInt) => void;
}

export const ModalContext = createContext<Modal | null>(null);