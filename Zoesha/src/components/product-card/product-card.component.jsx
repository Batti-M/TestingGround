import "./product-card.styles.scss"
import Button from "../button/button.component"
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const ProductCard = ({product}) => {

    const {name,price,imageUrl} = product;
    const {addItemToCart,cartItems} = useContext(CartContext)

    const addItem = () => {
        addItemToCart(product)
    }
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={addItem} buttonType="inverted">add to card</Button>
        </div>
    )
}

export default ProductCard