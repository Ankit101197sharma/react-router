import React from 'react'
import classes from "./Contact.module.css";
import { DatePicker,Space, Pagination} from 'antd';
import { useNavigate } from 'react-router-dom';

const Contact=()=> {
 
  const navigate = useNavigate();
  console.log(navigate)
function onChange(date, dateString) {
  console.log(date, dateString);
}


  

  return (
    <div className={classes.contactClass}>
       
        
        <Space direction="vertical">
          
    <DatePicker onChange={onChange} />
    
  </Space> <br />
  

<Pagination style={{margin:'20px'}} defaultCurrent={1} total={50} /> <br />


<button type="button" class="btn btn-primary" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
    
  )
}

export default Contact;