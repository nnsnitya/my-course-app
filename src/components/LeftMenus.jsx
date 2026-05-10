import React from "react";
import { ListGroup} from "reactstrap";
import { Link } from "react-router-dom";

const LeftMenus = () => {

    return (
        <ListGroup flush>
            <Link tag="a" to="/" action>
                Home
            </Link>
            <Link tag="a" to="/add-course" action>
                Add Course
            </Link>
            <Link tag="a" to="/view-courses" action>
                View Courses
            </Link>
            <Link tag="a" to="#!" action>
                About
            </Link>
            <Link tag="a" to="#!" action>
                Contact
            </Link>
        </ListGroup>
    );
};

export default LeftMenus;