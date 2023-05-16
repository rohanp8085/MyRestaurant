
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Menu from "./Pages/Menu"
import Pagenotfound from "./Pages/Pagenotfound"
import Navbar from "./components/Navbar"
import Cart from "./Pages/Cart"
import { CartProvider } from "./Context/CartContext"
import CartContainer from "./components/cartContainer"







function App() {

  return (
    <>
    
    <Router>
      <CartProvider>

      
    <Navbar/>

      <Routes>
        
     <Route path="/" element={<Home />}/>
     <Route path="about" element={<About/>}/>
     <Route path="contact" element={<Contact/>}/>
     <Route path="menu" element={<Menu/>}/>
     <Route path="*" element={<Pagenotfound/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="*" element={<Pagenotfound/>}/>


      </Routes>
      <CartContainer/>
      </CartProvider>
    </Router>
   
    </>
  )
}

export default App
