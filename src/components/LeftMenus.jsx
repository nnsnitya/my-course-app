import React from "react";
import { ListGroup} from "reactstrap";
import { Link } from "react-router-dom";

const LeftMenus = () => {

    return (
        <ListGroup flush style={{textAlign: "left", padding: 50}}>
            <Link tag="a" to="/"
            className="list-group-item list-group-item-action">
                Home
            </Link>
            <Link tag="a" to="/add-course"
            className="list-group-item list-group-item-action">
                Add Course
            </Link>
            <Link tag="a" to="/view-courses"
            className="list-group-item list-group-item-action">
                View Courses
            </Link>
            <Link tag="a" to="#!"
            className="list-group-item list-group-item-action">
                About
            </Link>
            <Link tag="a" to="#!"
            className="list-group-item list-group-item-action">
                Contact
            </Link>
        </ListGroup>
    );
};

export default LeftMenus;