import React from 'react'
import Header from './Header'

const PageNotFound = () => {
  return (
    <>
    <Header/>
    <div className='flex items-center justify-center bg-gray-800 h-screen'>
        <img src="404.svg" alt="Not Found" className='w-[80vw] h-[70vh]'/>
    </div>
    </>
  )
}

export default PageNotFound