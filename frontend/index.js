import ReactDOM from "react-dom/client"
import hom from "./home"
import massages from "./massages"
import react from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function Website(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<home/>}/>
                <Route index element={<home/>}/>
                <Route path="about" element={<about/>}/>
                <Route path="massages" element={<massages/>}/>
                <Route path="login" element={<login/>}/>
                <Route path="booking" element={<book/>}/>
            </Routes>
        </BrowserRouter>
    );
}