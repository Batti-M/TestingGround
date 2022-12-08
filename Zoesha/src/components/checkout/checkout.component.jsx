import { useSelector } from "react-redux"
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector"

import CheckoutItem from "../checkout-item/checkout-item.component" 

import {CheckoutContainer,CheckoutItems,CheckoutHeader,Total,HeaderBlock} from "./checkout.styles.jsx"

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

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