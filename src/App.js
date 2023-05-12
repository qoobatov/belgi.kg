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
import AuthPage from "./components/AuthPage";
import BusinesCard from "./components/BusinesCard";
import MyDeals from "./components/MyDeals";
import AllTradesList from "./components/AllTradesList/AllTradesList";
import Info from "./components/AllTradesList/Info";
import InfoDeals from "./components/MyDeals/InfoDeals";
import SelectOrders from "./components/TradeList/SelectOrders";
import ProductionList from "./components/TradeList/ProductionList";
import BulkMoreInfo from "./components/TradeList/BulkMoreInfo";
import ProductMoreInfo from "./components/TradeList/ProductMoreInfo";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/belgi.kg" element={<Login />} />
            <Route path="/my-trades" element={<MyTrades />} />
            <Route path="/trade-list" element={<TradeList />} />
            <Route path="/bulk-more-info" element={<BulkMoreInfo />} />
            <Route path="/production-list" element={<ProductionList />} />
            <Route path="/product-more-info" element={<ProductMoreInfo />} />
            <Route path="/new-order" element={<NewOrder />} />
            <Route path="/select-order" element={<SelectOrders />} />
            <Route path="/bayer-services" element={<BayerServices />} />
            <Route path="/register" element={<Register />} />
            <Route path="/production" element={<Production />} />
            <Route path="/select-role" element={<SelectRole />} />
            <Route path="/register-provider" element={<RegisterProvider />} />
            <Route path="/authpage" element={<AuthPage />} />
            <Route path="/businescard" element={<BusinesCard />} />
            <Route path="/allTradesList">
              <Route index element={<AllTradesList />} />
              <Route path=":id" element={<Info />} />
            </Route>
            <Route path="/mydeals">
              <Route index element={<MyDeals />} />
              <Route path=":id" element={<InfoDeals />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
