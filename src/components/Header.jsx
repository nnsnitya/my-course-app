import React from "react";

function Header({name, title}) {
    return (
        <div style={{background: "yellow", padding: 20, width: 800}}>
            <h1>{title}</h1>
            <h1>{ name }</h1>
            <p>This is my program, I am creating course app</p>
            <p>Because I want to develop application that calls my Rest API's</p>
        </div>
    );
}

export default Header;