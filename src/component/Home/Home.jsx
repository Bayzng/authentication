import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Authentication</h1>
        <div>
            <Link to='/register'><h1>Register</h1></Link>
        </div>
    </div>

  )
}

export default Home