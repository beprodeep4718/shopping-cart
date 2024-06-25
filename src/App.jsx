import { useState } from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        isPresent = true;
      }
    });
    if (!isPresent) {
      setCart([...cart, item]);
    } else {
      setCart(cart.filter((cartItem) => cartItem.id!== item.id));
    }
  };
  return (
    <div>
      <Navbar size={cart.length} />
      <Shop handleClick={handleClick} isPresent={cart}/>
    </div>
  );
};

export default App;
