import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../componets/Header'
import Slider from '../componets/Slider'
import { fetchMovies, getGenres } from '../store'



const Landing = () => {
  const navigate = useNavigate()

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  },[dispatch,genresLoaded])

  //console.log(movies)

  return (
    <>
      <div className='bg-gray-800'>
        <Header />
        <div className='relative text-white'>
          <img src={`https://image.tmdb.org/t/p/w500${movies[1]?.image}`}
            alt="movie" className='-z-10 h-[100vh] w-[100vw] object-cover' />
          <div className='absolute bottom-36 left-24'>
            <h1 className='mx-2 py-6 text-2xl font-semibold '>{movies[1]?.name}</h1>
            <button className='px-10 py-2 bg-red-500 mx-2' onClick={() => navigate("/play", { state: { "name": movies[1].name, "id": movies[1].id } })}>play</button>
            <button className='px-10 py-2 bg-red-500 mx-2'>info</button>
          </div>
        </div>
        <Slider movies={movies} />
      </div>
    </>
  )
}

export default Landing