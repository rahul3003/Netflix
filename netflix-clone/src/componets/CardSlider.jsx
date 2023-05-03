import React, { useRef } from 'react'
import Card from './Card'
import { AiOutlineRightCircle } from 'react-icons/ai';
import { AiOutlineLeftCircle } from 'react-icons/ai';
import { useState } from 'react';

const CardSlider = ({ data, title }) => {

  const [showSideButton, setShowSideButton] = useState(false)
  const [sliderPos, setSliderPos] = useState(0)
  const listRef = useRef()

  const handleDirection = ((direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === 'left' && sliderPos >= 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`
      setSliderPos(sliderPos - 1)
    }
    if (direction === 'right' && sliderPos < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
      setSliderPos(sliderPos + 1)
    }

  })


  return (
    <div className='mt-8 mb-10 relative px-4 max-w-[1460px]'
      onMouseOver={() => setShowSideButton(true)} onMouseLeave={() => setShowSideButton(false)}>
      <div>
        <h1 className='pb-4 text-3xl font-bold text-red-500 '>{title}</h1>
        <div className='flex mx-auto gap-4 translate-x-0 z-[999]' ref={listRef}>
          {
            data?.map((movie, index) => {
              return <Card movieData={movie} title={title} index={index} key={movie.id} />
            })
          }
        </div>
      </div>
      {showSideButton && <div className='absolute top-[50%] text-gray-100  w-full flex justify-between'>
        <span className='text-4xl font-bold rounded-full bg-black/40 hover:bg-black cursor-pointer float-right right-4 z-[100]'
        ><AiOutlineLeftCircle onClick={() => handleDirection('left')} /></span>
        <span className='text-4xl font-bold rounded-full bg-black/40 hover:bg-black cursor-pointer float-left left-4 z-[100]'
        ><AiOutlineRightCircle onClick={() => handleDirection('right')} /></span>
      </div>}
    </div>
  )
}

export default CardSlider;