import { useContext } from 'react';
import MyContext from '../MyContext';



const CartItem = ({item}) => {
  //console.log(`I am pringint 333 in ${item}`)

  const {products,setProducts,addToCartHandler,removeFromCartHandler,cartItems,itemCount}=useContext(MyContext)
  //console.log('printing in cart items',cartItems)
  return (
    <div className='product abc cart-product'> 
    <div className='flex-container cart-product'>
<h1 className='start title'>{item.title}</h1>
</div>

<div>
<p className="sub-title">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
</div>
<div className='figure'>

<img className='figure' src={item.image} alt="Product Image" />

</div>

<div className='price-button'>
<div className='price-up'>
<p>{ `$:${item.price}`}</p>

</div>
<div className='price-button2'>
<button onClick={removeFromCartHandler}>Remove from cart</button>

</div>



</div>


</div>
    
  

  )
};

export default CartItem;
