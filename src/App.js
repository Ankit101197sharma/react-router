import React from 'react';
import './App.css';
// import './Home.css';
import About from './About/About';
import Menu from './Menu/Menu';
import Contact from './Contact/Contact';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <Menu /> 
      
      
      <Routes>
      
       <Route path="/" exact element={<Home/> } />
       <Route path="about" element={<About/>} />
       <Route path="contact" element={<Contact/>} />
       
       </Routes>
    </BrowserRouter>
  );
}

const Home = () => {

  return (
     <div className="aboutClass"> 
        <h2> This is the Home Page. </h2>
        <img style={{width:'400px'}} src='data:image/jpeg;base64,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' />
      </div>
    )

}

export default App;