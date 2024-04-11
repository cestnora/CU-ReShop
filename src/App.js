import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Browse from './Pages/Browse';
import Messages from './Pages/Messages';
import Listing from './Pages/Listing';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products';
import Profile from './Pages/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Browse/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/listing' element={<Listing/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
