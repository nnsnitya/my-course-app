import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import LeftMenus from './components/LeftMenus';

function App() {

  const btnHandle=() => {
    toast("Button is clicked.", {
      position: 'bottom-right'
    });
  }

  return (
    <div>
      <ToastContainer/>
      <Header/>
      <Container>
        <Row>
          <Col md={4}><LeftMenus/></Col>
          <Col md={8}><Home/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
