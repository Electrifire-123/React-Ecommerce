import React from "react";
import { useState, useContext } from "react";
import productsdata  from "./product_lists.json";

const ProductsContext = React.createContext();

export const ProductsContextProvider = ({children})=>{
    const [products, setProducts] = useState(productsdata)
    return(
        <ProductsContext.Provider value={{products, setProducts}} >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContextConsumer = () => {
    return useContext(ProductsContext);
}