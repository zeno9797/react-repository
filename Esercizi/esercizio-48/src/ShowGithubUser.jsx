import React from 'react'
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'


function ShowGithubUser() {
  
  return (
    <div>
       <Link to=":username">Click to show data user</Link> 
   
        <Outlet/>
    </div>
  )
}

export default ShowGithubUser