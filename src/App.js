import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import "./App.css";

import "./font/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Product />
    </div>
  );
}

export default App;
