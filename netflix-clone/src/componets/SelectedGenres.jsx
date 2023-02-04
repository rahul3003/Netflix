import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchByGenres } from '../store'

const SelectedGenres = ({ genres, type }) => {
    const dispatch = useDispatch()
    const [select,setSelect] = useState("Action")
    return (
        <>
            <div>
                <h2 className='text-xl font-medium pb-5 '>Genres </h2>
                <div className='relative flex flex-wrap gap-4'>
                    {genres?.map((data) => (<div key={data.id} onClick={() => {
                        setSelect(data.name)
                        dispatch(fetchByGenres({ genre: data?.id, type }))
                    }}
                        className={`ring-1 ring-white px-6 py-2  rounded-xl cursor-pointer ${select === data.name ? "bg-red-600":""}`}>
                        {data.name}
                    </div>))}
                </div>
            </div>
        </>
    )
}

export default SelectedGenres