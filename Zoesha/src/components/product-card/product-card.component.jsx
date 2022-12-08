import "./product-card.styles.scss"
import Button,{ BUTTON_TYPE_CLASSES } from "../button/button.component"
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector,useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";



const ProductCard = ({product}) => {

    const {name,price,imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addItem = () => {
       dispatch(addItemToCart(cartItems,product))
    }
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={addItem} buttonType={BUTTON_TYPE_CLASSES.inverted} >add to card</Button>
        </div>
    )
}

export default ProductCard