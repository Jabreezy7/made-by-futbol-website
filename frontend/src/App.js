import './App.css';
import { Navbar } from './Components/Navbar/navBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Info from './Pages/Info';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/shop' element={<Shop/>}/>
        <Route path = '/info' element={<Info/>}/>
        <Route path = '/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
