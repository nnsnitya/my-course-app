import axios from "axios";
import { React } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {

    const deleteCourses = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (resp) => {
                toast.success("Course deleted!!");
                update(id);
            },
            (error) => {
                toast.error("Error: Something went wrong!!");
            }
        )
    };

    return (
        <Card className="my-2">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {
                        deleteCourses(course.id);
                    }}
                    >Delete</Button>
                    <Button color="warning mx-2">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;