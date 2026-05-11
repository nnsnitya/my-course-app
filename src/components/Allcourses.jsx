import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {

    useEffect(() => {
        document.title = "All Courses";
    }, []);

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (resp) => {
                //success
                console.log(resp);
                toast.success("courses has been loaded!");
                setCourses(resp.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Error: Something went wrong!!");
            }
        )
    }

    //calling load function
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses, setCourses] = useState([]);

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id != id));
    };

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length > 0 ?
                courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />) :
                "No Courses"
            }
        </div>
    );
}

export default Allcourses;