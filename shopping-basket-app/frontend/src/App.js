import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <NavBar/>
      <Routes>
        <Route path="/cart" exact element={<Cart/>} />
        <Route path="/not-found" element={<NotFound/>} />
        <Route path="/" exact element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
