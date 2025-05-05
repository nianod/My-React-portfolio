import React from "react";
import './amazon.css'
import Amazon from "../components/amazon";

function Header () {
    return(
        <div className="nav">
           <div>
             <h1>Arnold</h1>
             <Amazon/>
           </div>
            <div>
                <img src="{} " alt="" />
            </div>
        </div>
    );
};

export default Header;