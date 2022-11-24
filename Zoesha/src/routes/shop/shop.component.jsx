import { useContext } from "react";
import { ProductsContext } from "../../components/contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss"

const Shop = () => {
    const {allProducts} = useContext(ProductsContext)
    
    return(
        <div className="products-container">
          {  allProducts.map((product,id) => (
                <ProductCard key={id} product={product}/>
            ))}
        </div>
    )
}

export default Shop;