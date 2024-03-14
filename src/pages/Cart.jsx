
import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import MyContext from '../MyContext';

const Cart = () => {
  const { cartItems,cost,setCost } = useContext(MyContext);
  
  console.log('printing in cart', cartItems);
  return (
    <div>
        <div>
        <h3> welcome to cart page</h3>
    </div>
    <div className='cost'>

    {cost}
    </div>



    <div className='products-cart'>
      
    {cartItems.map((item,index) => (
      <CartItem key={index} item={item} />
    ))}


  </div>

  

        


    </div>

    

  )
};

export default Cart;
