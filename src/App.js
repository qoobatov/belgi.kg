import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/belgi.kg" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
