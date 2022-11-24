import { createContext } from "react";
import { useContext, useState } from "react";

import SHOP_DATA from "../../shop-data.json";

export const ProductsContext = createContext({
    products:[],
})

const ProductProvider = ({children}) => {
    const [allProducts,setAllProducts] = useState(SHOP_DATA)
    const value = {allProducts}
    return(
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductProvider}