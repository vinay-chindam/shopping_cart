
import { useContext } from 'react';
import MyContext from '../MyContext';

const Product = ({item}) => {
  const {products,setProducts,setCartItems,addToCartHandler,
    cartItems,removeFromCartHandler}=useContext(MyContext)

  
  //console.log(`i am in product`);
  

  const buttonLabel = cartItems.find(cartItem => cartItem.id === item.id)
    ? 'Remove from Cart'
    : 'Add to Cart';

    const onClickHandler = buttonLabel === 'Add to Cart' ? () => addToCartHandler(item) : () => removeFromCartHandler(item);
  return (
    <div className='product abc'> 
              <div className='flex-container'>
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
          <button onClick={onClickHandler}>{buttonLabel}</button>

          </div>
        
        

        </div>
        

  </div>
  );
};

export default Product;
