import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'
import Context from '../context/data/Context'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from 'react-router-dom';

const UserPage = () => {
    const {currentUser} = useContext(AuthContext)

  return (
    <div>
        <h1>UserPage</h1>
        <div className='usersAuth'>
            <img style={{width: '6rem', height: "5.7rem", borderRadius: '40px'}} src={currentUser.photoURL} alt="" />
            <h4 style={{textTransform: "uppercase", fontSize: "16px"}}>Hi, <>{currentUser.displayName}</></h4> <br />

            <div>
               <Link to='/'><button style={{padding: '10px', borderRadius: "10px", width: '10rem', gap: '7px'}} onClick={() => signOut(auth)}>Logout</button></Link>
            </div>
          </div>
    </div>
  )
}

export default UserPage