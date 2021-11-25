import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SingUpPage";
import Footer from "./pages/Footer/Footer";

// import ProductPage from "./pages/ProductPage/ProductPage";
import "./App.css";

import "./font/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
