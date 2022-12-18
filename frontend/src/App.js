import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import Massages from './pages/Massages';
import about from './pages/about'
import Auth from './pages/auth';

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" link="/about" element={<about/>}/>
            <Route path="/massages" element={<Massages/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/about" element={<about/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App;
