import React from "react";
import bg from "../../assets/NavOne.png";
import './NavBar.css'

export const NavBar = () => {
    return (
        <div style={{borderTop:"0.8rem solid black"}}>
        <div className="d-flex flex-row container" >
            <div className="d-flex flex-row">
                <div style={{marginTop:"-0.86rem", marginLeft:"-1.1rem"}} >
                    <img className="img-fluid " src={bg} >
                    </img>
                </div>
                <div>navbar</div>
            </div>
        </div>
        </div>
    );
};

export default NavBar;
