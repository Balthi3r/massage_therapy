import NavBar from "../comp/nav/NavBar"
import React from 'react'
import "./massage.css"
import "../comp/nav/navbar.css"

const massages=()=>{
    return(
        <div>
        <NavBar/>
        <div class="container">
            <img src="" alt="swedish massage" style="width:100%;"></img>
            <div class="text-block">
                <h4>Swedish Massage</h4>
                <p>Swedish massage is a gentle full-body massage</p>
                <button className="massage button" href="/book">Book Now</button>
            </div>
        </div> 
        </div>
    )
}
export default massages