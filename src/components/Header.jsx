import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name, title}) {
    return (
        <div style={{background: "yellow", padding: 5}}>
            {/* <h1>{title}</h1>
            <h1>{ name }</h1> */}
            <Card>
                <CardBody>
                    <h1>Welcome to Courses Application</h1>
                    {/* <p>Because I want to develop application that calls my Rest API's</p> */}
                </CardBody>
            </Card>
            
        </div>
    );
}

export default Header;