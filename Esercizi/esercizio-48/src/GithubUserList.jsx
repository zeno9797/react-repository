import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function GithubUserList() {
  return (
    <div>
        <Link to="/users">Go to ShowGithubUser component</Link>
    </div>
  )
}

export default GithubUserList