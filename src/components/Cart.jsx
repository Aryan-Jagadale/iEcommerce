import React, { useContext,useState,useEffect } from 'react'
import CartContext from '../context/Context'

const Cart = () => {
  const [{cart},dispatch] = useContext(CartContext)

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div>Cart</div>
  )
}

export default Cart