import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import DashBoard from "./components/DashBoard";
import Add from "./components/Add";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
