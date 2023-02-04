import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../componets/Header'
import { fireBaseAuth } from '../utils/firebase-config'

 const Login = () => {
  const navigate = useNavigate()
  const [ data, setData ] = useState({
      email:"",
      password:""
}) 

const handleSignIn = () =>{
  signInWithEmailAndPassword(fireBaseAuth,data.email,data.password)
  .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user)
  })
  .catch((err)=>{
      const errCode = err.code;
      const errMsg =err.message;
      console.log(errCode,errMsg)
  })
  
  onAuthStateChanged(fireBaseAuth, (currentUser) =>{
      if ( currentUser ) {
          navigate("/home")
      }
  })}

  return (
    <>
    <Header/>
     <div className='bg-black/70 relative flex justify-center items-center'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/ed2f162a-b9ef-43fd-8042-84978039a3ba/IN-en-20221206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="Background" className='w-[100vw] h-[100vh] -z-10'/>
            <div className='px-16 pb-8 bg-black/70 absolute'>
                <h3 className='text-4xl font-semibold text-red-500'>Sign In</h3>
                <form className='py-10 flex flex-col'>
                    <input type="Email" name="email" className='outline-none py-2 px-2 rounded-md my-2 text-white bg-gray-600 text-xl'
                            value={data.email}  placeholder='Enter Email'
                            onChange={(e)=>{
                        setData({...data,[e.target.name]:e.target.value})
                        }}/>
                    <input type="password" name="password" className='outline-none py-2 px-2  rounded-md my-2 text-white bg-gray-600 text-xl'
                            value={data.password}  placeholder='Enter password'
                            onChange={(e)=>{
                            setData({...data,[e.target.name]:e.target.value})
                          }}/>
                </form>
                <button className='py-3 px-16 bg-red-600 text-xl w-full rounded-md' onClick={ handleSignIn }>Sign In</button>
                <Link to=""><span className='flex justify-end p-1 text-gray-400'>you need help?</span></Link>
                <div className='py-10'>
                  <span className='text-white pr-2'>New to ......?</span><Link to="/"><span className='text-gray-400'>Sign Up now</span></Link>
                </div>
             </div>
      </div>
    {/* <Header/>
    <div className='relative'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/ed2f162a-b9ef-43fd-8042-84978039a3ba/IN-en-20221206-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
                alt="Background" className='w-[100vw] h-[100vh]'/>
        <div className='bg-black/60 absolute top-0 text-white m-auto w-[100vw] h-[100vh] flex justify-center items-center'>
             <div className='p-16 bg-black/70'>
                <h3 className='text-4xl font-semibold'>Sign In</h3>
                <form className='py-10 flex flex-col'>
                    <input type="Email" name="email" className='outline-none py-2 px-2 rounded-md my-2 text-white bg-gray-600 text-xl'
                            value={data.email}  placeholder='Enter Email'
                            onChange={(e)=>{
                        setData({...data,[e.target.name]:e.target.value})
                        }}/>
                    <input type="password" name="password" className='outline-none py-2 px-2  rounded-md my-2 text-white bg-gray-600 text-xl'
                            value={data.password}  placeholder='Enter password'
                            onChange={(e)=>{
                            setData({...data,[e.target.name]:e.target.value})
                          }}/>
                </form>
                <button className='py-3 px-16 bg-red-600 text-xl w-full rounded-md' onClick={ handleLogin }>Sign In</button>
                <Link to=""><span className='flex justify-end p-1 text-gray-400'>you need help?</span></Link>
                <div className='py-10'>
                  <span className='text-white pr-2'>New to ......?</span><Link to="/signup"><span className='text-gray-400'>Sign Up now</span></Link>
                </div>
             </div>
        </div>
      </div> */}
    </>
  )
}

export default Login