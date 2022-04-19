import React from 'react'
import classes from "./Contact.module.css";
import { DatePicker,Space, Pagination, Button } from 'antd';

const Contact=()=> {
 
function onChange(date, dateString) {
  console.log(date, dateString);
}


  

  return (
    <div className={classes.contactClass}>
       
        
        <Space direction="vertical">
          
    <DatePicker onChange={onChange} />
    
  </Space> <br />
  

<Pagination style={{margin:'20px'}} defaultCurrent={1} total={50} /> <br />

<Button type="primary" >
          Primary
        </Button>
        
    </div>
    
  )
}

export default Contact;