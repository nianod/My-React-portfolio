import React from "react";
import Amazon from "../components/amazon";

function Header () {
    return(
        <div className="nav">
            <h1>Arnold</h1>
            <Amazon/>
        </div>
    );
};

export default Header;