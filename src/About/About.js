import React from "react";

import classes from "./About.module.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <div className={classes.aboutClass1}>
      <button type="button" class="btn btn-primary" onClick={() => navigate('/')}>
        Home Page
      </button>
    </div>
  );
};

export default About;
