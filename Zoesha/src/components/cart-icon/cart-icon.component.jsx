import {CartIconContainer,ShoppingIcons,ItemCount} from "./cart-icon.styles.jsx"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import { CartContext } from "../contexts/cart.context"


const CartIcon = () => {
    const {isCartOpen,setIsCartOpen, cartCount} = useContext(CartContext)
   
    const toggleDropdown = () => {
        setIsCartOpen(!isCartOpen)
    }
   
    return(
        <CartIconContainer>
        
                <ShoppingIcons onClick={toggleDropdown} />

            <ItemCount> {cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon