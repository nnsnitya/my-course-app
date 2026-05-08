import {React} from 'react';
import { Button, Container } from 'reactstrap';

const Home = () => {

    return (
        <div>
            <Container className="bg-light border">
                <h1>This is Reactstrap component</h1>
                <p>Powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers.</p>
                <Button color='primary'>Button</Button>
            </Container>
        </div>
    );
};

export default Home;