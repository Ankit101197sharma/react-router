import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {id} = useParams();
  return (
    <div>
        

        <h1>I AM  {id} User</h1>
    </div>
  )
}

export default User;