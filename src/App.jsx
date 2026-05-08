import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Header name = "Nityanand Singh" title = "First Card" />
      <hr/>
      <Header name = "Pankaj Saxena" title = "Second Card" />
      <hr/>
        <h1>This is my React App</h1>
        <p>This is my program, I am creating course app</p>
        <p>Because I want to develop application that calls my Rest API's</p>
      <hr/>
      <Header name = "Premshankar Kushwaha" title= "Third Card"/>
    </div>
  )
}

export default App
