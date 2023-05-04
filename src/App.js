import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import MyTrades from "./components/MyTrades/MyTrades";
import TradeList from "./components/TradeList/TradeList";
import NewOrder from "./components/NewOrder/NewOrder";
import BayerServices from "./components/BayerServices/BayerServices";
import Register from "./components/Register/Register";
import Production from "./components/Production/Production";
import SelectRole from "./components/SelectRole/SelectRole";
import RegisterProvider from "./components/Register/RegisterProvider";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/belgi.kg" element={<Login />} />
            <Route path="/my-trades" element={<MyTrades />} />
            <Route path="/trade-list" element={<TradeList />} />
            <Route path="/new-order" element={<NewOrder />} />
            <Route path="/bayer-services" element={<BayerServices />} />
            <Route path="/register" element={<Register />} />
            <Route path="/production" element={<Production />} />
            <Route path="/select-role" element={<SelectRole />} />
            <Route path="/register-provider" element={<RegisterProvider />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
