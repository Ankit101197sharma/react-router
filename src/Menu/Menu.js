import React from 'react';
import './Menu.css';
import Button from "@mui/material/Button"

import { Link } from 'react-router-dom';

const Menu = () =>{

 return(
  <div>
   <nav className="navstyle">
    <ul>
       <li> <Link to="/">  Home </Link> </li>
       <li> <Link to="About"> About </Link> </li>
       <li> <Link to="Contact"> Contact  </Link> </li>
     <Button style={{backgroundColor:"red"}} > <li> <Link to="signin">  Signin  </Link> </li></Button>  
    </ul>
   </nav>
  </div>
 )

} 

export default Menu;
