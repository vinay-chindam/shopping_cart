import React, { useContext } from 'react';
import Product from '../components/Product';
import MyContext from '../MyContext';

const Home = () => {
  const { products } = useContext(MyContext);
  //console.log('printing in home', products);

  return (
    <div className='products'>
      {products.map(item => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
