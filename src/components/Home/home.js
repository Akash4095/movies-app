import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/movieListing'
import { useDispatch } from 'react-redux'
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../redux/moviesReducer/movieSlice'

const Home = () => {
  const dispatch = useDispatch()

  const movieText = "Mission"
  const showText = "Friends"

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])
  return (
    <div>
      <div className='banner-img'>

      </div>
      <MovieListing />
    </div>
  )
}

export default Home