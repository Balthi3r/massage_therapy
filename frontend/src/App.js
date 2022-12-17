import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import Massages from './pages/Massages';
import about from './pages/about'

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" link="/about" element={<about/>}/>
            <Route path="/massages" element={<Massages/>}/>
            <Route path="/login" element={<login/>}/>
            <Route path="/booking" element={<book/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App;
