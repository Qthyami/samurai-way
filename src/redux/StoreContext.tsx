import {createContext, ReactNode} from "react";
import {StoreType} from "./store";
import store from "./redux-store";

export type StoreContextType = {
    store: StoreType;
};

export const StoreContext = createContext<StoreContextType | null>(null);

type ProviderPropsType = {

    children: ReactNode; // Обратите внимание, что мы используем ReactNode для указания дочерних элементов
};

export const Provider = (props:ProviderPropsType)=>{
    return <StoreContext.Provider value={{store}}>
    {props.children}
    </StoreContext.Provider>
}