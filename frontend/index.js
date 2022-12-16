import ReactDOM from "react-dom/client"
import hom from "./home"
import massages from "./massages"
import react from "react"
import { BrowserRouter } from "react-router-dom"

export default function Website(){
    return(
        <BrowserRouter>
            <routes>
                <route path="/" element={<home/>}
                
            </routes>
        </BrowserRouter>
    )
}