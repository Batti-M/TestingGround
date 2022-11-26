import ProductCard from "../product-card/product-card.component"
import {CategoryPreviewContainer,Title,Preview} from "./category-preview.styles.jsx"
import { Link } from "react-router-dom"
const CategoryPreview = ({title, products}) => {
    return(
        <CategoryPreviewContainer>
          
                <Title as="h2" to={`${title}`}>{title.toUpperCase()}</Title>
      
        <Preview>
            {
                products
                .filter((_,idx) => idx < 4)
                .map(product => <ProductCard key={product.id} product={product} />
                )
            }
        </Preview>
        </CategoryPreviewContainer>
    )
}
export default CategoryPreview