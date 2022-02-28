import ProductsCategories from './pages/ProductsCategories';
import Home from './pages/Home';
//import ProductList from './pages/ProductsCategories';
import Register from './pages/Register';
import Login from './pages/Login/Login';
//import Cart from './pages/Cart';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home />}>Home</Route>
     <Route path="/products" element={<ProductsCategories />}>Products</Route>
     <Route path="/register" element={<Register />}>Register</Route>
     <Route path="/login" element={<Login />}>Login</Route>
    </Routes>
  
    </>
  );
}

export default App;
