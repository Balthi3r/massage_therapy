
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import Massages from './pages/Massages';
import Auth from "./pages/auth"

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<about/>}/>
            <Route path="/massages" element={<Massages/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/booking" element={<book/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App;
