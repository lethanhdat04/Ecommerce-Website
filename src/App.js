import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetail from "./customer/components/Order/OrderDetail";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
        
      <div>
        
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
