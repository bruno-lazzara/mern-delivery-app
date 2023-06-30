import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home/index"
import Cart from "../pages/Cart/index"
import Login from "../pages/Login/index"
import Menu from "../pages/Menu/index"
import PaymentSuccess from "../pages/PaymentSuccess/index"
import Register from "../pages/Register/index"

const Navigation = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;
