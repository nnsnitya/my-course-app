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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const btnHandle=() => {
    toast("Button is clicked.", {
      position: 'bottom-right'
    });
  }

  return (
    <div>
      <Router>
        <ToastContainer/>
        <Header/>
        <Container>
          <Row>
            <Col md={4}><LeftMenus/></Col>
            <Col md={8}>
              <Routes>
                <Route path='/' Component={Home} exact />
                <Route path='add-course' Component={Addcourse} exact />
                <Route path='view-courses' Component={Allcourses} exact />
              </Routes>

            </Col>
          </Row>
        </Container>
      </Router>
      
    </div>
  );
}

export default App;
