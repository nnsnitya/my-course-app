import React, { useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Addcourse = () => {

    useEffect(() => {
        document.title = "Add a Course";
    }, []);

    return (
        <div>
            <h1>Fill Course Details</h1>
            <Form>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" placeholder="Enter title here" name="title" id="title" />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" placeholder="Enter description here" name="description" id="description" />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning mx-2">Clear</Button>
                </Container>
            </Form>
        </div>
    );
}

export default Addcourse;