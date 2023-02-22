import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/movieListing'
import { useDispatch } from 'react-redux'
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
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