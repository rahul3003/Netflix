import { onAuthStateChanged, signOut } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fireBaseAuth } from '../utils/firebase-config'
import { FaPowerOff } from 'react-icons/fa'

const Header = () => {
  const navigate = useNavigate()
  const [user , setUser] =useState(false)

  onAuthStateChanged(fireBaseAuth, (currentUser) =>{
    if ( currentUser ) {
        setUser(true)
    }
})

const handleSignOut = () => { 
  signOut(fireBaseAuth)
}
  return (
    <>
      <nav className='top-0 absolute z-40 px-4 w-full py-4 md:px-20' >
        {!user ? <div className='flex justify-between text-white'>
            <Link to="/home"><img src="netflix_PNG11.png" alt="NavLogo" className='w-[130px]'/></Link>
            <button type="" className='bg-red-500 px-6 rounded-md '
                     onClick={() => navigate('/login')}>Login</button>
        </div>:<div className='flex justify-between text-white'>
            <Link to="/home"><img src="netflix_PNG11.png" alt="NavLogo" className='w-[130px]'/></Link>
            <div className="flex items-center justify-center">
                <Link to="/home"><span className='text-white px-4 mx-4 text-xl font-semibold bg-black/10 py-2 rounded-xl'>Home</span></Link>
                <Link to="/tvShows"><span className='text-white px-4 mx-4 text-xl font-semibold bg-black/10 py-2 rounded-xl'>Tv Shows</span></Link>
                <Link to="/movies"><span className='text-white px-4 mx-4 text-xl font-semibold bg-black/10 py-2 rounded-xl'>Movies</span></Link>
                <Link to="/watchLater"><span className='text-white px-4 mx-4 text-xl font-semibold bg-black/10 py-2 rounded-xl'>Watch Later</span></Link>
            </div>
            <button type="" className='text-red-500 px-6 rounded-md text-3xl '
                     onClick={ handleSignOut }><FaPowerOff/></button>
        </div>}
      </nav>
    </>
  )
}

export default Header