import { CartContext } from "../contexts/cart.context"
import { useContext } from "react"

import "./checkout-item.styles.scss"

const CheckoutItem = ({cartItem}) => {

    const {removeItemFromCart,clearItemFromCart, addItemToCart} = useContext(CartContext)
    const {name,imageUrl,price, quantity} = cartItem

    const clearItemHandler = () => {
        clearItemFromCart(cartItem)
    }
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}></img>
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
            <div  className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
               <span className="value">{quantity}</span> 
            <div className="arrow" onClick={() => addItemToCart(cartItem)}> &#10095;</div>
                </span>
            <span className="price">{price}</span>
            <br />
            <div onClick={clearItemHandler} className="remove-button"> &#10005; </div>
        </div>
    )
}

export default CheckoutItem