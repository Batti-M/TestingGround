import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import "./categories-preview.styles.scss"
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
   const categoriesMap = useSelector(selectCategoriesMap)
    
    return(
        <div className="category-preview-container">
        {
            Object.keys(categoriesMap).map( title =>{
                const products = categoriesMap[title];
                return <CategoryPreview 
                key={title} 
                products={products}
                title={title}
                />
            
            } ) 
       }
            
          
        </div>
    )
}

export default CategoriesPreview;