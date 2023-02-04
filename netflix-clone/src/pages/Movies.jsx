import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../componets/Header'
import SelectedGenres from '../componets/SelectedGenres'
import Slider from '../componets/Slider'
import { fetchMovies, getGenres } from '../store'



const Movies = () => {

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies)
  const genres = useSelector((state) => state.netflix.genres)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "movies" }));
    }
  },[dispatch,genresLoaded])

  // console.log(genres)

  return (
    <>
      <div className='bg-gray-800'>
        <Header />
        <div className=' text-white px-4 py-6 pt-[90px]'>
          <SelectedGenres genres={genres} type="movie"/>
        </div>
         {movies?.length ?<Slider movies={movies} />:<div>
          No Movies
         </div>}
      </div>
    </>
  )
}

export default Movies;