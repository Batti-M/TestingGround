
import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";

import SHOP_DATA from "../../shop-data.js";

export const CategoriesContext = createContext({
    categoriesMap:[],
})

const CategoriesProvider = ({children}) => {
    const [categoriesMap,setCategoriesMap] = useState({})
    const value = {categoriesMap}

    useEffect( () => {
        const getCategoriesMap = async() => {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap)
    }
    getCategoriesMap();
    },[])
   
    return(
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}

export { CategoriesProvider}