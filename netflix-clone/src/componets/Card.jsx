import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';


const Card = ({movieData, isLiked = false}) => {

  const navigate = useNavigate()
  const [isHovered,setIsHovered] = useState(false)
  const [isFav,setIsFav] = useState(true)
  // console.log(isFav)

  return (
    <>
      <div className='max-w-[1324px] mx-auto text-gray-700 inline-block'>
          <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} 
                  className='max-w-[230px] w-[230px] h-[100%] cursor-pointer relative rounded-sm shadow-lg shadow-gray-800'>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="card" className='rounded-sm w-[100%] h-[100%] z-[30] '/>
            {
              isHovered && 
              <div className='bg-white absolute rounded-lg -top-24 max-w-[290px] w-[330px] h-[100%] hover:z-[999] ease-in-out duration-300'>
                <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="card" className='w-[290px] overflow-hidden' onClick={() =>navigate('/play', {state:{"name":movieData.name,"id":movieData.id}})}/>
                {/* <video src='' controls muted autoPlay loop className='w-full transition-opacity h-fit top-0'></video> */}
                <div className='px-4  pb-4 bg-white rounded-b-md shadow-md shadow-slate-100 border-x-2 border-b-2 border-gray-300 '>
                    <h1 className='bg-white hover:font-semibold py-2 hover:text-red-500'  onClick={() => navigate('/play', {state:{"name":movieData.name,"id":movieData.id}})}>{movieData.name}</h1>
                    <div className='bg-white text-xl text-gray-800 flex justify-between py-2'>
                        <div className='flex gap-4'>
                            <h3  onClick={() =>navigate('/play', {state:{"name":movieData.name,"id":movieData.id}})} className="hover:text-red-500 text-lg"><FaPlay/></h3>
                            <h3><AiFillLike/></h3>
                            <h3><AiFillDislike/></h3>
                            <h3 onClick={()=> setIsFav(!isFav)}>{isFav?<AiOutlinePlusCircle/>:<AiFillCheckCircle/>}</h3>
                        </div>
                        <div>
                            <h3><AiOutlineCaretDown/></h3>
                        </div>
                    </div>
                    <ul className='flex gap-2 text-xs pt-2'>
                      {movieData.genres.map((data,index)=>{
                        return <li key={index} className="border-2 p-2 rounded-full border-gray-100 font-semibold ">{data}</li>
                      })}
                    </ul>
                </div>
              </div>
            }
        </div>
      </div>
    </>
  )
}

export default Card