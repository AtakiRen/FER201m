import "./App.css";
import Players from "./components/Players";
import { BrowserRouter } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import ListofPlayers from "./components/ListofPlayers";
import { Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import DetailPlayer from "./components/DetailPlayer";
function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Players />}></Route>
        <Route path="/dashboard" element={<ListofPlayers />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/update/:id" element={<Add />}></Route>
        <Route path="/detail/:id" element={<DetailPlayer />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
