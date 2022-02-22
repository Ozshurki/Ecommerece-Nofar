import {createContext} from "react";
import {ProductInt} from "../Interfaces/Product-int";

interface Product{
    product: ProductInt | null;
    setProductDetails: (product: ProductInt) => void;
}

export const ProductContext = createContext<Product | null>(null);