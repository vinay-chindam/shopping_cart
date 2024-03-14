


import { BrowserRouter, Route,Routes} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useEffect,useState } from "react";
import MyContext from "./MyContext";
import Total from './components/Total';

import { Link } from "react-router-dom";
const App = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cost,setCost]=useState(0)
  const [itemCount,setItemCount]=useState(0)
  const [cartCount,setCartCount]=useState(0)


  useEffect(() => {
    setCost(cartItems.reduce((acc, curr) => acc + curr.price, 0));
  }, [cartItems]);
  useEffect(() => {
    setItemCount(cartItems.reduce((acc, curr) => acc + 1, 0));
  }, [cartItems]);

  useEffect(() => {
    setCartCount(cartItems.reduce((acc, curr) => acc + 1, 0));
  }, [cartItems]);

  const addToCartHandler = (item) => {
    
    setCartItems(prevCartItems => [...prevCartItems, item]);
    
    
    
  };
  
  const removeFromCartHandler = (item) => {
    
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
    const totalcost = cartItems.reduce((total, item) => total - item.price, 0);
    setCost(totalcost)
  };
  
  
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
          console.log("printing in app",products)
        setProducts(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    
  }, []);
  return (
    <BrowserRouter>
      <MyContext.Provider value={{ products, setProducts, cartItems, setCartItems, addToCartHandler ,removeFromCartHandler,cost,setCost,itemCount,setItemCount,cartCount,setCartCount}}>
        <div className="bg-slate-900">
          <Navbar  />
        </div>

        <div className='below-navbar' >
          
          <Link to="/home"></Link>
          <Link to="/cart"></Link>
        </div>
        <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        

        </Routes>
        

        
        
      </MyContext.Provider>
    </BrowserRouter>
   
  )
};

export default App;
