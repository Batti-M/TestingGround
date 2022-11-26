import { useContext } from "react";
import { CategoriesContext } from "../../components/contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./categories-preview.styles.scss"
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    
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