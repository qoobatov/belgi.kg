import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import MyTrades from "./components/MyTrades/MyTrades";
import TradeList from "./components/TradeList/TradeList";
import NewOrder from "./components/NewOrder/NewOrder";
import BayerServices from "./components/BayerServices/BayerServices";

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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
