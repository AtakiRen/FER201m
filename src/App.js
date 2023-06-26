import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Detail from './components/Detail';
import Footer from './components/Footer';
import { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext';
import { Routes , Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import New from './components/New';
import Movie from './components/Movie';
function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Routes>
      <Route path="/" element = {<Main/>}></Route>
      <Route path="/detail/:id" element={<Detail/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/movie" element={<Movie/>} ></Route>
      <Route path="/new" element={<New/>} ></Route>

     
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
