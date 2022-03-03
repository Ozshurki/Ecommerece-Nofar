import {ProductInt} from "../Shared/Interfaces/Product-int";

export const sortProducts = (products:ProductInt[],sortMethod: string) => {

    const sortedProducts = [...products];

    if (sortMethod === "low-to-high") {
        sortedProducts.sort((a: ProductInt, b: ProductInt): number => {
            return (a.price - b.price);
        });
    } else if (sortMethod === "high-to-low") {
        sortedProducts.sort((a: ProductInt, b: ProductInt): number => {
            return (b.price - a.price);
        });
    }

    return sortedProducts;
};