import React from 'react'
import CardSlider from './CardSlider'

const Slider = ({movies}) => {

    const getMoviesRange = (from,to) =>{
        return movies?.slice(from,to)
    }

  return (
    <>
      <div className='overflow-hidden pb-[120px]'>
        <CardSlider title="Trending Now" data={getMoviesRange(0,10)} />
        <CardSlider title="Blockbuster Movies" data={getMoviesRange(10,20)} />
        <CardSlider title="Popular on netflix" data={getMoviesRange(20,30)} />
        <CardSlider title="Action" data={getMoviesRange(30,40)} />
        <CardSlider title="New releases" data={getMoviesRange(40,50)} />
        <CardSlider title="Epic" data={getMoviesRange(50,60)} />
      </div>
    </>
  )
}

export default Slider