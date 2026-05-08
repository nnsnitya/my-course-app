import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';

function App() {

  const btnHandle=() => {
    toast("Button is clicked.", {
      position: 'bottom-right'
    });
  }

  return (
    <div>
      <ToastContainer/>
      <Home/>
      <Course course={{ title: "Django Course", description: "This is Django Course" }}/>
      <Course course={{ title: "Java Course", description: "This is Java Course" }}/>
    </div>
  );
}

export default App;
