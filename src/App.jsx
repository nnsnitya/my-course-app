import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function App() {

  return (
    <div>
      <h1>This is bootstrap Component</h1>
      <Button color='primary'>React Button</Button>
    </div>
  );
}

export default App;
