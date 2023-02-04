import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../componets/Header'
import Slider from '../componets/Slider'
import { fetchMovies } from '../store'



const TvShows = () => {

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies)
  const dispatch = useDispatch();

  useEffect(()=>{
    if (genresLoaded)
     {dispatch(fetchMovies({ type:"tv"}));
   }
  })

  //console.log(genresLoaded)

  return (
    <>
     <div className='bg-gray-800'>
      <Header/>
        <div className='relative pt-[90px]'>
            <div className='absolute bottom-36 left-24'>
               {/* {genresLoaded?.map((data)=>(
                <span>{data}</span>
               ))} */}
            </div>
        </div>
        <Slider movies={movies} />
     </div>
    </>
  )
}

export default TvShows;