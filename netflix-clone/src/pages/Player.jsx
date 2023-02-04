import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { API_KEY, SERVER } from '../utils/constans'
import { BiArrowBack } from 'react-icons/bi'

const Player = () => {
  const navigate = useNavigate()
  const [data, setData] = useState()
  const location = useLocation();


  useEffect(() => {
    if (location.state) {
      axios.get(`${SERVER}movie/${location.state.id}/videos?api_key=${API_KEY}`)
      .then((res)=>{
        setData(res.data)})
    }
  }
  )

  console.log()
  return (
    <>
      <div>
        <div className='absolute px-10 cursor-pointer z-10 text-white bg-black w-full h-[70px] gap-3 flex items-center' onClick={() => navigate(-1)}>
          <span><BiArrowBack/></span><span>Back</span>
          <span className='text-white pl-4'>{location.state?.name}</span>
        </div>
        <iframe src={`https://www.youtube.com/embed/${data?.results[0].key}?autoplay=1&mute=1`}  title="description"  className='w-screen h-screen '></iframe>
      </div>
    </>
  )
}

export default Player