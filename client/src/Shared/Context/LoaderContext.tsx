import {createContext} from "react";

interface LoaderInt{
    isLoader: boolean;
    toggleLoader: () => void;
}

export const LoaderContext = createContext<LoaderInt | null>(null);