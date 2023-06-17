import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Home() {
  return (
    <>
    <Link to=":username">show name</Link>
    <Outlet />
    </>
  )
}

export default Home