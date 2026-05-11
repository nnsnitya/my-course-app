import React, { useEffect, useState } from "react";
import Course from "./Course";


const Allcourses = () => {

    useEffect(() => {
        document.title = "All Courses";
    }, []);

    const [courses, setCourses] = useState([
        {title: "Java Course", description: "This is Java course"},
        {title: "Django Course", description: "This is Django course"},
        {title: "React JS Course", description: "This is React JS course"}
    ])

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length > 0 ?
                courses.map((item) => <Course course={item} />) :
                "No Courses"
            }
        </div>
    );
}

export default Allcourses;