import "./App.css";
import Players from "./components/Players";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import ListofPlayers from "./components/ListofPlayers";
import Add from "./components/Add";
import DetailPlayer from "./components/DetailPlayer";
import Protected from "./components/Protected";
import Login from "./components/Login";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Players />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <ListofPlayers />
            </Protected>
          }
        />
        <Route
          path="/add"
          element={
            <Protected>
              <Add />
            </Protected>
          }
        />
        <Route
          path="/update/:id"
          element={
            <Protected>
              <Add />
            </Protected>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Protected>
              <DetailPlayer />
            </Protected>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
