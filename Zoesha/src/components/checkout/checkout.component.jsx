import { useContext } from "react"
import { CartContext } from "../contexts/cart.context"
import CheckoutItem from "../checkout-item/checkout-item.component" 

import {CheckoutContainer,CheckoutItems,CheckoutHeader,Total,HeaderBlock} from "./checkout.styles.jsx"

const Checkout = () => {

    const {cartItems,cartTotal} = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            <div>
            {
                cartItems.map( item => <CheckoutItem key={item.id} cartItem={item} />)
            }
            
              
            </div>
            <Total>Total: {cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default Checkout