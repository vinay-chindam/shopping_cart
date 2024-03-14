import React, { useContext } from 'react'
import MyContext from '../MyContext'

export default function Total() {
  const {cartItems}=useContext(MyContext)
  console.log(cartItems)
  return (
    <div></div>
  )
}
