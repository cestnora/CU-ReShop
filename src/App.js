import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Browse from './Pages/Browse';
import Messages from './Pages/Messages';
import Listing from './Pages/Listing';
import Wishlist from './Pages/Wishlist';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Browse/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/listing' element={<Listing/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
