import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Addcourse = () => {

    useEffect(() => {
        document.title = "Add a Course";
    }, []);

    const [course, setCourse] = useState({});

    //form Handler Function
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/course`, data).then(
            (resp) => { 
                console.log(resp);
                console.log("success");
                toast.success("Course added successfully!!");
                setCourse({id:"", title:"", description:""});
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error: Something went wrong!!");
            }
        )
    };

    return (
        <div>
            <h2>Fill Course Details</h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId"
                        onChange={(e) =>{
                            setCourse({...course, id: e.target.value});
                        }}
                        value={course.id}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" placeholder="Enter title here" name="title" id="title"
                        onChange={(e) => {
                            setCourse({...course, title: e.target.value});
                        }}
                        value={course.title}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" placeholder="Enter description here" name="description" id="description"
                        onChange={(e) => {
                            setCourse({...course, description: e.target.value});
                        }}
                        value={course.description}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" type="submit">Add Course</Button>
                    <Button type="reset" onClick={() => {
                        setCourse({id:"", title:"", description:""});
                    }} color="warning mx-2">Clear</Button>
                </Container>
            </Form>
        </div>
    );
}

export default Addcourse;