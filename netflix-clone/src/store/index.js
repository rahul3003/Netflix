import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_KEY, SERVER } from '../utils/constans';
import axios from 'axios'

const initialState = {
    movies:[],
    genresLoaded:false,
    genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async()=>{
    const { data: { genres } } = await axios.get(
        `${ SERVER }genre/movie/list?api_key=${ API_KEY }`
        );
        // console.log(data)
        return genres;
})

const createArrayFromRawData = (array,moviesArray,genres) => {
    // console.log(array)
    array.forEach((movie) =>{
        const movieGenres = [];
        movie.genre_ids.forEach((genre)=>{
            const name = genres.find(({id})=> id === genre);
            if (name) movieGenres.push(name.name)
        })
        if(movie.backdrop_path){
            moviesArray.push({
                id:movie.id,
                name:movie?.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres:movieGenres.slice(0,3),
            })
        }
    })
}

const getRawData = async (api,genres,paging) => {
    const moviesArray = [];
    for (let i=1; moviesArray.length < 60 && i < 10; i++){
        const { data:{ results }} = 
        await axios.get(`${api}${paging?`&page=${i}`:""}`)
        createArrayFromRawData(results,moviesArray,genres);
    }
    return moviesArray
}
 
export const  fetchMovies = createAsyncThunk("netflix/trending", async({type},thunkAPI)=>{
    const {netflix:{ genres }} = thunkAPI.getState();
    return getRawData(`${SERVER}trending/${type}/week?api_key=${API_KEY}`,genres,true);
    //console.log(data)
}
);

export const  fetchByGenres = createAsyncThunk("netflix/byGenres", async({genre,type},thunkAPI)=>{
    //console.log(genre,type)
    const {netflix:{ genres }} = thunkAPI.getState();
    return getRawData(`${SERVER}discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,genres);
    //console.log(data)
}
);

const netFlixSlice = createSlice({
    name:"Netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true;
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
        builder.addCase(fetchByGenres.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
    },
})

export default configureStore({
    reducer:{
        netflix: netFlixSlice.reducer,
    }
})