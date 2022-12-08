import { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import "./shop.styles.scss"
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";


const Shop = () => {

    const dispatch = useDispatch() 
     // dispatch is a function that takes an action object and sends it to the reducer

     useEffect(() => {
        const getCategoriesMap = async () => {
          const categoriesArray = await getCategoriesAndDocuments('categories');
          dispatch(setCategories(categoriesArray));
        };
    
        getCategoriesMap();
      }, []);
   
    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} /> 
        </Routes>
        
        )
    }
    
    export default Shop;
  