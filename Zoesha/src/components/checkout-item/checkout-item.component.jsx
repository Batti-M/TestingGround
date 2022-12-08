import { useDispatch, useSelector } from "react-redux"
import "./checkout-item.styles.scss"
import { selectCartItems } from "../../store/cart/cart.selector"
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action"

const CheckoutItem = ({cartItem}) => {

    
    const {name,imageUrl,price, quantity} = cartItem
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem)) 
    const addItemHandler = () =>  dispatch(addItemToCart(cartItems,cartItem)) 
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem)) 
    
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}></img>
            </div>

            <span className="name">{name}</span>
            <span className="quantity"></span>
            <div  className="arrow" onClick={removeItemHandler}>
                &#10094;
            </div>
               <span className="value">{quantity}</span> 
            <div className="arrow" onClick={addItemHandler}> </div>
            <span className="price">{price}</span>
            <br />
            <div onClick={clearItemHandler} className="remove-button"> &#10005; </div>
        </div>
    )
}

export default CheckoutItem