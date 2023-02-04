import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../componets/Header'
import   { fireBaseAuth }   from '../utils/firebase-config'
import { FaArrowRight } from 'react-icons/fa'
const SignUp = () => {
    const navigate = useNavigate()
    const [ showPassword , setShowPassword ] = useState(true)
    const [ data, setData ] = useState({
        email:"",
        password:""
}) 

const handleSignUp = () =>{
createUserWithEmailAndPassword(fireBaseAuth,data.email,data.password)
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
            <div className='text-center absolute w-[45%] text-white pt-[70px]'>
                <h1 className='text-7xl font-semibold m-auto'>Unlimited movies, TV shows and more.</h1>
                <h3 className='text-4xl my-6'>Watch anywhere. Cancel anytime.</h3>
                {showPassword ? 
                <div>
                    <h6 className='text-xl my-4'>Ready to watch? Enter your email to create or restart your membership.</h6>
                    <div className='flex'>
                        <input type="Email" name="email" className='outline-none py-5 px-2 w-[66%] text-gray-400 text-xl'
                            value={data.email}  placeholder='Enter Email'
                            onChange={(e) => {
                                setData({...data,[e.target.name]:e.target.value})
                            }}/>
                        <span className='flex items-center justify-center py-5 px-12 bg-red-600 text-xl'><button className='pr-4' onClick={()=>setShowPassword(false)}>Get Started </button><FaArrowRight/></span>
                    </div> 
                </div>: <form>
                    <input type="password" name="password" className='outline-none py-5 px-2 w-[66%] text-gray-400 text-xl'
                            value={data.password}  placeholder='Enter password'
                            onChange={(e) => {
                                setData({...data,[e.target.name]:e.target.value})
                            }}/>
                        <button className='py-5 px-16 bg-red-600 text-xl' onClick={ handleSignUp }>Sign Up</button>
                    </form>}
                
            </div>
        </div>
       
     {/* <div className='bg-gray-900'>
                alt="Background" className='w-[100vw] h-[100vh]'/>
        <div className='bg-black/60 absolute top-0 text-white m-auto w-[100vw] h-[100vh] flex justify-center items-center'>
             <div className='text-center'>
                <h1 className='text-7xl font-semibold w-[60%] mx-auto'>Unlimited movies, TV shows and more.</h1>
                <h3 className='py-4 font-normal text-3xl'>Watch anywhere. Cancel anytime.</h3>
                <h6 className='text-xl'>Ready to watch? Enter your email to create or restart your membership.</h6>
                    {showPassword?
                    <div className='py-4'>
                        <input type="Email" name="email" className='outline-none py-5 px-2 w-[40%] text-gray-400 text-xl'
                            value={data.email}  placeholder='Enter Email'
                            onChange={(e)=>{
                        setData({...data,[e.target.name]:e.target.value})
                        }}/>
                        <button className='py-5 px-16 bg-red-600 text-xl' onClick={()=>setShowPassword(false)}>Get Started</button>
                    </div>:
                    <div className='py-4'>
                        <input type="password" name="password" className='outline-none py-5 px-2 w-[40%] text-gray-400 text-xl'
                            value={data.password}  placeholder='Enter password'
                            onChange={(e)=>{
                            setData({...data,[e.target.name]:e.target.value})
                            }}/>
                            <button className='py-5 px-16 bg-red-600 text-xl' onClick={ handleSignUp }>Sign In</button>
                    </div>}
            </div>   
        </div>
        <div className='md:flex justify-center items-center my-4 bg-black text-white md:p-8'>
            <div className='md:w-[50%] px-12 md:px-20 font-semibold'>
                <h1 className='text-3xl md:text-5xl py-8'>Enjoy on your TV.</h1>
                <p className='text-lg md:text-2xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="slide1" />
            </div>
        </div>
        <div className='md:flex justify-center flex-row-reverse items-center my-4 bg-black text-white md:p-8'>
            <div className='md:w-[50%] px-12 md:px-20 font-semibold'>
                <h1 className='text-3xl md:text-5xl py-8'>Download your shows to watch offline.</h1>
                <p className='text-lg md:text-2xl'>Save your favourites easily and always have something to watch.</p>
            </div>
            <div className='relative bg-gray-700'>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="slide2" />
                <div className='absolute bottom-6 left-12 md:left-36 rounded-lg border-2 bg-black flex'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className='p-4 w-[60px] md:w-[90px]' alt="download"/>
                    <span className='flex flex-col justify-center md:px-6'>
                        <h6 className='md:text-xl'>Stranger Things</h6>
                        <h6 className='text-blue-600 text-left text-xs md:text-sm'>Downloading...</h6>
                    </span>
                    <span>
            
                    </span>
                </div>
            </div>
        </div>
        <div className='md:flex justify-center flex-row items-center my-4 bg-black text-white md:p-8'>
            <div className='md:w-[50%] px-12 md:px-20 font-semibold'>
                <h1 className='text-3xl md:text-5xl py-8'>Watch everywhere.</h1>
                <p className='text-lg md:text-2xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className=''>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="slide2" />
            </div>
        </div>
        <div className='md:flex justify-center flex-row-reverse items-center my-4 bg-black text-white md:p-8'>
            <div className='w-[50%] px-20 font-semibold'>
                <h1 className='text-3xl md:text-5xl py-8'>Create profiles for children.</h1>
                <p className='text-lg md:text-2xl'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.
.</p>
            </div>
            <div className='mx-5'>
                <img src="https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420g" alt="slide2" />
            </div>
        </div>
     </div> */}
    </>
  )
}

export default SignUp