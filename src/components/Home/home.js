import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/movieListing'
import moviesApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../redux/movies/movieSlice'

const Home = () => {

  const movieText = "Harry"
  const dispatch =useDispatch()

  useEffect(() => {
 
    const fetchMovies = async () => {
      const response = await moviesApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log(error, "error")
        })
        dispatch(addMovies(response.data))
      console.log(response, 'response')
    }

    fetchMovies()
  }, [])
  return (
    <div>
      <div className='banner-img'>

      </div>
      <MovieListing />
    </div>
  )
}

export default Home