import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Page from "./components/PageTest/Page";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/belgi.kg" element={<Login />} />
            <Route path="/page" element={<Page/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
