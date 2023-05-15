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
import AllProductList from "./components/AllTradesList/AllProductionList";
import InfoProduct from "./components/AllTradesList/InfoProduct";
import InfoDealsPoduct from "./components/MyDeals/InfoDealsPoduct";
import DealsProduct from "./components/MyDeals/DealsProduct";
import SelectDeals from "./components/MyDeals/SelectDeals";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/belgi.kg" element={<Login />} />
            <Route path="/my-trades" element={<MyTrades />} />
            <Route path="/new-order" element={<NewOrder />} />
            <Route path="/select-order" element={<SelectOrders />} />
            <Route path="/bayer-services" element={<BayerServices />} />
            <Route path="/register" element={<Register />} />
            <Route path="/production" element={<Production />} />
            <Route path="/select-role" element={<SelectRole />} />
            <Route path="/register-provider" element={<RegisterProvider />} />
            <Route path="/authpage" element={<AuthPage />} />
            <Route path="/businescard" element={<BusinesCard />} />
            <Route path="/selectDeals" element={<SelectDeals />} />
            <Route path="/allTradesList">
              <Route index element={<AllTradesList />} />
              <Route path=":id" element={<Info />} />
            </Route>
            <Route path="/allProductList">
              <Route index element={<AllProductList />} />
              <Route path=":id" element={<InfoProduct />} />
            </Route>
            <Route path="/mydeals">
              <Route index element={<MyDeals />} />
              <Route path=":id" element={<InfoDeals />} />
            </Route>
            <Route path="/mydealsProducts">
              <Route index element={<DealsProduct />} />
              <Route path=":id" element={<InfoDealsPoduct />} />
            </Route>
            <Route path="/trade-list">
              <Route index element={<TradeList />} />
              <Route path=":id" element={<BulkMoreInfo />} />
            </Route>
            <Route path="/production-list">
              <Route index element={<ProductionList />} />
              <Route path=":id" element={<ProductMoreInfo />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
