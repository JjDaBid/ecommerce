// 

import { Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import ProductDetails from './pages/product/[productId]/ProductDetails';
import { products } from "./utils/products";
import CartProvider from './providers/CartProvider';
import Cart from './cart/page';
import { Toaster } from 'react-hot-toast';
import AdminNav from './components/admin/AdminNav';

function App() {

  function ProductDetailsWrapper() {
    const { productId } = useParams();
    const product = products.find((item) => item.id === productId);
    
    if (!product) {
      return <div>Producto no encontrado</div>;
    }
  
    return <ProductDetails product={product} />;
  }

  return ( 
    <CartProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Toaster toastOptions={{
            style:{
              background: 'rgb(51 65 85)',
              color: '#fff'
            }
          }}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetailsWrapper />} />    
            <Route path="/cart" element={<Cart />} />    
            <Route path="/admin" element={<AdminNav />} />  
            
          </Routes>          
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}


export default App;
