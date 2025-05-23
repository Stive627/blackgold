import React from 'react'
import { useCart } from '../../context/CartContext'
import { useRouter } from 'next/navigation'

function CartIcon({title = true}) {
    const {cart} = useCart()
    const items = cart.items
    const bgRouter = useRouter()
    return (
    <div  onClick={() => bgRouter.push('/cart')} className=' relative w-8'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
        <button style={{backgroundColor:items.length >0 ? 'oklch(0.505 0.213 27.518)':'transparent', color:items.length >0? 'white':'transparent'}} className=' absolute w-5 h-5  -top-1 right-0 bg-red-700 rounded-full '>{cart.items.length}</button>
        {title && <p>Cart</p>}
    </div>
  )
}

export default CartIcon
