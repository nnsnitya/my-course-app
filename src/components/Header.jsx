import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name, title}) {
    return (
        <div>
            <Card style={{background: "yellow"}}>
                <CardBody>
                    <h2>Welcome to Courses Application</h2>
                </CardBody>
            </Card>
            
        </div>
    );
}

export default Header;