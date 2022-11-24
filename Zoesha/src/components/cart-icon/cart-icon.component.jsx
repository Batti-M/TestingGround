import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import { CartContext } from "../contexts/cart.context"


const CartIcon = () => {
    const {isCartOpen,setIsCartOpen, cartCount} = useContext(CartContext)
    console.log(cartCount)
    const toggleDropdown = () => {
        setIsCartOpen(!isCartOpen)
    }
   
    return(
        <div className="cart-icon-container">
            <ShoppingIcon onClick={toggleDropdown} className="shopping-icon"/>
            <span className="item-count"> {cartCount}</span>
        </div>
    )
}

export default CartIcon