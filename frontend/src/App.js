import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<about/>}/>
                <Route path="massages" element={<massages/>}/>
                <Route path="login" element={<login/>}/>
                <Route path="booking" element={<book/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
