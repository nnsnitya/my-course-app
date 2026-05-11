import {React, useEffect} from 'react';
import { Button, Container } from 'reactstrap';

const Home = () => {

    useEffect(() => {
        document.title = "Home Page";
    }, []);

    return (
        <div>
            <Container className="bg-light border">
                <h2>This is Reactstrap component</h2>
                <p>Powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers.</p>
                <Button color='primary' outline>Start Using</Button>
            </Container>
        </div>
    );
};

export default Home;