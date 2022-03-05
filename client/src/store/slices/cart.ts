import {ProductInt} from "../../Shared/Interfaces/Product-int";
import {createSlice} from "@reduxjs/toolkit";

export type CartItemType = {
    product: ProductInt;
    quantity: number;
    option: string;
}

type sliceState = {
    items: CartItemType[];
    totalQuantity: number;
    totalPrice: number;
}

const initialState: sliceState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
};

const calcTotalPrice = (items: CartItemType[]): number => {

    return items.reduce((total: number, item: CartItemType): number => {
        return total + (item.product.price * item.quantity);
    }, 0);
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem: CartItemType = action.payload;
            const existingProduct = state.items.find((existItem: CartItemType) => existItem.product.id === newItem.product.id);

            if (!existingProduct){
                state.items.push(
                    {
                        product: newItem.product,
                        quantity: newItem.quantity,
                        option: newItem.option
                    });
                state.totalQuantity++;
            }
            else
                existingProduct.quantity++;

            state.totalPrice = calcTotalPrice(state.items);
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const existingProduct = state.items.find(item => item.product.id === id);

            if(existingProduct?.quantity === 1){
                state.items = state.items.filter(item => item.product.id !== id);
                state.totalQuantity--;
            }
            else
                existingProduct!.quantity--;

            state.totalPrice = calcTotalPrice(state.items);
        },
        deleteItem(state,action){

            const id = action.payload;
            state.items = state.items.filter(item => item.product.id !== id);
            state.totalQuantity--;
            state.totalPrice = calcTotalPrice(state.items);
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;